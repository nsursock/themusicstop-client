<template lang="html">
  <div class="">

    <LoadingModal v-show="isLoading" :isLoading="isLoading" />

    <div v-show="showModal" class="fixed z-10 inset-0 overflow-y-auto">
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
        <div v-show="showModal" @click="showModal = false" class="fixed inset-0 transition-opacity" aria-hidden="true">
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
        <div v-show="showModal" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">

              <div v-show="sendSuccessful" class="flex flex-col items-center">
                <div class="mb-3 mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/>
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0  sm:text-left flex flex-col items-center">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Message sent
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500 text-center">
                      The recipient will receive the message shortly. In the meantime, check the members to make new friends.
                    </p>
                  </div>
                </div>
                <div class="flex items-center justify-start space-x-2 mt-2 px-5">
                  <button @click="showModal = false, sendSuccessful = false" class="w-48  lg:mt-3  inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="mx-auto">Close</span>
                  </button>
                </div>
              </div>

              <div v-show="!sendSuccessful" class="flex">
                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 sm:mx-0 sm:h-10 sm:w-10">
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Send message
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      What do you want to write? This message will be private but be careful what you send.
                    </p>
                  </div>
                  <div>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input v-model="recipient" type="text" name="recipient" id="recipient" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300" placeholder="Recipient">
                    </div>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input v-model="subject" type="text" name="subject" id="subject" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300" placeholder="Subject">
                    </div>
                    <textarea v-model="message" id="message" name="message" rows="5" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder=""></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="!sendSuccessful" class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="handleWrite" type="button" class="transform transition hover:scale-110 duration-500 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
              Send
            </button>
            <button @click="showModal = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="md:flex-1 md:flex md:overflow-hidden">

      <div v-show="divSelected === 'nav' && isMobile || !isMobile" class="w-full md:w-1/4 bg-gray-100 p-6 overflow-y-auto h-screen w-screen ">
        <nav class="">
          <h2 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">Mailboxes</h2>
          <div class="mt-3 space-y-3">
            <button v-for="(mailbox, index) in mailboxes" :key="index" ref="mbox"
            :class="currMbox === mailbox ? 'outline-none bg-gray-200 border-transparent' : ''"
            class="w-full  -mx-3 px-3 py-1 text-sm font-medium flex justify-between items-center hover:bg-gray-200 rounded-lg "
            @click="divSelected = 'conv', currMbox = mailbox">
              <span class="inline-flex items-center">
                <svg v-show="mailbox === 'All'" class="text-gray-500 h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"/></svg>
                <svg v-show="mailbox === 'Inbox'" class="text-gray-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <svg v-show="mailbox === 'Sent'" class="text-gray-500 h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z"/></svg>
                <svg v-show="mailbox === 'Flagged'" class="text-gray-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <svg v-show="mailbox === 'Drafts'" class="text-gray-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <svg v-show="mailbox === 'Junk'" class="text-gray-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
               </svg>
                <span class="ml-2 text-gray-700">{{ mailbox }}</span>
              </span>
              <span v-show="mailbox === 'All'" class="inline-block w-9 text-center py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">{{messages.length}}</span>
              <span v-show="mailbox === 'Inbox'" class="inline-block w-9 text-center py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">{{messagesReceived.length}}</span>
              <span v-show="mailbox === 'Sent'" class="inline-block w-9 text-center py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">{{messagesSent.length}}</span>
              <span v-show="mailbox === 'Flagged'" class="inline-block w-9 text-center py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">{{numFlagged}}</span>
              <!-- <span class="inline-block w-9 text-center py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">{{threadsFiltered.length}}</span>
              <span class="inline-block w-9 text-center py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">{{threadsFiltered.length}}</span> -->
            </button>
          </div>
          <!-- <h2 class="text-xs font-semibold text-gray-600 uppercase tracking-wide mt-8">Folders</h2>
          <div class="mt-3 space-y-1">
            <button v-for="i in 1" :key="i.key" class="w-full md:w-56 -mx-3 px-3 py-1 text-sm font-medium flex justify-between items-center hover:bg-gray-200 rounded-lg" href="#">
              <span class="inline-flex items-center">
                <svg class="text-gray-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span class="ml-2 text-gray-700">Singer</span>
              </span>
              <span class="inline-block w-9 text-center py-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full"></span>
            </button>
          </div> -->
        </nav>
      </div>

      <div v-show="divSelected === 'conv' && isMobile || !isMobile" class="w-full md:w-1/4 md:max-w-xs md:flex-grow border-l border-r border-gray-300 flex flex-col overflow-hidden bg-gray-200 w-screen h-screen">
        <div class="px-4 py-2 flex justify-between items-center border-b border-gray-300 flex-shrink-0">
          <button class="flex items-center text-xs font-semibold text-gray-500">
            Sorted by Date
            <svg class="ml-1 fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <button @click="sortAsc = !sortAsc" class="flex items-center text-xs font-semibold text-gray-500" type="button" name="button">
            <svg v-show="sortAsc" class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            <svg v-show="!sortAsc" class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
            </svg>
          </button>
        </div>
        <div class="overflow-y-auto flex-1">
          <button v-for="(message, index) in threadsFiltered" :key="index"
          @click="divSelected = 'msg', thread = threadsFiltered[index].subject"
          :class="index !== 0 ? 'border-t' : ''" class="block px-6 py-3 bg-white w-full">
          <div class="flex justify-between">
            <span v-if="person(message.talkerId)" class="text-xs font-semibold text-gray-900">
              {{ person(message.authorId).firstName }} {{ person(message.authorId).lastName }}
            </span>
            <span class="text-xs text-gray-600">
              {{ message.createdAt | formatDate('MMM D, YY') }} at {{ message.createdAt | formatDate('h:mm A') }}
            </span>
          </div>
          <div class="flex flex-col ">
            <p class="mt-1 text-left text-sm text-gray-900 truncate">{{message.subject}}</p>
            <p v-if="message.text" class="md:hidden mt-2 text-left text-sm text-gray-600">{{message.text.substring(0,160)}}...</p>
            <p v-if="message.text" class="hidden md:block mt-2 text-left text-sm text-gray-600">{{message.text.substring(0,80)}}...</p>
          </div>
        </button>
      </div>
    </div>

      <main v-show="divSelected === 'msg' && isMobile || !isMobile" class="w-full md:w-2/4 flex-1 flex bg-gray-200 h-screen">
        <div class="flex-1 flex flex-col w-0">
          <div class="shadow-md relative">
            <div class="flex items-center justify-between bg-gray-100 py-4 px-6 border-b border-gray-300">
              <div class="flex items-center ">
                <span class="">
                  <button @click="showModal = true, subject = recipient = ''" type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center transform transition hover:scale-110 duration-500">
                    <!-- Heroicon name: solid/check -->
                    <svg class="md:mr-2 h-6 w-6 text-gray-100 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                    </svg>
                    <span class="hidden md:block">Write</span>
                  </button>
                </span>
                <span class=" ml-1">
                  <button @click="showModal = true, subject = thread, recipient = receiver" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center transform transition hover:scale-110 duration-500">
                    <!-- Heroicon name: solid/link -->
                    <svg class="md:mr-2 h-6 w-6 text-gray-700 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="hidden md:block">Reply</span>
                  </button>
                </span>
                <span class="  ml-1">
                  <button @click="flagMessage(selectedId, true)" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center transform transition hover:scale-110 duration-500">
                    <!-- Heroicon name: solid/link -->
                    <svg class="md:mr-2 h-6 w-6 text-gray-700 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    <span class="hidden md:block">Flag</span>
                  </button>
                </span>
              </div>
              <div class="flex items-center">
                <button @click="sortAsc2 = true"
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span class="sr-only">Sort ascending</span>
                  <!-- Heroicon name: chevron-up -->
                  <svg class="h-6 w-6 text-gray-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <button @click="sortAsc2 = false"
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border-r border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span class="sr-only">Sort descending</span>
                  <!-- Heroicon name: chevron-down -->
                  <svg class="h-6 w-6 text-gray-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <!-- <button type="button" name="button">
                  <svg class="h-6 w-6 text-gray-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <button type="button" name="button">
                  <svg class="h-6 w-6 text-gray-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button> -->
              </div>
            </div>
            <div v-show="thread !== ''" class="bg-white px-5 py-4 flex items-center justify-between">
              <h3 class="text-xl text-gray-900">{{ thread }}</h3>
              <div class="ml-4 flex-shrink-0">
                <span class="mr-2">#{{ messagesFiltered.length }}</span>
                <!-- <span class="text-sm font-semibold text-purple-900 bg-purple-200 rounded-full leading-none px-2 py-1">Active</span> -->
              </div>
            </div>
          </div>
          <div class="px-3 flex-1 overflow-y-auto mb-3">
            <button v-for="(message, index) in messagesFiltered" :key="index"
            @click="receiver = person(messagesFiltered[index].talkerId).userName, selectedId = messagesFiltered[index]._id"
            class="mt-3 px-10 pt-6 pb-8 mt-2 bg-white rounded-lg shadow w-full">
              <div class="flex items-center justify-between">
                <p v-if="person(message.talkerId)" class="text-lg font-semibold">
                  <span v-if="currMbox === 'Sent'" class="text-gray-900">{{ person(message.recipientId).firstName }} {{ person(message.recipientId).lastName }}</span>
                  <span v-else class="text-gray-900">{{ person(message.authorId).firstName }} {{ person(message.authorId).lastName }}</span>
                  <!-- <span class="text-gray-600"> wrote</span> -->
                </p>
                <div class="flex items-center">
                  <span class="text-sm text-gray-600">{{ message.createdAt | formatDate('MMM D, YY') }} at {{ message.createdAt | formatDate('h:mm A') }}</span>
                  <div class="">
                    <svg v-if="!person(message.talkerId).profileImage" class="ml-5 h-9 w-9 rounded-full object-cover text-gray-300 bg-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <img v-else-if="person(message.recipientId) && currMbox === 'Sent'" class="ml-5 h-9 w-9 rounded-full object-cover" :src="person(message.recipientId).profileImage">
                    <img v-else-if="person(message.authorId)" class="ml-5 h-9 w-9 rounded-full object-cover" :src="person(message.authorId).profileImage" alt="">
                  </div>
                </div>
              </div>
              <div class="mt-6 text-gray-800 text-sm">
                <p class="text-left">{{ message.text }}</p>
              </div>
            </button>
          </div>
        </div>
      </main>

      <button v-show="divSelected !== 'nav' && isMobile" @click="divSelected === 'msg' ? divSelected = 'conv' : divSelected = 'nav'"
      class="fixed bottom-0 right-0 m-4 inline-flex items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
        <span class="sr-only">Back button</span>
        <svg class="h-6 w-6 text-gray-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { apiUrl } from '@/env.json'
import moment from 'moment'
import LoadingModal from '@/components/LoadingModal'

export default {
  components: {
    LoadingModal
  },
  filters: {
    formatDate(date, format) {
      return moment.utc(date).format(format);
    }
  },
  data() {
    return {
      // originPublicKey: null,
      destinationPublicKey: null,
      privateKey: null,

      divSelected: 'nav',
      sortAsc: true,
      sortAsc2: true,
      sendSuccessful: false,
      currMbox: 'All',
      mailboxes: ['All', 'Inbox', 'Sent', 'Flagged'],//, 'Drafts', 'Junk'],
      selectedId: '',
      message: '',
      subject: '',
      recipient: null,
      showModal: false,
      messages: [],
      messagesSent: [],
      messagesReceived: [],
      people: [],
      thread: '',
      receiver: '',

      numFlagged: undefined,
      isLoading: false,
    }
  },
  async mounted() {
    this.isLoading = true;
    await this.getMessagesSent();
    await this.getMessagesReceived();
    await this.getUniquePeople();
    this.numFlagged = this.messages.filter((item) => {
      return item.flagged === true; }).length;
    this.isLoading = false;

    this.$refs.mbox[0].focus();

    if (this.$route.query.email) {
        this.recipient = this.$route.query.email;
        this.showModal = true;
    } else if (this.$route.query.user) {
        this.recipient = this.$route.query.user;
        this.showModal = true;
    }
  },
  methods: {
    async getUniquePeople() {
      this.people.push(this.$store.getters.loggedInUserId);
      const query = `query {
        findAuthors(
          authorIds: [${this.people.map(x => `"` + x + `"`)}]
        ) {
          _id
          profileImage
          firstName
          lastName
          email
          userName
        }
      }`;
      return axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
        this.people = response.data.data.findAuthors;
      }).catch(error => {
        console.log(error);
      });
    },
    person(id) {
      return this.people.find( ({ _id }) => _id === id );
    },
    async flagMessage(id, value) {
      const query = `mutation {
        messageUpdateById(
          _id: "${id}"
          record: { flagged: ${value} }
        ) {
          recordId
        }
      }`;
      try {
        await axios.post(process.env.VUE_APP_API || apiUrl, { query });
      } catch (error) {
        console.log(error);
      }
    },
    async handleWrite() {
      let query, encryptedText, recipientId;
      try {
        query = `query { userOne(filter: {
          userName: "${this.recipient}"
        }) {  recipientId: _id
              key: publicKey }
        }`;
        let response = await axios.post(process.env.VUE_APP_API || apiUrl, { query });
        recipientId = response.data.data.userOne.recipientId;
        this.destinationPublicKey = response.data.data.userOne.key;

        encryptedText = await this.$store.dispatch(
          'getWebWorkerResponse', {
            messageType: 'encrypt', messagePayload: [ this.message, this.destinationPublicKey ]
          });

        query  = 'mutation { messageCreateOne( record: {\n';
        query += `text: """${encryptedText}""",\n`;
        query += `subject: """${this.subject}""",\n`;
        query += `createdAt: "${new Date()}",\n`;
        query += `authorId: "${this.$store.getters.loggedInUserId}",\n`;
        query += `recipientId: "${recipientId}"\n`;
        query += '} ) { recordId } }';

        await axios.post(process.env.VUE_APP_API || apiUrl, { query });
        this.sendSuccessful = true;
      } catch (error) {
        console.log(error);
        console.log(query);
      }
    },
    async getMessagesSent() {
      let query = `query {
        findFriendsPost(id: "${this.$store.getters.loggedInUserId}", type: "email-sent") {
          _id,
          text,
          subject,
          createdAt,
          talkerId: recipientId
          recipientId
          authorId
          flagged
        }
      }`;
      return axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
        this.messagesSent = response.data.data.findFriendsPost;

        // decrypt
        this.messagesSent.forEach(async (item) => {

          query = `query {
            userById(_id: "${item.recipientId}") {
              publicKey
              privateKey
            }
          }`;
          const res = await axios.post(process.env.VUE_APP_API || apiUrl, { query });
          this.privateKey = res.data.data.userById.privateKey;

          item.text = await this.$store.dispatch(
            'getWebWorkerResponse', {
              messageType: 'decrypt', messagePayload: [ item.text, this.privateKey ]
            });
        });

        this.messages = response.data.data.findFriendsPost;
        this.people = this.messagesSent.map(a => a.recipientId).
          filter((value, index, self) => self.indexOf(value) === index);
      }).catch(error => {
        console.log(error);
      });
    },
    async getMessagesReceived() {
      let query = `query {
        userById(_id: "${this.$store.getters.loggedInUserId}") {
          publicKey
          privateKey
        }
      }`;
      const res = await axios.post(process.env.VUE_APP_API || apiUrl, { query });
      this.privateKey = res.data.data.userById.privateKey;

      query = `query {
        findFriendsPost(id: "${this.$store.getters.loggedInUserId}", type: "email-received") {
          _id,
          text,
          subject,
          createdAt,
          talkerId: authorId
          recipientId
          authorId
          flagged
        }
      }`;
      return axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
        this.messagesReceived = response.data.data.findFriendsPost;

        // decrypt
        this.messagesReceived.forEach(async (item) => {
          item.text = await this.$store.dispatch(
            'getWebWorkerResponse', {
              messageType: 'decrypt', messagePayload: [ item.text, this.privateKey ]
            });
        });

        this.messages = this.messages.concat(response.data.data.findFriendsPost);
        this.people = this.people.concat(this.messagesReceived.map(a => a.authorId).
          filter((value, index, self) => self.indexOf(value) === index));
      }).catch(error => {
        console.log(error);
      });
    },
  },
  computed: {
    isMobile: function() {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
      const l = 640; // px
      return vw < l || vh < l;
    },
    threadsFiltered: function() {
      let t = [];
      if (this.currMbox === 'Inbox')
        t = this.messagesReceived.slice();
      else if (this.currMbox === 'Sent')
        t = this.messagesSent.slice();
      else if (this.currMbox === 'Flagged')
        t = this.messages.filter((item) => {
          return item.flagged === true;
        });
      else
        t = this.messages.slice().sort((a, b) => {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        });
      return t.sort((a, b) => {
        let td = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        return this.sortAsc ? td : -td;
      });
    },
    messagesFiltered: function() {
      return this.threadsFiltered.filter((item) => {
        return item.subject === this.thread;
      }).sort((a, b) => {
        let td = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        return this.sortAsc2 ? td : -td;
      });
    }
  }
}
</script>
