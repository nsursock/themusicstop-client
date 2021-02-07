<template lang="html">
  <div class="flex flex-wrap justify-center md:mb-4 antialiased">
    <div v-for="(elem, index) in table.rows" :key="index" class="mx-5 my-4 border border-gray-400 rounded-xl">
      <div v-lazyi class="relative h-64 w-64 rounded-t-xl shadow-xl overflow-hidden hidden md:block">
        <img v-if="elem.coverImage && elem.coverImage !== 'null'" :data-src="elem.coverImage" class="h-full w-full object-cover" />
        <img v-else data-src="http://source.unsplash.com/640x480/?landscape" class="h-full w-full object-cover" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div v-lazyi class="w-1/2 h-1/2 border-4 border-white rounded-full overflow-hidden">
            <img v-if="elem.profileImage" :data-src="elem.profileImage" class="h-full w-full object-cover" />
            <svg v-else class="text-gray-300 bg-gray-600 rounded-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto bg-white sm:rounded-tl-xl rounded-t-xl shadow-xl overflow-hidden sm:max-w-2xl">
        <div class="flex flex-col sm:flex-row md:hidden block">
          <div v-lazyi class="sm:flex-shrink-0">
            <img v-if="elem.coverImage" class="h-48 sm:h-full w-full object-cover sm:w-48" :data-src="elem.coverImage" alt="">
            <img v-else class="h-48 sm:h-full w-full object-cover sm:w-48" data-src="http://source.unsplash.com/640x480/?landscape" alt="">
          </div>
          <div class="relative flex items-center justify-center">
            <div v-lazyi class="absolute w-36 h-36 border-4 border-white rounded-full overflow-hidden">
              <img v-if="elem.profileImage" :data-src="elem.profileImage" class="h-full w-full object-cover" />
              <svg v-else class="text-gray-300 bg-gray-600 rounded-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <div class="p-8 mt-16 sm:ml-16 sm:mt-0">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {{ elem.birthday | getAge }} • {{ elem.gender }} • {{ elem.city}}, {{ elem.country }}
            </div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {{ elem.firstName }} {{ elem.lastName }}
            </a>
            <p class="mt-2 text-gray-500">
              <span v-if="elem.about">{{ elem.about.substring(0, 180) }}...</span>
              <span v-else>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </p>
          </div>
        </div>
      </div>
      <div v-lazyb="{ loggedInId: $store.getters.loggedInUserId, selectedId: elem._id, idx: index }" class="flex text-gray-600 border-t border-gray-500 divide-x divide-gray-400">
        <button @click="$parent.viewProfile(elem._id)" type="button" class="w-1/2 inline-flex items-center justify-center px-4 py-2  rounded-bl-xl font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg class="mr-1 w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
          </svg>
          Profile
        </button>

          <button v-if="isPending[index] && initLoggedIn[index]" @click="cancelRequest(elem._id, index)" type="button"
          class="w-1/2 inline-flex items-center justify-center px-4 py-2  rounded-br-xl font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 lazy ">
            <svg class="mr-1 w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/></svg>
            Cancel
          </button>
          <button v-else-if="isPending[index] && !initLoggedIn[index]" @click="confirmRequest(elem._id, index)"
          type="button" class="w-1/2 inline-flex items-center justify-center px-4 py-2  rounded-br-xl font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 lazy ">
            <svg class="mr-1 w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/></svg>
            Confirm
          </button>
          <button v-else-if="isConfirmed[index]" disabled
          class="w-1/2 inline-flex items-center justify-center px-4 py-2  rounded-br-xl font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 lazy ">
            <svg class="mr-1 w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/></svg>
            Friend
          </button>
          <button v-else-if="$store.getters.loggedInUserId === elem._id" @click="closeAccount"
          class="w-1/2 inline-flex items-center justify-center px-4 py-2  rounded-br-xl font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 lazy ">
            <svg class="mr-1 w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/></svg>
            Close
          </button>
          <button v-else @click="connectPeople(elem._id, index)" type="button"
          class="w-1/2 inline-flex items-center justify-center px-4 py-2  rounded-br-xl font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 lazy ">
            <svg class="mr-1 w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/></svg>
            Connect
          </button>
      </div>
    </div>
  </div>
</template>

<script>
import LazyLoadImages from "@/directives/LazyImages"
import LazyLoadButtons from "@/directives/LazyButtons"
import { apiUrl } from '@/env.json'
import axios from 'axios'
import { bus } from '../main'

export default {
  directives: {
    lazyi: LazyLoadImages,
    lazyb: LazyLoadButtons
  },
  props: ['table'],
  name: 'ListCard',
  async mounted() {
    // let query = '';
    // this.table.rows.forEach(async (item, index) => {
    //   // console.log('treating element #' + index);
    //   query = `query {
    //     relationOne(filter: {
    //       memberId2: "${this.$store.getters.loggedInUserId}" AND: {
    //         memberId1: "${item._id}"
    //       }
    //     }) {
    //       _id
    //       memberId1
    //       memberId2
    //     	status
    //   	}
    //   }`;
    //   let r1 = await axios.post(process.env.VUE_APP_API || apiUrl, { query });
    //   r1 = r1.data.data.relationOne;
    //
    //   query = `query {
    //     relationOne(filter: {
    //       memberId1: "${this.$store.getters.loggedInUserId}" AND: {
    //         memberId2: "${item._id}"
    //       }
    //     }) {
    //       _id
    //       memberId1
    //       memberId2
    //       status
    //     }
    //   }`;
    //   let r2 = await axios.post(process.env.VUE_APP_API || apiUrl, { query });
    //   r2 = r2.data.data.relationOne;
    //
    //   if (r1 !== null) {
    //     this.$set(this.initLoggedIn, index, false);
    //     this.$set(this.isPending, index, r1.status === 'pending');
    //     this.$set(this.isConfirmed, index, r1.status === 'friend');
    //   } else if (r2 !== null) {
    //     this.$set(this.initLoggedIn, index, true);
    //     this.$set(this.isPending, index, r2.status === 'pending');
    //     this.$set(this.isConfirmed, index, r2.status === 'friend');
    //   } else {
    //     this.$set(this.initLoggedIn, index, false);
    //     this.$set(this.isPending, index, false);
    //     this.$set(this.isConfirmed, index, false);
    //   }
    // });
  },
  data() {
    return {
      isConfirmed: [],
      isPending: [],
      initLoggedIn: []
    }
  },
  methods: {
    closeAccount() {
      bus.$emit('closeAccount');
    },
    async confirmRequest(id, index) {
      const query = `mutation {
        relationUpdateOne(
          record: { status: "friend" }
          filter: { memberId1: "${id}", AND: { memberId2: "${this.$store.getters.loggedInUserId}" } }
        ) {
          recordId
        }
      }`;
      try {
        await axios.post(process.env.VUE_APP_API || apiUrl, { query });
        this.$set(this.isPending, index, false);
        this.$set(this.isConfirmed, index, true);
      } catch(error) {
        console.log(error);
      }
    },
    async cancelRequest(id, index) {
      const query = `mutation {
        relationRemoveOne(filter: {
          memberId1: "${this.$store.getters.loggedInUserId}" AND: {
            memberId2: "${id}"
          }
        }) {
          recordId
        }
      }`;
      try {
        await axios.post(process.env.VUE_APP_API || apiUrl, { query });
        this.$set(this.isPending, index, false);
        this.$set(this.isConfirmed, index, false);
        this.$set(this.initLoggedIn, index, false);
      } catch(error) {
        console.log(error);
      }
    },
    async connectPeople(id, index) {
      const query = `mutation {
        relationCreateOne(record: {
          memberId2: "${id}",
          memberId1: "${this.$store.getters.loggedInUserId}"
          status: "pending",
        }) {
          recordId
        }
      }`;
      try {
        await axios.post(process.env.VUE_APP_API || apiUrl, { query });
        this.$set(this.isPending, index, true);
        this.$set(this.isConfirmed, index, false);
        this.$set(this.initLoggedIn, index, true);
      } catch(error) {
        console.log(error);
      }
    }
  },
  filters: {
    getAge(birthday) {
      var dob = new Date(birthday);
      var diff = Date.now() - dob.getTime();
      var age = new Date(diff); // miliseconds from epoch
      return Math.abs(age.getUTCFullYear() - 1970);
    }
  },
}
</script>
