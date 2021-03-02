<template lang="html">
  <div class="lg:flex lg:items-center lg:justify-between m-5">
    <div class="flex-1 min-w-0">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Songs
      </h2>
      <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>
          {{ data.length }} songs
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          {{ data.map(a => a.artist).filter((value, index, self) => self.indexOf(value) === index).length }} artists
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"/><path d="M15 4.582V12a3 3 0 1 1-2-2.83V2.05c5.053.501 9 4.765 9 9.95 0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.185 3.947-9.449 9-9.95v2.012A8.001 8.001 0 0 0 12 20a8 8 0 0 0 3-15.418z"/>
          </svg>
          {{ data.map(a => a.album).filter((value, index, self) => self.indexOf(value) === index).length }} albums
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"/><path d="M2 18h10v2H2v-2zm0-7h14v2H2v-2zm0-7h20v2H2V4zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83zM18 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
          {{ data.map(a => a.genre).filter((value, index, self) => self.indexOf(value) === index).length }} genres
        </div>
      </div>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4" v-show="$store.getters.loggedIn">

      <span class="sm:ml-3">
        <button v-on:click="handleToggle" type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Add Song
        </button>
      </span>

      <span class="hidden sm:block sm:ml-3">
        <button disabled type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg class="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          Import Spotify (soon)
        </button>
      </span>

      <span class="hidden sm:block sm:ml-3">
        <label class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg class="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <input type="file" id="upload" class="hidden" v-on:change="$parent.handleImport"/>
          Import iTunes
        </label>
      </span>

      <!-- Dropdown -->
      <span class="ml-3 relative sm:hidden">
        <button @click="showDropdown = !showDropdown" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu" aria-haspopup="true">
          More
          <!-- Heroicon name: solid/chevron-down -->
          <svg class="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>

        <!--
          Dropdown panel, show/hide based on dropdown state.

          Entering: "transition ease-out duration-200"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        -->
        <div v-show="showDropdown" class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" aria-labelledby="mobile-menu" role="menu">
          <!-- <button class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Import iTunes</button> -->
          <label class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
            <input type="file" id="upload" class="hidden" v-on:change="$parent.handleImport"/>
            Import iTunes
          </label>
          <button disabled class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Import Spotify (soon)</button>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import { bus } from '@/main'

export default {
  props: ['data'],
  methods: {
    handleToggle: function() {
      bus.$emit('toggleSlideOver');
    },
  },
  data() {
    return {
      showDropdown: false,
    }
  }
}
</script>
