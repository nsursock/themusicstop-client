<template lang="html">
  <div class="">
    <div class="flex-1 flex overflow-hidden">
      <div class="w-64 bg-gray-100 p-6 overflow-y-auto h-screen">
        <nav class="">
          <h2 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Mailboxes</h2>
          <div class="mt-3 space-y-1">
            <a class="-mx-3 px-3 py-1 text-sm font-medium flex justify-between items-center bg-gray-200 rounded-lg" href="#">
              <span class="inline-flex items-center">
                <svg class="text-gray-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <span class="ml-2 text-gray-700">Inbox</span>
              </span>
              <span class="inline-block w-9 text-center py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">{{Math.round(Math.random() * 1200)}}</span>
            </a>
            <a class="-mx-3 px-3 py-1 text-sm font-medium flex justify-between items-center hover:bg-gray-200 rounded-lg" href="#">
              <span class="inline-flex items-center">
                <svg class="text-gray-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <span class="ml-2 text-gray-700">Flagged</span>
              </span>
              <span class="inline-block w-9 text-center py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">{{Math.round(Math.random() * 200)}}</span>
            </a>
            <a class="-mx-3 px-3 py-1 text-sm font-medium flex justify-between items-center hover:bg-gray-200 rounded-lg" href="#">
              <span class="inline-flex items-center">
                <svg class="text-gray-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span class="ml-2 text-gray-700">Drafts</span>
              </span>
              <span class="inline-block w-9 text-center py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">{{Math.round(Math.random() * 200)}}</span>
            </a>
            <a class="-mx-3 px-3 py-1 text-sm font-medium flex justify-between items-center hover:bg-gray-200 rounded-lg" href="#">
              <span class="inline-flex items-center">
                <svg class="text-gray-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span class="ml-2 text-gray-700">Junk</span>
              </span>
              <span class="inline-block w-9 text-center py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">{{Math.round(Math.random() * 200)}}</span>
            </a>
          </div>
          <h2 class="text-xs font-semibold text-gray-600 uppercase tracking-wide mt-8">Folders</h2>
          <div class="mt-3 space-y-1">
            <a v-for="i in 30" :key="i.key" class="-mx-3 px-3 py-1 text-sm font-medium flex justify-between items-center hover:bg-gray-200 rounded-lg" href="#">
              <span class="inline-flex items-center">
                <svg class="text-gray-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span class="ml-2 text-gray-700">Singer {{Math.random().toFixed(2)}}</span>
              </span>
              <span class="inline-block w-9 text-center py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">{{Math.round(Math.random() * 200)}}</span>
            </a>
          </div>
        </nav>
      </div>
      <main class="flex-1 flex bg-gray-200 h-screen">
        <div class="w-full max-w-xs flex-grow border-l border-r border-gray-300 flex flex-col overflow-hidden bg-gray-200">
          <div class="px-4 py-2 flex justify-between items-center border-b border-gray-300 flex-shrink-0">
            <button class="flex items-center text-xs font-semibold text-gray-500">
              Sorted by Date
              <svg class="ml-1 fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="flex items-center text-xs font-semibold text-gray-500" type="button" name="button">
              <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
              </svg>
            </button>
          </div>
          <div class="overflow-y-auto flex-1">
            <a href="#" v-for="(thread, index) in threads" :key="thread.key"
            :class="index !== 0 ? 'border-t' : ''" class="block px-6 py-3 bg-white">
              <div class="flex justify-between">
                <span class="text-xs font-semibold text-gray-900">{{thread.from}}</span>
                <span class="text-xs text-gray-600">{{thread.date}}</span>
              </div>
              <p class="mt-1 text-sm text-gray-900 truncate">{{thread.subject}}</p>
              <p class="mt-2 text-sm text-gray-600 ">{{thread.message.substr(0,80)}}...</p>
            </a>
          </div>
        </div>
        <div class="flex-1 flex flex-col w-0">
          <div class="shadow-md relative">
            <div class="flex items-center justify-between bg-gray-100 p-6 border-b border-gray-300">
              <div class="flex items-center space-x-2">
                <button type="button" name="button">
                  <svg class="h-8 w-8 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </button>
                <button type="button" name="button">
                  <svg class="h-8 w-8 text-gray-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </button>
              </div>
              <div class="flex items-center space-x-2">
                <button type="button" name="button">
                  <svg class="h-8 w-8 text-gray-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <button type="button" name="button">
                  <svg class="h-8 w-8 text-gray-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="bg-white px-5 py-4 flex items-center justify-between">
              <h3 class="text-xl text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation?</h3>
              <div class="ml-4 flex-shrink-0">
                <span class="mr-2">#1428</span>
                <span class="text-sm font-semibold text-purple-900 bg-purple-200 rounded-full leading-none px-2 py-1">Active</span>
              </div>
            </div>
          </div>
          <div class="p-3 flex-1 overflow-y-auto">
            <article v-for="i in 15" :key="i.key" class="mt-3 px-10 pt-6 pb-8 mt-2 bg-white rounded-lg shadow">
              <div class="flex items-center justify-between">
                <p class="text-lg font-semibold">
                  <span class="text-gray-900">Joe Armstrong </span>
                  <span class="text-gray-600">wrote</span>
                </p>
                <div class="flex items-center">
                  <span class="text-sm text-gray-600">Yesterday at 7:24 AM</span>
                  <img class="ml-5 h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1611943574719-a32e9553599e?crop=entropy&cs=tinysrgb&fit=facearea&fm=jpg&h=150&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200&facepad=3.5" alt="">
                </div>
              </div>
              <div class="mt-6 text-gray-800 text-sm">
                <p>thanks so much ! can't wait !</p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      threads: [
        {
          from: 'Gloria Robertson',
          date: '2 days ago',
          subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          from: 'Gloria Robertson',
          date: '2 days ago',
          subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          from: 'Gloria Robertson',
          date: '2 days ago',
          subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          from: 'Gloria Robertson',
          date: '2 days ago',
          subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          from: 'Gloria Robertson',
          date: '2 days ago',
          subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          from: 'Gloria Robertson',
          date: '2 days ago',
          subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          from: 'Gloria Robertson',
          date: '2 days ago',
          subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          from: 'Gloria Robertson',
          date: '2 days ago',
          subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          from: 'Gloria Robertson',
          date: '2 days ago',
          subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          from: 'Gloria Robertson',
          date: '2 days ago',
          subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          from: 'Gloria Robertson',
          date: '2 days ago',
          subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          from: 'Gloria Robertson',
          date: '2 days ago',
          subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ]
    }
  }
}
</script>
