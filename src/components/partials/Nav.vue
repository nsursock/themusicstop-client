<template>
<div>

  <!-- navbar -->
<nav class="bg-gray-800 ">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button v-on:click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <router-link to="/" class="flex-shrink-0 flex items-center">
          <svg class="h-8 w-8 fill-current text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" ><g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M229.322,189.02c-9.406,0-17.029,7.623-17.029,17.029v99.902c0,9.406,7.623,17.029,17.029,17.029    s17.029-7.623,17.029-17.029v-99.902C246.35,196.643,238.727,189.02,229.322,189.02z"  data-original="#000000" style="" class=""/>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M176.532,136.231c-9.406,0-17.029,7.623-17.029,17.029v205.487c0,9.406,7.623,17.029,17.029,17.029    s17.029-7.623,17.029-17.034V153.259C193.561,143.854,185.938,136.231,176.532,136.231z"  data-original="#000000" style="" class=""/>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M123.175,86.847c-9.406,0-17.029,7.623-17.029,17.029v304.248c0,9.406,7.623,17.029,17.029,17.029    s17.029-7.623,17.029-17.029V103.876C140.204,94.47,132.581,86.847,123.175,86.847z"  data-original="#000000" style="" class=""/>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M70.386,136.231c-9.406,0-17.029,7.623-17.029,17.029v205.487c0,9.406,7.623,17.029,17.029,17.029    s17.029-7.623,17.029-17.034V153.259C87.415,143.854,79.791,136.231,70.386,136.231z"  data-original="#000000" style="" class=""/>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M17.029,185.614C7.623,185.614,0,193.237,0,202.643v106.714c0,9.406,7.623,17.029,17.029,17.029    s17.029-7.618,17.029-17.029V202.643C34.058,193.237,26.434,185.614,17.029,185.614z"  data-original="#000000" style="" class=""/>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M388.825,86.847c-9.406,0-17.029,7.623-17.029,17.029v304.248c0,9.406,7.623,17.029,17.029,17.029    s17.029-7.623,17.029-17.029V103.876C405.854,94.47,398.23,86.847,388.825,86.847z"  data-original="#000000" style="" class=""/>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M335.468,136.231c-9.406,0-17.029,7.623-17.029,17.029v205.487c0,9.406,7.623,17.029,17.029,17.029    c9.406,0,17.029-7.623,17.029-17.034V153.259C352.497,143.854,344.873,136.231,335.468,136.231z"  data-original="#000000" style="" class=""/>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M282.679,162.909c-9.406,0-17.029,7.623-17.029,17.029v152.124c0,9.406,7.623,17.029,17.029,17.029    c9.406,0,17.029-7.618,17.029-17.029V179.938C299.707,170.532,292.084,162.909,282.679,162.909z"  data-original="#000000" style="" class=""/>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M441.614,136.231c-9.406,0-17.029,7.623-17.029,17.029v205.487c0,9.406,7.623,17.029,17.029,17.029    s17.029-7.623,17.029-17.034V153.259C458.643,143.854,451.02,136.231,441.614,136.231z"  data-original="#000000" style="" class=""/>
            </g>
          </g>
          <g xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M494.971,185.614c-9.406,0-17.029,7.623-17.029,17.029v106.714c0,9.406,7.623,17.029,17.029,17.029    c9.406,0,17.029-7.618,17.029-17.029V202.643C512,193.237,504.377,185.614,494.971,185.614z"  data-original="#000000" style="" class=""/>
            </g>
          </g>
          </g>
          </svg>
          <span class="hidden sm:block ml-3 text-gray-300 text-lg font-semibold tracking-wide leading-relaxed">The Music Stop</span>
        </router-link>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link v-bind:class="$route.name === 'Home' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class=" px-3 py-2 rounded-md text-sm font-medium" v-bind:to="{ name: 'Home' }">Home</router-link>
            <router-link v-show="!$store.state.isProd" v-bind:class="$route.name === 'Messages' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class=" px-3 py-2 rounded-md text-sm font-medium" v-bind:to="{ name: 'Messages' }">Messages</router-link>
            <!-- <router-link v-bind:class="$route.name === 'About' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class=" px-3 py-2 rounded-md text-sm font-medium" to="/about">About</router-link> -->
            <router-link v-bind:class="$route.name === 'Users' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class=" px-3 py-2 rounded-md text-sm font-medium" to="/users">Members</router-link>
          </div>
        </div>
      </div>
      <!-- right navbar -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

        <div class="hidden sm:block">
          <span v-if="isLoggedIn">
            <!-- <span class="px-3 py-2 rounded-md text-sm font-medium text-gray-300">{{ loggedInEmail }}</span> -->
            <button v-on:click="handleLogout" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Log out</button>
          </span>
          <span v-else>
            <button v-on:click="toggleModal(), showSignup = true;" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sign up</button>
            <button v-on:click="toggleModal(), showLogin = true;" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Log in</button>
          </span>
        </div>

        <button v-show="isLoggedIn" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span class="sr-only">View notifications</span>
          <!-- Heroicon name: bell -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        <!-- Profile dropdown -->
        <div class="z-20 ml-3 relative" v-show="isLoggedIn">
          <div>
            <button v-on:click="toggleMemberMenu" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <svg v-if="!loggedInProfileImg" class="h-8 w-8 rounded-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <img v-else class="h-8 w-8 rounded-full" v-bind:src="loggedInProfileImg" alt="">
            </button>
          </div>
          <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <div v-show="showMemberMenu" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <!-- <router-link class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" :to="{ name: 'Profile', params: {} }">Profile</router-link> -->
            <router-link class="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" :to="{ name: 'Settings', params: {} }">Settings</router-link>
            <button @click="toggleModal(), showPassword = true" class="text-left w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Change password</button>
            <button @click="toggleModal(), showClose = true" class="text-left w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Close account</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
  <div v-bind:class="showMobileMenu ? 'block' : 'hidden'" class="sm:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <router-link v-bind:class="$route.name === 'Home' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class=" block px-3 py-2 rounded-md text-base font-medium" v-bind:to="{ name: 'Home' }">Home</router-link>
      <!-- <router-link v-bind:class="$route.name === 'About' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class=" block px-3 py-2 rounded-md text-base font-medium" v-bind:to="{ name: 'About' }">About</router-link> -->
      <router-link v-bind:class="$route.name === 'Users' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class=" block px-3 py-2 rounded-md text-base font-medium" v-bind:to="{ name: 'Users' }">Members</router-link>
      <div class="bg-gray-700">
        <span v-if="isLoggedIn" class="flex items-center justify-center">
          <button v-on:click="handleLogout" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Log out</button>
        </span>
        <span v-else class="flex items-center justify-around">
          <button v-on:click="toggleModal(), showSignup = true;" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sign up</button>
          <button v-on:click="toggleModal(), showLogin = true;" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Log in</button>
        </span>
      </div>
    </div>
  </div>
</nav>


<div v-show="showModal" class="fixed z-20 inset-0 overflow-y-auto">
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
    <div class="fixed inset-0 transition-opacity" v-on:click="toggleModal" aria-hidden="true">
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
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

      <div v-show="showLogin" class="  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <!-- <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"> -->
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in to your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <span href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                sign up if you don't have an account yet
              </span>
            </p>
          </div>
          <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address1" class="sr-only">Email address</label>
                <input v-model="user.email" id="email-address1" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
              </div>
              <div>
                <label for="password1" class="sr-only">Password</label>
                <input v-model="user.password" id="password1" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-center justify-between ">
              <div class="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div class="flex items-center justify-center space-x-3">
              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <!-- Heroicon name: lock-closed -->
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                Submit
              </button>
              <button v-on:click="toggleModal" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <div v-show="showSignup" class="  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

        <div v-show="isLoggedIn" class="flex flex-col items-center ">
          <div class="mb-3 mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"/><path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/>
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0  sm:text-left flex flex-col items-center">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Signup successful
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500 text-center">
                Enter a world of music where you will find people are the most important asset. And remember, there's a contact page should you have questions.
              </p>
            </div>
          </div>
          <div class="flex items-center justify-start space-x-2 mt-2 px-5">
            <router-link to="/users" class="w-48  lg:mt-3  inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="mx-auto">Members</span>
            </router-link>
            <router-link to="/settings" class="w-48  lg:mt-3  inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="mx-auto">Settings</span>
            </router-link>
          </div>
        </div>

        <div v-show="!isLoggedIn" class="max-w-md w-full space-y-8">
          <div>
            <!-- <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"> -->
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up for this website
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <span href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                log in if you're already registered
              </span>
            </p>
          </div>

            <form class="mt-8 space-y-6" @submit.prevent="handleSignup">
              <div v-show="currentStep === 1" class="">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label for="email-address2" class="sr-only">Email address</label>
                    <input v-model="user.email" id="email-address2" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
                  </div>
                  <div>
                    <label for="first-name" class="sr-only">First name</label>
                    <input v-model="user.firstname" id="first-name" name="firstname" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="First name">
                  </div>
                  <div>
                    <label for="last-name" class="sr-only">Last name</label>
                    <input v-model="user.lastname" id="last-name" name="lastname" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last name">
                  </div>
                  <div>
                    <label for="password2" class="sr-only">Password</label>
                    <input v-model="user.password" id="password2" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                  </div>
                </div>
              </div>

              <div v-show="currentStep === 2" class="">
                  <div class="flex items-center justify-center space-x-2 py-2 h-10 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 border rounded-md">
                    <input v-model="user.gender" type="radio" required id="male" name="gender" value="M" class="ml-3">
                    <label for="male" class="block text-sm font-medium text-gray-700">Male</label><br>
                    <input v-model="user.gender" type="radio" required id="female" name="gender" value="F">
                    <label for="female" class="block text-sm font-medium text-gray-700">Female</label><br>
                  </div>
                  <label for="birthday" class="sr-only">Birthday</label>
                  <input v-model="user.birthday" id="birthday" name="birthday" type="text" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Birthday (yyyy-mm-dd)">
                  <!-- <input v-model="dob" @focus="type = 'date'" id="birthday" name="birthday" :type="type" required class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Birthday"> -->

                  <label for="city" class="sr-only">City</label>
                  <input v-model="user.city" type="text" name="city" id="city" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="City">
                  <label for="country" class="sr-only">Country</label>
                  <input v-model="user.country" type="text" name="country" id="country" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Country">
              </div>

              <div v-show="currentStep !== lastStep" class="flex items-center justify-center space-x-3">
                <button v-on:click="currentStep++" type="button" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  Next
                </button>
              </div>

              <div v-show="currentStep === lastStep" class="flex items-center justify-center space-x-3">
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <!-- Heroicon name: lock-closed -->
                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  Submit
                </button>
                <button v-on:click="currentStep--" type="button" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  Prev
                </button>
              </div>
            </form>
        </div>
      </div>

      <div v-show="showPassword" class="  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <!-- <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"> -->
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Change password
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Here you can reset your password. Be sure to mix lowercase and uppercase letters,
              numbers and special characters.
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                Password should be minimum 10 letters long.
              </a>
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form @submit.prevent="saveNewPassword">
              <div class="sm:overflow-hidden">
                <div class="px-4 py-5  space-y-6 sm:p-6">

                  <div>
                    <label for="current" class="sr-only">Password</label>
                    <input v-model="current" v-on:change="checkCurrentPassword" id="current" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Current password">
                  </div>
                  <div>
                    <label for="newPassword1" class="sr-only">Password</label>
                    <input v-model="password1" v-on:change="checkNewPassword" id="newPassword1" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="New password">
                    <label for="newPpassword2" class="sr-only">Password</label>
                    <input v-model="password2" v-on:change="checkNewPassword" id="newPpassword2" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 border-t-0 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm password">
                  </div>

                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
                <ErrorMessage :message="message"/>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div v-show="showClose">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <!-- Heroicon name: exclamation -->
              <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                Close account
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button v-on:click="deleteAccount" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Delete
          </button>
          <button v-on:click="toggleModal" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Cancel
          </button>
        </div>
      </div>

    </div>
  </div>
</div>

</div>
</template>

<script>
import axios from 'axios'
import { apiUrl } from '@/env.json'
import ErrorMessage from '@/components/partials/ErrorMessage.vue'
import { bus } from '@/main'

export default {
  name: 'Nav',
  components: {
    ErrorMessage
  },
  data() {
    return {
      type: 'text',

      showMemberMenu: false,
      showMobileMenu: false,
      showLogin: false,
      showSignup: false,
      showClose: false,
      showPassword: false,
      showModal: false,

      showStep1: true,
      showStep2: false,
      currentStep: 1,
      lastStep: 2,

      loggedInEmail: '',
      loggedInProfileImg: '',

      user: {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        birthday: null,
        gender: '',
        city: '',
        country: ''
      },

      current: '',
      password1: '',
      password2: '',
      message: ''
    }
  },

  computed: {
    // dob: {
    //   get: function() {
    //     var d = new Date(this.user.birthday),
    //     month = '' + (d.getMonth() + 1),
    //     day = '' + d.getDate(),
    //     year = d.getFullYear();
    //
    //     if (month.length < 2)
    //     month = '0' + month;
    //     if (day.length < 2)
    //     day = '0' + day;
    //
    //     console.log('get: '+this.user.birthday);
    //     if (this.user.birthday === null)
    //       return '';
    //     return [year, month, day].join('-');
    //   },
    //   set: function(newValue) {
    //     this.birthday = new Date(newValue);
    //     console.log('set: '+this.birthday);
    //   }
    // },
    isLoggedIn() {
      return this.$store.getters.loggedIn;
    },
    loggedInUserId() {
      return this.$store.getters.loggedInUserId;
    }
  },

  created () {
    bus.$on('start', () => {
      this.toggleModal();
      this.showSignup = true;
    });
    bus.$on('closeAccount', () => {
      this.toggleModal();
      this.showClose = true;
    });
    bus.$on('closeMenu', () => {
      this.showMemberMenu = false;
      this.showMobileMenu = false;
    })
  },

  mounted() {
    if (this.isLoggedIn)
      this.displayLoggedIn();
  },

  updated() {
    // if (this.isLoggedIn)
    //   this.displayLoggedIn();
  },

  methods: {
    toggleModal: function() {
      this.showModal = !this.showModal;
      this.showLogin = this.showSignup = false,
      this.showPassword = this.showClose = false;
    },
    toggleMemberMenu: function() {
      this.showMemberMenu = !this.showMemberMenu;
    },
    toggleMobileMenu: function() {
      this.showMobileMenu = !this.showMobileMenu;
    },

    displayLoggedIn: function() {
      const query = `
        query {
          userById(_id: "${this.loggedInUserId}") {
            email,
            profileImage
          }
        }`;
      axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
        this.loggedInEmail = response.data.data.userById.email;
        this.loggedInProfileImg = response.data.data.userById.profileImage;
      }).catch(error => {
        console.log(error);
        this.handleLogout();
      });
    },

    handleLogout: function() {
      this.$store.dispatch('destroyToken')
        .then( () => {
          this.$router.push('/')
        }).catch(err => console.log(err));
    },
    handleLogin: function() {
      this.$store.dispatch('retrieveToken', {
        email: this.user.email,
        password: this.user.password
      }).then( () => {
        this.showModal = false;
        this.$router.push({ name: 'Settings' })
      }).catch(err => console.log(err));
    },
    handleSignup: function() {
      this.$store.dispatch('register', {
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
        password: this.user.password,
        birthday: this.user.birthday,
        gender: this.user.gender,
        city: this.user.city,
        country: this.user.country
      })
      // .then( () => {
      //   this.showModal = false;
      //   this.$router.push({ name: 'Settings' })
      // })
      .catch(err => console.log(err));
    },

    async deleteAccount() {
      let id = this.$store.getters.loggedInUserId;

      this.$store.dispatch('destroyToken')
        .then( () => {
          this.$router.push('/');
        })
        .catch(err => console.log(err));

      const query = `
        mutation {
          userRemoveById(_id: "${id}") {
            recordId
          }
        }`;
      try {
        await axios.post(process.env.VUE_APP_API || apiUrl, { query });
      } catch(error) {
        console.log(error);
      }
    },

    saveNewPassword: function() {
      const query = `
        mutation {
          changePassword(
            id: "${this.$store.getters.loggedInUserId}",
            password: "${this.password1}")
        }`;
      axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
    },
    checkNewPassword: function() {
      if (this.password1 !== this.password2 && !(this.password2 === '')) {
        this.message = 'Passwords differ';
      } else {
        this.message = '';
      }
    },
    checkCurrentPassword: function() {
      this.$store.dispatch('checkCurrentPassword', {
        email: this.$store.getters.loggedInUserEmail,
        password: this.current
      }).then( () => {
        // check new password is the same
        this.message = '';
      }).catch(err => {
        // incorrect password
        this.message = err.data.errors[0].message;
      });
    },
  }
}
</script>
