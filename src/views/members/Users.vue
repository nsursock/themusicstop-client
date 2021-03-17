<template>
<div>

  <LoadingModal v-show="isLoading" :isLoading="isLoading" />

  <div class="lg:flex lg:items-center lg:justify-between mx-8 my-4">
    <div v-if="table.rows" class="flex-1 min-w-0">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Members
      </h2>
      <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <!-- Heroicon name: briefcase -->
          <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
          <!-- <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg> -->
          {{ table.rows.length }} members
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <!-- Heroicon name: calendar -->
          <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
          </svg>
          {{ averageAge }} yo (average)
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="45.896px" height="45.895px" viewBox="0 0 45.896 45.895" style="enable-background:new 0 0 45.896 45.895;"
          xml:space="preserve">
          <g>
            <g>
              <path d="M15.355,31.558c0.978,0,1.939-0.095,2.876-0.275c-2.034-1.667-3.705-3.801-4.838-6.291
              c-0.347-0.079-0.69-0.177-1.029-0.298c-4.632-1.648-7.06-6.759-5.411-11.393c1.264-3.547,4.641-5.931,8.403-5.931
              c1.015,0,2.021,0.175,2.99,0.52c4.633,1.65,7.061,6.76,5.411,11.393c-0.125,0.351-0.271,0.689-0.435,1.017
              c0.003,0.008,0.006,0.017,0.01,0.026c0.914,2.107,2.841,3.55,5.067,3.888c0.532-0.875,0.981-1.812,1.334-2.801
              c2.822-7.929-1.332-16.674-9.259-19.497c-1.653-0.588-3.376-0.887-5.118-0.887c-6.439,0-12.217,4.078-14.378,10.146
              c-2.508,7.045,0.493,14.736,6.756,18.342l-1.871,5.255L5.227,33.43c-0.651-1.369-2.288-1.953-3.658-1.303
              s-1.953,2.289-1.302,3.658l3.569,7.514c0.47,0.99,1.454,1.568,2.481,1.568c0.395,0,0.795-0.085,1.176-0.266l7.139-3.391
              c1.37-0.65,1.953-2.289,1.303-3.657c-0.65-1.371-2.287-1.954-3.657-1.302l-1.341,0.637l1.969-5.531
              C13.714,31.49,14.534,31.558,15.355,31.558z"/>
              <path d="M45.668,33.191c-0.603-1.392-2.217-2.028-3.608-1.428l-3.022,1.31l-1.166-2.689c2.564-1.707,4.551-4.142,5.709-7.065
              c1.5-3.79,1.435-7.938-0.187-11.678c-2.42-5.59-7.92-9.2-14.011-9.2c-1.168,0-2.06,0.089-3.187,0.352
              c2.214,1.409,3.812,3.355,4.923,6.177c2.922,0.513,5.246,2.408,6.453,5.192c0.946,2.186,0.984,4.609,0.109,6.825
              c-0.877,2.215-2.562,3.957-4.75,4.903c-1.131,0.488-2.32,0.736-3.537,0.736c-0.53,0-1.053-0.047-1.562-0.138
              c-2.916-0.517-5.423-2.459-6.627-5.239c-0.911-2.104-0.98-4.427-0.204-6.573c0.03-0.084,0.062-0.168,0.095-0.253
              c0.174-0.438,0.387-0.851,0.621-1.25c-1.053-1.789-2.682-3.142-4.662-3.847c-0.117-0.041-0.237-0.06-0.354-0.095
              c-0.592,0.889-1.101,1.842-1.502,2.858c-0.021,0.053-0.04,0.105-0.061,0.157c-1.436,3.749-1.35,7.833,0.247,11.522
              c1.815,4.191,5.362,7.27,9.59,8.547c1.41,0.426,2.896,0.652,4.42,0.652c1.165,0,2.312-0.146,3.436-0.408l1.168,2.693l-3.023,1.311
              c-1.391,0.602-2.03,2.218-1.428,3.609c0.447,1.037,1.459,1.654,2.521,1.654c0.364,0,0.733-0.072,1.089-0.227l3.021-1.309
              l1.117,2.575c0.447,1.036,1.457,1.655,2.52,1.655c0.363,0,0.734-0.073,1.089-0.227c1.392-0.603,2.031-2.219,1.429-3.609
              l-1.117-2.576l3.024-1.309C45.633,36.198,46.272,34.583,45.668,33.191z"/>
            </g>
          </g>
        </svg>
          {{ numBoys }} boys, {{ numGirls }} girls
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <!-- Heroicon name: location-marker -->
          <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          {{ numLocations }} locations worldwide
        </div>
      </div>
    </div>

    <div class="mt-5 flex lg:mt-0 lg:ml-4">
    <!-- <span class="hidden sm:block"> -->
    <span class="">
      <button @click="viewProfile($store.getters.loggedInUserId)" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <!-- Heroicon name: pencil -->
        <svg class="mr-1 w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
        </svg>
        View Profile
      </button>
      <button @click="isViewTable = !isViewTable" type="button" class="ml-2 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <svg v-show="!isViewTable" class="mr-1 w-5 h-5 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 8h16V5H4v3zm10 11v-9h-4v9h4zm2 0h4v-9h-4v9zm-8 0v-9H4v9h4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>
        <svg v-show="isViewTable" class="mr-1 w-5 h-5 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM11 13H4v6h7v-6zm9 0h-7v6h7v-6zm-9-8H4v6h7V5zm9 0h-7v6h7V5z"/></svg>
        <span v-show="isViewTable">Compact</span>
        <span v-show="!isViewTable">Expanded</span>
      </button>
    </span>
  </div>

  </div>

  <ListTable v-show="isViewTable" v-if="table.rows" :table="table" />
  <ListCard v-show="!isViewTable" v-if="table.rows" :table="table" />

<div v-show="showProfileSlide" class="z-50 fixed inset-0 overflow-hidden">
  <div class="absolute inset-0 overflow-hidden">
    <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div v-show="showProfileSlide" @click="showProfileSlide = false"
    class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">
      <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
      <div v-show="showProfileSlide" class="relative max-w-md"> <!-- w-screen -->
        <!--
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
          <button @click="showProfileSlide = false" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
            <span class="sr-only">Close panel</span>
            <!-- Heroicon name: x -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
          <div class="px-4 sm:px-6 flex items-center justify-between">
            <h2 id="slide-over-heading" class="text-lg font-medium text-gray-900 mr-8">
              Profile
            </h2>
            <div class="flex mr-20 sm:mr-0 ">
              <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z"/>
              </svg>
              <span class="mr-2">{{ member.numLike }}</span>
              <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0H24V24H0z"/><path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"/>
              </svg>
              <span class="mr-2">{{ member.numLove }}</span>
              <svg class="h-6 w-6 fill-current mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 7c2 0 3.667.333 5 1a5 5 0 0 1-10 0c1.333-.667 3-1 5-1zM8.5 7a2.5 2.5 0 0 1 2.45 2h-4.9A2.5 2.5 0 0 1 8.5 7zm7 0a2.5 2.5 0 0 1 2.45 2h-4.9a2.5 2.5 0 0 1 2.45-2z"/>
              </svg>
              <span class="mr-2">{{ member.numHaha }}</span>
              <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10 0 .727-.077 1.435-.225 2.118l-1.782-1.783a8 8 0 1 0-4.375 6.801 3.997 3.997 0 0 0 1.555 1.423A9.956 9.956 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm7 12.172l1.414 1.414a2 2 0 1 1-2.93.11l.102-.11L19 14.172zM12 15c1.466 0 2.785.631 3.7 1.637l-.945.86C13.965 17.182 13.018 17 12 17c-1.018 0-1.965.183-2.755.496l-.945-.86A4.987 4.987 0 0 1 12 15zm-3.5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
              </svg>
              <span class="mr-2">{{ member.numSad }}</span>
            </div>
          </div>
          <div v-if="table.rows" class="mt-6 relative flex-1 divide-y divide-gray-500">

            <div class="">
              <img v-if="!member.coverImage || member.coverImage === 'null'" class="h-32 object-cover w-screen" src="https://source.unsplash.com/1920x1280" alt="Random picture from Unsplash">
              <img v-else class="h-32 object-cover w-screen" :src="member.coverImage" :alt="`Cover photo of ${member.fullname}`">
              <div class="ml-5 z-10 relative">
                <svg v-if="!member.profileImage" class=" w-24 h-24 sm:w-40 sm:h-40 sm:ml-5 -mt-10 sm:-mt-24 rounded-lg shadow-md border-white border-4 text-gray-300 bg-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <img v-else class=" w-24 h-24 sm:w-40 sm:h-40 sm:ml-5 -mt-10 sm:-mt-24 rounded-lg shadow-md border-white border-4" :src="member.profileImage" :alt="`Profile photo of ${member.fullname}`">
                <h1 class="mt-3  text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">{{ member.fullname}}</h1>
                <span class="text-gray-600">@{{ member.username }}</span>
              </div>
              <div class="mt-5 flex  lg:ml-4 w-screen mx-5">
                <span class="sm:ml-3 sm:w-40 w-24">
                  <button v-on:click="sendMessage" class="w-full inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="mx-auto">Message</span>
                  </button>
                </span>
                <span class="sm:block ml-3 sm:w-40 w-24">
                  <a :href="getFacetime" class="w-full inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="mx-auto">Call</span>
                  </a>
                </span>
                <span class="sm:block ml-3">
                  <button @click="showReactionMenu = !showReactionMenu" type="button" class="inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <!-- Heroicon name: dots-vertical -->
                    <svg class=" h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                  <!--
                      Dropdown panel, show/hide based on dropdown state.

                      Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                      Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    -->
                    <div v-show="showReactionMenu" class="origin-top-right absolute right-0 mt-2 w-32 sm:mr-3 mr-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <button @click="incrementLike" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                          <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/><path d="M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z"/>
                          </svg>
                          Like
                        </button>
                        <button @click="incrementLove" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                          <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0H24V24H0z"/><path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"/>
                          </svg>
                          Love
                        </button>
                        <button @click="incrementHaha" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                          <svg class="h-6 w-6 fill-current mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 7c2 0 3.667.333 5 1a5 5 0 0 1-10 0c1.333-.667 3-1 5-1zM8.5 7a2.5 2.5 0 0 1 2.45 2h-4.9A2.5 2.5 0 0 1 8.5 7zm7 0a2.5 2.5 0 0 1 2.45 2h-4.9a2.5 2.5 0 0 1 2.45-2z"/>
                          </svg>
                          Haha
                        </button>
                        <button @click="incrementSad" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                          <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10 0 .727-.077 1.435-.225 2.118l-1.782-1.783a8 8 0 1 0-4.375 6.801 3.997 3.997 0 0 0 1.555 1.423A9.956 9.956 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm7 12.172l1.414 1.414a2 2 0 1 1-2.93.11l.102-.11L19 14.172zM12 15c1.466 0 2.785.631 3.7 1.637l-.945.86C13.965 17.182 13.018 17 12 17c-1.018 0-1.965.183-2.755.496l-.945-.86A4.987 4.987 0 0 1 12 15zm-3.5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
                          </svg>
                          Sad
                        </button>
                      </div>
                    </div>
                </span>
              </div>
            </div>

            <div class=" mt-6 mx-4">
              <div class="text-sm text-gray-500 flex flex-col mt-5 break-words w-4/5 sm:w-full text-justify">
                <span>Bio</span>
                <span v-if="member.about && member.about !== 'null'" class="text-gray-700 mr-3 sm:mr-0">{{ member.about }}</span>
                <span v-else class="text-gray-700 mr-3 sm:mr-0">No short description provided yet.</span>
              </div>
              <div class="text-sm text-gray-500 flex flex-col mt-5">
                <span>Location</span>
                <span class="text-gray-700">{{ member.location }}</span>
              </div>
              <div class="text-sm text-gray-500 flex flex-col mt-5">
                <span>Website</span>
                <span v-if="member.website && member.website !== 'null'" class="text-gray-700 mr-3 sm:mr-0">{{ member.website }}</span>
                <span v-else class="text-gray-700 mr-3 sm:mr-0">No website provided yet.</span>
              </div>
              <div class="text-sm text-gray-500 flex flex-col mt-5">
                <span>Birthday</span>
                <span class="text-gray-700">{{ member.birthday }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</div>


</div>
</template>

<script>
import LoadingModal from '@/components/LoadingModal'
import ListTable from '@/components/ListTable.vue';
import ListCard from '@/components/ListCard'
import { apiUrl } from '@/env.json'
import axios from 'axios'

export default {
  name: 'Users',
  components: {
    ListTable,
    ListCard,
    LoadingModal
  },
  data() {
    return {
      isLoading: false,
      table: { },
      isViewTable: false,
      showProfileSlide: false,
      showReactionMenu: false,
      member: {
        id: '',
        profileImage: '',
        coverImage: '',
        fullname: '',
        username: '',
        email: '',
        about: '',
        location: '',
        website: '',
        birthday: null,
        numLike: 0,
        numLove: 0,
        numHaha: 0,
        numSad: 0
      }
    }
  },
  computed: {
    getMailto() {
      return 'mailto:' + this.member.email;
    },
    getFacetime() {
      return 'facetime-audio://' + this.member.email; // #todo add phone number
    },
    numLocations() {
      return this.table.rows.map(x => x.city + ', ' + x.country).
        filter((value, index, self) => self.indexOf(value) === index).length;
    },
    averageAge() {
      return +(this.table.rows.reduce((total, next) =>
        total + this.getAge(next.birthday), 0) / this.table.rows.length).toFixed();
    },
    numBoys() {
      return this.table.rows.filter(x => x.gender === 'M').length;
    },
    numGirls() {
      return this.table.rows.filter(x => x.gender === 'F').length;
    }
  },
  async mounted() {
    this.isLoading = true;
    await this.getTableFromApi();
    this.isLoading = false;
  },
  methods: {
    sendMessage: function() {
      this.$router.push({ path: 'messages', query: { user: this.member.username }});
      // this.$router.push({ path: 'messages', query: { email: this.member.email }});
    },
    viewProfile: function(id) {
      this.showProfileSlide = !this.showProfileSlide;

      let index = this.table.rows.findIndex(i => i._id === id);
      let current = this.table.rows[index];
      this.member.id = id;
      this.member.profileImage = current.profileImage;
      this.member.coverImage = current.coverImage;
      this.member.fullname = current.firstName + ' ' + current.lastName;
      this.member.username = current.userName;
      this.member.email = current.email;
      this.member.about = current.about;
      this.member.location = current.city + ', ' + current.country;
      this.member.website = current.website;
      this.member.numLike = current.numLike;
      this.member.numLove = current.numLove;
      this.member.numHaha = current.numHaha;
      this.member.numSad = current.numSad;

      let d = new Date(current.birthday);
      const year = d.getFullYear();
      const day = d.getDate();
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
      const month = months[d.getMonth()]
      this.member.birthday = `${month.substring(0,3)} ${day}, ${year}`;
    },
    getAge(birthday) {
      if (birthday !== null) {
        var dob = new Date(birthday);
        var ageDifMs = Date.now() - dob.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      } else {
        return 'N/A';
      }
    },
    async getTableFromApi() {
      // #todo watch out for limit, paginate?
      const query = `
        query {
          userMany(limit: 2000) {
            _id
            website
            about
            firstName
            lastName
            birthday
            gender
            email
            userName
            password
            country
            city
            profileImage
            coverImage
            numLike
            numLove
            numHaha
            numSad
          }
        }`;
        try {
          let response = await axios.post(process.env.VUE_APP_API || apiUrl, { query });
          //this.tableLoaded = true;
          this.table = {
            rows: response.data.data.userMany,
            cols: [
              'Name', 'Age', 'Gender', 'Location', 'Website', 'About'
            ]
          };
        } catch (error) {
          console.log(error);
        }
      },
      async incrementLike() {
        let query = `query { userById(_id: "${this.member.id}") { numLike } }`;
        axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(async response => {
          let n = response.data.data.userById.numLike;

          query = `mutation {
            userUpdateById(
              _id: "${this.member.id}"
              record: { numLike: ${n+1} }
            ) {
              recordId
            }
          }`;
          try {
            await axios.post(process.env.VUE_APP_API || apiUrl, { query });
          } catch(error) {
            console.log(error);
          }
        })
        .catch(error => {
          console.log(error);
        });
      },
      async incrementLove() {
        let query = `query { userById(_id: "${this.member.id}") { numLove } }`;
        axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(async response => {
          let n = response.data.data.userById.numLove;

          query = `mutation {
            userUpdateById(
              _id: "${this.member.id}"
              record: { numLove: ${n+1} }
            ) {
              recordId
            }
          }`;
          try {
            await axios.post(process.env.VUE_APP_API || apiUrl, { query });
          } catch(error) {
            console.log(error);
          }
        })
        .catch(error => {
          console.log(error);
        });
      },
      async incrementHaha() {
        let query = `query { userById(_id: "${this.member.id}") { numHaha } }`;
        axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(async response => {
          let n = response.data.data.userById.numHaha;

          query = `mutation {
            userUpdateById(
              _id: "${this.member.id}"
              record: { numHaha: ${n+1} }
            ) {
              recordId
            }
          }`;
          try {
            await axios.post(process.env.VUE_APP_API || apiUrl, { query });
          } catch(error) {
            console.log(error);
          }
        })
        .catch(error => {
          console.log(error);
        });
      },
      async incrementSad() {
        let query = `query { userById(_id: "${this.member.id}") { numSad } }`;
        axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(async response => {
          let n = response.data.data.userById.numSad;

          query = `mutation {
            userUpdateById(
              _id: "${this.member.id}"
              record: { numSad: ${n+1} }
            ) {
              recordId
            }
          }`;
          try {
            await axios.post(process.env.VUE_APP_API || apiUrl, { query });
          } catch(error) {
            console.log(error);
          }
        })
        .catch(error => {
          console.log(error);
        });
      },
    }
}
</script>
