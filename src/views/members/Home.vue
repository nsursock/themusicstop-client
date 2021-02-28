<template lang="html">
  <div class=" mx-auto flex flex-col lg:flex-row w-screen h-screen">

    <div class="lg:w-2/12 w-full border-r border-gray-300 hidden lg:block">
      <div class="flex items-center justify-start space-x-2 mt-2 px-5 ml-4">
        <button @click="showPublish = true" type="button" class="w-48 lg:mr-4 lg:mt-3  inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="mx-auto">Publish</span>
        </button>
      </div>
    </div>

<div v-show="showPublish" class="fixed z-10 inset-0 overflow-y-auto">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div v-show="showPublish" @click="showPublish = false" class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
    <div v-show="showPublish" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 sm:mx-0 sm:h-10 sm:w-10">
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Publish post
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                What's on your mind? This message will be available publicly so be careful what you publish.
              </p>
            </div>
            <textarea v-model="post" id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder=""></textarea>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button @click="handlePublish" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm">
          Post
        </button>
        <button @click="showPublish = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>

    <div v-show="window.width >= 1024 || showNews" class="lg:w-6/12 w-full xl:w-7/12 border-r border-gray-300 divide-y divide-gray-300 overflow-hidden overflow-y-auto">
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
          <span v-show="sortedAsc">Newest</span>
          <span v-show="!sortedAsc">Oldest</span>
        </button>
        <span class=" relative lg:hidden">
          <button @click="showDropdown = !showDropdown" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu" aria-haspopup="true">
            More
            <svg class="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-show="showDropdown" class="w-full origin-top-right absolute right-0 mt-2  rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" aria-labelledby="mobile-menu" role="menu">
            <button @click="showPublish = true, showDropdown = false" class="text-left w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Publish</button>
            <button @click="showNews = true, showActivity = false, showDropdown = false" class="text-left w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">News</button>
            <button @click="showNews = false, showActivity = true, showDropdown = false" class="text-left w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Activity</button>
          </div>
        </span>
      </div>
      </div>

      <div v-for="(post, index) in sortedPosts" :key="index" class="text-sm flex flex-col">
        <div class=" my-4 mx-7"> <!-- removed w-full -->
          <div class="flex items-center justify-between">

<div class="relative inline-block text-left">
  <div>
    <button @click="toggleReactMenu(index)" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
      React
      <!-- Heroicon name: chevron-down -->
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
  <div v-show="showReactMenu[index]" class="z-10 origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <button @click="showPublish = true, messageId = index, toggleReactMenu(index);" href="#" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
        <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 22.5L11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2L14 22.5zm1.839-5.5H21V8.103H7V17H12.161L14 19.298 15.839 17zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z"/></svg>
        Comment
      </button>
      <button href="#" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
        <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5V14zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.982 7.982 0 0 0-6.057 2.773A10.988 10.988 0 0 1 11 12z"/></svg>
        Share
      </button>
      <button @click="incrementLike(post._id, 'message')" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
        <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"/><path d="M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z"/>
        </svg>
        Like
      </button>
      <button @click="incrementLove(post._id, 'message')" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
        <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0H24V24H0z"/><path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"/>
        </svg>
        Love
      </button>
      <button @click="incrementHaha(post._id, 'message')" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
        <svg class="h-6 w-6 fill-current mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 7c2 0 3.667.333 5 1a5 5 0 0 1-10 0c1.333-.667 3-1 5-1zM8.5 7a2.5 2.5 0 0 1 2.45 2h-4.9A2.5 2.5 0 0 1 8.5 7zm7 0a2.5 2.5 0 0 1 2.45 2h-4.9a2.5 2.5 0 0 1 2.45-2z"/>
        </svg>
        Haha
      </button>
      <button @click="incrementSad(post._id, 'message')" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
        <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10 0 .727-.077 1.435-.225 2.118l-1.782-1.783a8 8 0 1 0-4.375 6.801 3.997 3.997 0 0 0 1.555 1.423A9.956 9.956 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm7 12.172l1.414 1.414a2 2 0 1 1-2.93.11l.102-.11L19 14.172zM12 15c1.466 0 2.785.631 3.7 1.637l-.945.86C13.965 17.182 13.018 17 12 17c-1.018 0-1.965.183-2.755.496l-.945-.86A4.987 4.987 0 0 1 12 15zm-3.5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
        </svg>
        Sad
      </button>
    </div>
  </div>
</div>

            <div class="flex items-center justify-end">
              <div class="flex flex-col">
                <span class="text-sm text-gray-600">{{ post.publishedAt | formatDate('MMM D, YY') }} at {{ post.publishedAt | formatDate('h:mm A') }}</span>
                <span class="text-gray-500 text-right">{{ author(post.authorId).firstName }} {{ author(post.authorId).lastName }}</span>
              </div>
              <svg v-if="!author(post.authorId).profileImage" class="ml-5 h-9 w-9 rounded-full object-cover text-gray-300 bg-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <img v-else class="ml-5 h-9 w-9 rounded-full object-cover" :src="author(post.authorId).profileImage" alt="">
            </div>
          </div>
          <div class="">
            <div class="flex flex-col m-3 w-10/12">
              <span>{{ post.text }}</span>

              <div class="flex mt-5 text-gray-700 items-center">
                <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/><path d="M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z"/>
                </svg>
                <span class="mr-2">{{ post.numLike }}</span>
                <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0H24V24H0z"/><path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"/>
                </svg>
                <span class="mr-2">{{ post.numLove }}</span>
                <svg class="h-6 w-6 fill-current mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 7c2 0 3.667.333 5 1a5 5 0 0 1-10 0c1.333-.667 3-1 5-1zM8.5 7a2.5 2.5 0 0 1 2.45 2h-4.9A2.5 2.5 0 0 1 8.5 7zm7 0a2.5 2.5 0 0 1 2.45 2h-4.9a2.5 2.5 0 0 1 2.45-2z"/>
                </svg>
                <span class="mr-2">{{ post.numHaha }}</span>
                <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10 0 .727-.077 1.435-.225 2.118l-1.782-1.783a8 8 0 1 0-4.375 6.801 3.997 3.997 0 0 0 1.555 1.423A9.956 9.956 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm7 12.172l1.414 1.414a2 2 0 1 1-2.93.11l.102-.11L19 14.172zM12 15c1.466 0 2.785.631 3.7 1.637l-.945.86C13.965 17.182 13.018 17 12 17c-1.018 0-1.965.183-2.755.496l-.945-.86A4.987 4.987 0 0 1 12 15zm-3.5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
                </svg>
                <span class="mr-2">{{ post.numSad }}</span>
                <button @click="toggleCommentDiv(index)" class="flex items-center" v-if="post.comments">
                  <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 22.5L11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2L14 22.5zm1.839-5.5H21V8.103H7V17H12.161L14 19.298 15.839 17zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z"/></svg>
                  <span class="mr-2">{{ post.comments.length }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="divide-y divide-gray-300">
          <div v-for="(comment, jndex) in post.comments" :key="jndex" v-show="showCommentDiv[index]" class="text-sm flex">
            <div class="w-full m-4">
              <div class="flex flex-col items-stretch">
                <div class="">
                  <div class=" m-3 ">
                    <aside class="flex float-right ml-2 mb-1">
                      <div class="flex flex-col">
                        <span class="text-sm text-gray-600">{{ comment.publishedAt | formatDate('MMM D, YY') }} at {{ comment.publishedAt | formatDate('h:mm A') }}</span>
                        <span class="text-gray-500 text-right">{{ author(comment.authorId).firstName }} {{ author(comment.authorId).lastName }}</span>
                      </div>
                      <svg v-if="!author(comment.authorId).profileImage" class="ml-5 h-9 w-9 rounded-full object-cover text-gray-300 bg-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <img v-else class="ml-5 h-9 w-9 rounded-full object-cover" :src="author(comment.authorId).profileImage" alt="">
                    </aside>
                    <p>{{ comment.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="window.width >= 1024 || showActivity" class="lg:w-4/12 w-full xl:w-3/12 text-sm bg-gray-50 overflow-y-auto overflow-hidden">
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
            <button @click="showNews = true, showActivity = false, showDropdown = false" class="text-left w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">News</button>
            <button @click="showNews = false, showActivity = true, showDropdown = false" class="text-left w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Activity</button>
          </div>
        </span>
      </div>
      <div class="divide-y divide-gray-300">
        <div v-for="(activity, index) in activities" :key="index" class="mx-4 flex flex-col justify-between">
          <div class="flex items-start justify-between">
            <div class="">
              <svg v-if="!author(activity.authorId).profileImage" class="mr-3 m-2 h-9 w-9 rounded-full object-cover text-gray-300 bg-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <img v-else class="m-2 h-9 w-9 rounded-full object-cover mr-7" :src="author(activity.authorId).profileImage" alt="">
            </div>
            <div class="my-3 w-8/12 flex flex-col">
              {{ author(activity.authorId).firstName }} {{ author(activity.authorId).lastName }}
              <span v-if="activity.text" class="text-gray-500">{{ activity.text }}</span>
              <div v-else-if="activity.songId" class="text-gray-500">
                rated <span class="text-purple-500 font-semibold">{{ activity.rating }} </span>
                <div class="flex items-center inline-flex">
                  <svg v-for="(star, index) in 5" :key="index" :class="star <= ratingStar(activity.rating) ? 'text-purple-500' : 'text-gray-300'" class="h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                the song {{ song(activity.songId).title }} by {{ song(activity.songId).artist }} on {{ song(activity.songId).album }}
                <p class="inline" v-if="activity.review && activity.review !== 'null'"> and added: "{{ activity.review }}"</p>
              </div>
            </div>
            <div class="text-gray-500 m-3 w-24 text-xs">
              {{ activity.createdAt | formatDate('MMM D, YY') }} at {{ activity.createdAt | formatDate('h:mm A') }}
            </div>
          </div>

          <div class="flex ml-1 mb-2 text-gray-700 items-center justify-between">
            <div class="flex items-center">
              <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z"/>
              </svg>
              <span class="mr-2">{{ activity.numLike }}</span>
              <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0H24V24H0z"/><path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"/>
              </svg>
              <span class="mr-2">{{ activity.numLove }}</span>
              <svg class="h-6 w-6 fill-current mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 7c2 0 3.667.333 5 1a5 5 0 0 1-10 0c1.333-.667 3-1 5-1zM8.5 7a2.5 2.5 0 0 1 2.45 2h-4.9A2.5 2.5 0 0 1 8.5 7zm7 0a2.5 2.5 0 0 1 2.45 2h-4.9a2.5 2.5 0 0 1 2.45-2z"/>
              </svg>
              <span class="mr-2">{{ activity.numHaha }}</span>
              <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10 0 .727-.077 1.435-.225 2.118l-1.782-1.783a8 8 0 1 0-4.375 6.801 3.997 3.997 0 0 0 1.555 1.423A9.956 9.956 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm7 12.172l1.414 1.414a2 2 0 1 1-2.93.11l.102-.11L19 14.172zM12 15c1.466 0 2.785.631 3.7 1.637l-.945.86C13.965 17.182 13.018 17 12 17c-1.018 0-1.965.183-2.755.496l-.945-.86A4.987 4.987 0 0 1 12 15zm-3.5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
              </svg>
              <span class="mr-2">{{ activity.numSad }}</span>
            </div>

            <div class="relative inline-block text-left">
              <div>
                <button @click="toggleReactMenu2(index)" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
                  React
                  <!-- Heroicon name: chevron-down -->
                  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>

              <!--
                Dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div v-show="showReactMenu2[index]" class="z-10 origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">

                  <button v-if="activity.text" @click="incrementLike(activity._id, 'message')" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"/><path d="M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z"/>
                    </svg>
                    Like
                  </button>
                  <button v-else-if="activity.rating" @click="incrementLike(activity._id, 'ratingHist')" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"/><path d="M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z"/>
                    </svg>
                    Like
                  </button>
                  <button v-if="activity.text" @click="incrementLove(activity._id, 'message')" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0H24V24H0z"/><path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"/>
                    </svg>
                    Love
                  </button>
                  <button v-else-if="activity.rating" @click="incrementLove(activity._id, 'ratingHist')" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0H24V24H0z"/><path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228 2.349-2.109 5.979-2.039 8.242.228zM5.172 6.172c-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454-1.487-1.49-3.881-1.562-5.453-.186l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069c-1.575-1.265-3.877-1.157-5.328.295z"/>
                    </svg>
                    Love
                  </button>
                  <button v-if="activity.text" @click="incrementHaha(activity._id, 'message')" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    <svg class="h-6 w-6 fill-current mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 7c2 0 3.667.333 5 1a5 5 0 0 1-10 0c1.333-.667 3-1 5-1zM8.5 7a2.5 2.5 0 0 1 2.45 2h-4.9A2.5 2.5 0 0 1 8.5 7zm7 0a2.5 2.5 0 0 1 2.45 2h-4.9a2.5 2.5 0 0 1 2.45-2z"/>
                    </svg>
                    Haha
                  </button>
                  <button v-else-if="activity.rating" @click="incrementHaha(activity._id, 'ratingHist')" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    <svg class="h-6 w-6 fill-current mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 7c2 0 3.667.333 5 1a5 5 0 0 1-10 0c1.333-.667 3-1 5-1zM8.5 7a2.5 2.5 0 0 1 2.45 2h-4.9A2.5 2.5 0 0 1 8.5 7zm7 0a2.5 2.5 0 0 1 2.45 2h-4.9a2.5 2.5 0 0 1 2.45-2z"/>
                    </svg>
                    Haha
                  </button>
                  <button v-if="activity.text" @click="incrementSad(activity._id, 'message')" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10 0 .727-.077 1.435-.225 2.118l-1.782-1.783a8 8 0 1 0-4.375 6.801 3.997 3.997 0 0 0 1.555 1.423A9.956 9.956 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm7 12.172l1.414 1.414a2 2 0 1 1-2.93.11l.102-.11L19 14.172zM12 15c1.466 0 2.785.631 3.7 1.637l-.945.86C13.965 17.182 13.018 17 12 17c-1.018 0-1.965.183-2.755.496l-.945-.86A4.987 4.987 0 0 1 12 15zm-3.5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
                    </svg>
                    Sad
                  </button>
                  <button v-else-if="activity.rating" @click="incrementSad(activity._id, 'ratingHist')" class="w-full flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    <svg class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10 0 .727-.077 1.435-.225 2.118l-1.782-1.783a8 8 0 1 0-4.375 6.801 3.997 3.997 0 0 0 1.555 1.423A9.956 9.956 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm7 12.172l1.414 1.414a2 2 0 1 1-2.93.11l.102-.11L19 14.172zM12 15c1.466 0 2.785.631 3.7 1.637l-.945.86C13.965 17.182 13.018 17 12 17c-1.018 0-1.965.183-2.755.496l-.945-.86A4.987 4.987 0 0 1 12 15zm-3.5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
                    </svg>
                    Sad
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { apiUrl } from '@/env.json'
import axios from 'axios'

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
  async mounted() {
    await this.getPostsFromFriends();
    await this.getActivityFromFriends();
    await this.getRatingActivityFromFriends();
    this.activities.sort((a, b) => {
      return -(new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    });
    this.getUniqueAuthors();
    this.getUniqueSongs();

    this.posts.forEach((item, index) => {
      this.showReactMenu[index] = false;
      this.showCommentDiv[index] = false;
    });
    this.activities.forEach((item, index) => {
      this.showReactMenu2[index] = false;
    });
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    ratingStar(rating100) {
      if (rating100 == 0)
        return 0;
      else if (rating100 <= 20)
        return 1;
      else if (rating100 <= 40)
        return 2;
      else if (rating100 <= 60)
        return 3;
      else if (rating100 <= 80)
        return 4;
      else if (rating100 <= 100)
        return 5;
    },
    async incrementLike(id, type) {
      let query = `query { ${type}ById(_id: "${id}") { numLike } }`;
      axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(async response => {
        let n;
        if (type == 'message') n = response.data.data.messageById.numLike;
        else if (type == 'ratingHist') n = response.data.data.ratingHistById.numLike;

        query = `mutation {
          ${type}UpdateById(
            _id: "${id}"
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
    async incrementLove(id, type) {
      let query = `query { ${type}ById(_id: "${id}") { numLove } }`;
      axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(async response => {
        let n;
        if (type == 'message') n = response.data.data.messageById.numLove;
        else if (type == 'ratingHist') n = response.data.data.ratingHistById.numLove;

        query = `mutation {
          ${type}UpdateById(
            _id: "${id}"
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
    async incrementHaha(id, type) {
      let query = `query { ${type}ById(_id: "${id}") { numHaha } }`;
      axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(async response => {
        let n;
        if (type == 'message') n = response.data.data.messageById.numHaha;
        else if (type == 'ratingHist') n = response.data.data.ratingHistById.numHaha;

        query = `mutation {
          ${type}UpdateById(
            _id: "${id}"
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
    async incrementSad(id, type) {
      let query = `query { ${type}ById(_id: "${id}") { numSad } }`;
      axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(async response => {
        let n;
        if (type == 'message') n = response.data.data.messageById.numSad;
        else if (type == 'ratingHist') n = response.data.data.ratingHistById.numSad;

        query = `mutation {
          ${type}UpdateById(
            _id: "${id}"
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
    toggleReactMenu: function(index) {
      this.showReactMenu.splice(index, 1, !this.showReactMenu[index]);
    },
    toggleReactMenu2: function(index) {
      this.showReactMenu2.splice(index, 1, !this.showReactMenu2[index]);
    },
    toggleCommentDiv: function(index) {
      this.showCommentDiv.splice(index, 1, !this.showCommentDiv[index]);
    },
    author(id) {
      const author = this.authors.find( ({ _id }) => _id === id );
      return author !== undefined ? author : { firstName: 'N/A', lastName: ''}; // bug #todo
    },
    song(id) {
      const song = this.songs.find( ({ _id }) => _id === id );
      return song !== undefined ? song : { title: 'N/A'};
    },
    handleResize() {
      this.window.width = window.innerWidth;
    },
    async getActivityFromFriends() {
      const query = `
        query {
          findFriendsPost(id: "${this.$store.getters.loggedInUserId}", type: "comment") {
            _id
            text,
            publishedAt,
            createdAt
            authorId
            numLike
            numLove
            numHaha
            numSad
          }
        }`;
        return axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
          this.activities = response.data.data.findFriendsPost;
          this.authors = this.authors.concat(this.activities.map(a => a.authorId));
        }).catch(error => {
          console.log(error);
        });
    },
    async getRatingActivityFromFriends() {
      const query = `query {
        findFriendsRating(id: "${this.$store.getters.loggedInUserId}") {
          _id
          createdAt
          rating
          review
          songId
          userId
          authorId: userId
          numLike
          numLove
          numHaha
          numSad
        }
      }`;
      return axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
        this.activitiesRating = response.data.data.findFriendsRating;
        this.authors = this.authors.concat(this.activitiesRating.map(a => a.userId));
        this.songs = [...new Set(this.activitiesRating.map(a => a.songId))];
        this.activities = this.activities.concat(this.activitiesRating);
      }).catch(error => {
        console.log(error);
      });
    },
    async getPostsFromFriends() {
      let query = `
        query {
          findFriendsPost(id: "${this.$store.getters.loggedInUserId}", type: "post") {
            _id
            text,
            publishedAt,
            authorId
            numLike
            numLove
            numHaha
            numSad
          }
        }`;
        return axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
          this.posts = response.data.data.findFriendsPost;

          this.posts.forEach(async (item) => {
            query = `query {
              messageMany(filter: { messageId: "${item._id}" }) {
                _id
                text
                publishedAt
                authorId
              }
            }`;
            let res = await axios.post(process.env.VUE_APP_API || apiUrl, { query });
            item.comments = res.data.data.messageMany;
          });

          this.authors = this.authors.concat(this.posts.map(a => a.authorId));
        }).catch(error => {
          console.log(error);
        });
    },
    async handlePublish() {
      let msgId = null;
      if (this.messageId !== null)
        msgId = this.posts[this.messageId]._id;

      let query = 'mutation { messageCreateOne( record: {\n';
      query += `text: """${this.post}""",\n`;
      query += `publishedAt: "${new Date()}",\n`;
      query += `authorId: "${this.$store.getters.loggedInUserId}",\n`;
      if (msgId !== null) query += `messageId: "${msgId}"\n`;
      query += '} ) { recordId } }';

      try {
        await axios.post(process.env.VUE_APP_API || apiUrl, { query });
      } catch (error) {
        console.log(error);
      } finally {
        this.messageId = null;
      }
    },
    async getUniqueAuthors() {
      const unique = this.authors.filter((value, index, self) => self.indexOf(value) === index);
      const query = `query {
        findAuthors(
          authorIds: [${unique.map(x => `"` + x + `"`)}]
        ) {
          _id
          profileImage
          firstName
          lastName
        }
      }`;
      axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
        this.authors = response.data.data.findAuthors;
      }).catch(error => {
        console.log(error);
      });
    },
    async getUniqueSongs() {
      const unique = this.songs.filter((value, index, self) => self.indexOf(value) === index);
      const query = `query {
        findSongs(
          songIds: [${unique.map(x => `"` + x + `"`)}]
        ) {
          _id
          title
          artist
          album
        }
      }`;
      axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
        this.songs = response.data.data.findSongs;
      }).catch(error => {
        console.log(error);
      });
    }
  },
  computed: {
    sortedPosts: function() {
      return this.posts.slice().sort((a, b) => {
        let tmp = new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        return this.sortedAsc ? tmp : -tmp;
      });
    },
    sortedComments: function() {
      return this.comments.slice().sort((a, b) => {
        let tmp = new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        return this.sortedAsc ? tmp : -tmp;
      });
    }
  },
  data() {
    return {
      window: {
        width: window.innerWidth,
      },
      post: '',
      posts: [],
      activities: [],
      activitiesRating: [],
      authors: [],
      songs: [],
      showReactMenu: [],
      showReactMenu2: [],
      showCommentDiv: [],
      showPublish: false,
      messageId: null,
      sortedAsc: true,
      showNews: true,
      showActivity: false,
      showDropdown: false,
    }
  }
}
</script>
