<template lang="html">
  <div class=" mx-auto flex flex-col lg:flex-row w-screen">

    <div class="lg:w-2/12 w-full border-r border-gray-300 hidden lg:block">
      <div class="flex items-center justify-start space-x-2 mt-2 px-5 ml-4">
        <button type="button" class="w-48 lg:mr-4 lg:mt-3  inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="mx-auto">Publish</span>
        </button>
      </div>
    </div>

    <div v-show="window.width >= 1024 || showNews" class="lg:w-6/12 w-full xl:w-7/12 border-r border-gray-300 divide-y divide-gray-300">
      <div class="flex items-center justify-between m-3">
        News feed
        <div class="float-right flex items-center">
        <button @click="sortedAsc = !sortedAsc" type="button" class="mr-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg v-show="sortedAsc" class="mr-1 w-5 h-5 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
          <svg v-show="!sortedAsc" class="mr-1 w-5 h-5 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
          </svg>
          <span v-show="sortedAsc">Newer</span>
          <span v-show="!sortedAsc">Older</span>
        </button>
        <span class=" relative lg:hidden">
          <button @click="showDropdown = !showDropdown" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu" aria-haspopup="true">
            More
            <svg class="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-show="showDropdown" class="w-full origin-top-right absolute right-0 mt-2  rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" aria-labelledby="mobile-menu" role="menu">
            <button class="text-left w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Publish</button>
            <button @click="showNews = true, showActivity = false" class="text-left w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">News</button>
            <button @click="showNews = false, showActivity = true" class="text-left w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Activity</button>
          </div>
        </span>
      </div>
      </div>
      <div v-for="post in sortedPosts" :key="post.key" class="text-sm flex ">
        <div class="flex flex-col m-4">
          <div class="text-gray-500 m-3 ">
            {{ post.publishedAt | formatDate('MMM D') }} at {{ post.publishedAt | formatDate('h:mm A') }}
          </div>
          <div class="">
            <div class="flex flex-col m-3 w-10/12">
              <span>{{ post.message }}</span>
              <span class="text-gray-500">{{ post.authorId }}</span>
            </div>
          </div>
          <img v-if="post.imageUrl" class="object-cover" :src="post.imageUrl" alt="">
        </div>
      </div>
    </div>

    <div v-show="window.width >= 1024 || showActivity" class="lg:w-4/12 w-full xl:w-3/12 text-sm bg-gray-50">
      <div class="font-semibold m-5 flex items-center justify-between">
        <span>Activity feed</span>
        <span class=" relative lg:hidden">
          <button @click="showDropdown = !showDropdown" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu" aria-haspopup="true">
            More
            <svg class="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-show="showDropdown" class="w-full origin-top-right absolute right-0 mt-2  rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" aria-labelledby="mobile-menu" role="menu">
            <button @click="showNews = true, showActivity = false" class="text-left w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">News</button>
            <button @click="showNews = false, showActivity = true" class="text-left w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Activity</button>
          </div>
        </span>
      </div>
      <div class="divide-y divide-gray-300">
        <div v-for="activity in activities" :key="activity.key" class="mx-4 flex  items-center justify-between">
          <div class="my-3  w-4/5">
            {{ activity.userId }} {{ activity.action }}:
            <span class="text-gray-500">{{ activity.content }}</span>
          </div>
          <div class="text-gray-500 m-3 w-20">
            {{ activity.commentedAt | formatDate('MMM D') }} at {{ activity.commentedAt | formatDate('h:mm A') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    formatDate(date, format) {
      return moment.utc(date).format(format);
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    }
  },
  computed: {
    sortedPosts: function() {
      return this.posts.slice().sort((a, b) => {
        let tmp = a.publishedAt.getTime() - b.publishedAt.getTime();
        return this.sortedAsc ? tmp : -tmp;
      });
    },
  },
  data() {
    return {
      window: {
        width: window.innerWidth,
      },
      sortedAsc: true,
      showNews: true,
      showActivity: false,
      showDropdown: true,
      posts: [
        {
          id: 1,
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          authorId: '600e6c8c8ce78ae10c827b6d',
          publishedAt: new Date('2021-01-02T16:00:00.000Z'),
          //imageUrl: 'http://source.unsplash.com/640x480',
        },
        {
          id: 2,
          message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
          authorId: '600e6c8d8ce78ae10c827b6e',
          publishedAt: new Date('2021-01-02T11:00:05.000Z'),
          // imageUrl: null,
        },
        {
          id: 3,
          message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..",
          authorId: '600fb05d8ce78ae10c827b71',
          publishedAt: new Date('2021-01-01T19:32:00.033Z'),
          // imageUrl: null,
        }
      ],
      activities: [
        {
          id: 1,
          userId: '600e6c8c8ce78ae10c827b6d',
          action: 'commented',
          object: 'post',
          objectId: '1',
          content: "it's never too late",
          commentedAt: new Date('2021-01-03T19:32:00.033Z'),
        },
        {
          id: 2,
          userId: '600e6c8d8ce78ae10c827b6e',
          action: 'commented',
          object: 'post',
          objectId: '1',
          content: 'so true, but i wonder if this too shall pass',
          commentedAt: new Date('2021-01-03T13:32:00.033Z'),
        }
      ],
    }
  }
}
</script>
