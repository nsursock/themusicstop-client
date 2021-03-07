<template>
<div id="main" class="h-screen w-screen mx-auto relative overflow-auto">

<LoadingModal v-show="isLoading" :isLoading="isLoading"/>

  <!-- <button v-on:click="tick(10)" type="button" name="button" class="border-black border-2 absolute z-50">Step</button> -->
  <!-- <div class="absolute z-50 p-2 shadow-md rounded-lg text-xs mt-5">
    <span>#nodes: {{nodes.length}}</span>&nbsp;
    <span>#edges: {{edges.length}}</span>
  </div> -->
  <div @focus="toggleCard" v-for="node in nodes" :key="node.key" class="z-10 rounded-full absolute focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
  v-bind:style="{ left: node.pos.x + 'px', top: node.pos.y + 'px' }">
    <div class="w-10 border-2 border-gray-300 rounded-full overflow-hidden flex justify-center items-center">
      <img v-if="node.profileImage" :src="node.profileImage" class="h-full w-full object-cover" />
      <svg v-else class="text-gray-300 bg-gray-600 rounded-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </div>

    <!-- <div v-show="showCard" class=" container mx-auto py-10">
      <div class="border m-6 rounded-lg  bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div class="sm:flex sm:items-center px-6 py-4">
          <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://api.adorable.io/avatars/196/abott@adorable.png" alt="">
          <div class="text-center sm:text-left sm:flex-grow">
            <div class="mb-4">
              <p class="text-xl leading-tight">{{ node.firstName }} {{ node.lastName }}</p>
              <p class="text-sm leading-tight text-grey-dark">Software Developer at SpongeBob LLC.</p>
            </div>
            <div class="flex flex-wrap">
              <button class=" text-xs font-semibold rounded-full px-4 py-1 mx-3  leading-normal bg-white border border-blue text-blue hover:bg-blue hover:text-white">Call</button>
              <button class="  text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
            </div>
          </div>
        </div>
      </div>
    </div> -->

  </div>
  <svg v-for="edge in edges" :key="edge.key" class="absolute" :height="winHeight" :width="winWidth">
    <line v-if="edge.source && edge.target"  :x1="edge.source.pos.x + center" :y1="edge.source.pos.y + center" :x2="edge.target.pos.x + center" :y2="edge.target.pos.y + center" class="stroke-current text-gray-300 stroke-2" :stroke-dasharray="edge.status === 'pending' ? '5,5' : '0,0'"/>
  </svg>
</div>
</template>

<script>
import { apiUrl } from '@/env.json'
import axios from 'axios'
import LoadingModal from '@/components/LoadingModal'

var Vector = function(x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.round = function() {
  return new Vector(Math.round(this.x), Math.round(this.y));
};

Vector.prototype.add = function(v2) {
  return new Vector(this.x + v2.x, this.y + v2.y);
};

Vector.prototype.sub = function(v2) {
  return new Vector(this.x - v2.x, this.y - v2.y);
};

Vector.prototype.mult = function(n) {
  return new Vector(this.x * n, this.y * n);
};

Vector.prototype.div = function(n) {
  return new Vector((this.x / n) || 0, (this.y / n) || 0);
};

Vector.prototype.copy = function() {
  return new Vector(this.x, this.y);
};

Vector.prototype.mag = function() {
  return Math.sqrt(this.x*this.x + this.y*this.y);
};

Vector.prototype.norm = function() {
  return this.div(this.mag());
};

export default {
  components: {
    LoadingModal
  },
  async mounted() {
    this.isLoading = true;
    await this.setNodes();
    await this.setEdges();
    this.isLoading = false;

    let iter = 0;
    let timestep = 1, tickstep = 10;
    var timer = setInterval(() => {
      iter++;
      this.tick(timestep);
      var energy = 0.0;
      this.nodes.forEach((node) => {
        var speed = node.vel.mag();
        energy += 0.5 * node.mass * speed * speed;
      });
      if (energy <= this.minEnergyThreshold || iter >= this.maxNumIterations) {
        clearInterval(timer);
      }
      //console.log(`Iteration #${iter} | Energy: ${energy}`);
    }, tickstep);
  },
  methods: {
    tick: function(step) {
      this.applyCoulombsLaw(); // repulsive
      this.applyHookesLaw(); // attractive
      this.attractToCenter();
      this.updateVel(step);
      this.updatePos(step);
      this.edges.forEach((edge) => {
        if (edge.source && edge.target) {
          edge.source = this.nodes.find(el => el._id === edge.source._id);
          edge.target = this.nodes.find(el => el._id === edge.target._id);
        }
      });
      this.$forceUpdate();
    },

    applyCoulombsLaw: function() {
      this.nodes.forEach((node1) => {
        this.nodes.forEach((node2) => {
          if (node1.pos !== node2.pos) {
            var d = node1.pos.sub(node2.pos);
            var distance = d.mag() + 0.1;
            var direction = d.norm();
            this.apply(direction.mult(this.repulsion).div(distance * distance * 0.5).mult(1000), node1);
            this.apply(direction.mult(this.repulsion).div(distance * distance * -0.5).mult(1000), node2);
          }
        });
      });
    },
    applyHookesLaw: function() {
      this.edges.forEach(edge => {
        if (edge.status === 'friend' || edge.status === 'pending') {
          if (!edge.source || !edge.target) {
            //console.warn('this edge has no nodes: '+index);
          } else {
            var d = edge.target.pos.sub(edge.source.pos);
            var displacement = edge.len - d.mag();
            var direction = d.norm();
            this.apply(direction.mult(edge.k * displacement * -0.5), edge.source);
            this.apply(direction.mult(edge.k * displacement * +0.5), edge.target);
          }
        }
      });
    },
    attractToCenter: function() {
      let center = new Vector(this.winWidth/2, this.winHeight/2);
      this.nodes.forEach((node) => {
        this.apply(node.pos.sub(center).mult(-1).mult(this.repulsion / 50.0), node);
      });
    },

    apply: function(force, node) {
      node.acc = node.acc.add(force.div(node.mass));
    },
    updateVel: function(step) {
      this.nodes.forEach((node) => {
        node.vel = node.vel.add(node.acc.mult(step)).mult(this.damping);
        if (node.vel.mag() > this.maxSpeed) {
          node.vel = node.vel.norm().mult(this.maxSpeed);
          // console.log(node.vel);
        }
        node.acc = new Vector(0,0);
        //console.log(node.vel);
      });
    },
    updatePos: function(step) {
      this.nodes.forEach((node) => {
        node.pos = node.pos.add(node.vel.mult(step));
      });
    },

    async setNodes() {
      const query = `query {
        userMany(limit: 1000) {
          _id
          firstName
          lastName
          email
          profileImage
        }
      }`;
      return axios.post(process.env.VUE_APP_API || apiUrl, { query })
        .then(response => {
          response.data.data.userMany.forEach((node, index) => {
            this.$set(this.nodes, index, node);
            // node.pos = new Vector(
            //   this.winWidth / 2 - this.center,
            //   this.winHeight / 2 - this.center
            // );
            node.pos = new Vector(
              Math.round(Math.random() * (this.winWidth - 180)) + this.center,
              Math.round(Math.random() * (this.winHeight - 180)) + this.center
            );
            // if (node._id === this.$store.getters.loggedInUserId) {
            //   node.pos = new Vector(
            //     this.winWidth / 2 - this.center,
            //     this.winHeight / 2 - this.center
            //   );
            // } else {
            //   node.pos = new Vector(
            //     Math.round(Math.random() * (this.winWidth - 180)) + this.center,
            //     Math.round(Math.random() * (this.winHeight - 180)) + this.center
            //   );
            // }

            node.mass = Math.round(Math.random() * 9) +1; // #todo
            node.vel = new Vector(0,0);
            node.acc = new Vector(0,0);
          });
        })
        .catch(error => {
          console.log(error);
      });
    },
    async setEdges() {
      const query = `query {
        relationMany {
          memberId1
          memberId2
          status
        }
      }`;
      return axios.post(process.env.VUE_APP_API || apiUrl, { query })
        .then(response => {
          response.data.data.relationMany.forEach((edge, index) => {
            this.$set(this.edges, index, edge);
            edge.source = this.nodes.find(el => el._id === edge.memberId1);
            delete edge.memberId1;
            edge.target = this.nodes.find(el => el._id === edge.memberId2);
            delete edge.memberId2;
            edge.len = 180,//this.winWidth <= 640 || this.winHeight <= 640 ? 80 : 400;
            edge.k = this.stiffness;
          });
        })
        .catch(error => {
          console.log(error);
      });
    },
    toggleCard: function() {
      this.showCard = !this.showCard;
    }
  },
  data() {
    return {
      showCard: false,
      nodes: [],
      edges: [],
      center: 20,//this.winWidth <= 640 || this.winHeight <= 640 ? 16 : 48,
      stiffness: 400,
      repulsion: 400,
      damping: .5,
      maxSpeed: 2,
      minEnergyThreshold: 60,//this.winWidth <= 640 || this.winHeight <= 640 ? 75 : 70,
      maxNumIterations: 400,

      isLoading: false,

      // Gravity: 1.1,
      // Force: 1000
    }
  }
}
</script>
