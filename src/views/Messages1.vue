<template lang="html">
  <div class="">

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

    <div>
      <section class="md:w-1/4 bg-gray-100 p-6 overflow-y-auto h-screen w-screen">
        <nav>
          <h2 class="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Mailboxes</h2>
          <button ref="mbox" type="button" name="button" class="w-full text-gray-700 px-3 py-1 text-sm font-medium hover:bg-gray-200 rounded-lg flex items-center justify-between"
          v-bind:class="currMbox === 'All' ? 'outline-none bg-gray-200 border-transparent' : ''" @click="divSelected = 'conv', currMbox = 'All'">
            <span class="inline-flex items-center">
              <svg class="text-gray-500 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="ml-1">All</span>
            </span>
            <span class="inline-block w-9 text-center py-1 text-xs font-semibold text-purple-700 bg-purple-300 rounded-full">{{messages.length}}</span>
          </button>
          <button ref="mbox" type="button" name="button" class="w-full text-gray-700 px-3 py-1 text-sm font-medium hover:bg-gray-200 rounded-lg flex items-center justify-between"
          v-bind:class="currMbox === 'Inbox' ? 'outline-none bg-gray-200 border-transparent' : ''" @click="divSelected = 'conv', currMbox = 'Inbox'">
            <span class="inline-flex items-center">
              <svg class="text-gray-500 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <span class="ml-1">Inbox</span>
            </span>
            <span class="inline-block w-9 text-center py-1 text-xs font-semibold text-purple-700 bg-purple-300 rounded-full">{{messages.length}}</span>
          </button>
        </nav>
      </section>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import { apiUrl } from '@/env.json'
import moment from 'moment'

export default {
  filters: {
    formatDate(date, format) {
      return moment.utc(date).format(format);
    }
  },
  data() {
    return {
      divSelected: 'nav',
      sortAsc: true,
      sortAsc2: true,
      sendSuccessful: false,
      currMbox: 'All',
//      mailboxes: ['All', 'Inbox', 'Sent', 'Flagged'],//, 'Drafts', 'Junk'],
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

      numFlagged: undefined
    }
  },
  async mounted() {
    await this.getMessagesSent();
    await this.getMessagesReceived();
    await this.getUniquePeople();
    this.$refs.mbox[0].focus();

    this.numFlagged = this.messages.filter((item) => {
      return item.flagged === true; }).length;

    if (this.$route.query.email) {
        this.recipient = this.$route.query.email;
        this.showModal = true;
    }
  },
  methods: {
    async getUniquePeople() {
      this.people.push(this.$store.getters.loggedInUserId);
      //const unique = this.people.filter((value, index, self) => self.indexOf(value) === index);
      const query = `query {
        findAuthors(
          authorIds: [${this.people.map(x => `"` + x + `"`)}]
        ) {
          _id
          profileImage
          firstName
          lastName
          email
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
      let query, recipientId;

      query = `query { userOne(filter: {
          email: "${this.recipient}"
        }) { _id }
      }`;
      try {
        let response = await axios.post(process.env.VUE_APP_API || apiUrl, { query });
        recipientId = response.data.data.userOne._id;
      } catch (error) {
        console.log(error);
      }

      query  = 'mutation { messageCreateOne( record: {\n';
      query += `text: """${this.message}""",\n`;
      query += `subject: """${this.subject}""",\n`;
      query += `publishedAt: "${new Date()}",\n`;
      query += `authorId: "${this.$store.getters.loggedInUserId}",\n`;
      query += `recipientId: "${recipientId}"\n`;
      query += '} ) { recordId } }';

      try {
        await axios.post(process.env.VUE_APP_API || apiUrl, { query });
        this.sendSuccessful = true;
      } catch (error) {
        console.log(error);
      }
    },
    async getMessagesSent() {
      const query = `
      query {
        findFriendsPost(id: "${this.$store.getters.loggedInUserId}", type: "email-sent") {
          _id,
          text,
          subject,
          publishedAt,
          talkerId: recipientId
          recipientId
          authorId
          flagged
        }
      }`;
      return axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
        this.messagesSent = response.data.data.findFriendsPost;
        this.messages = response.data.data.findFriendsPost;
        this.people = [...new Set(this.messagesSent.map(a => a.recipientId))];
      }).catch(error => {
        console.log(error);
      });
    },
    async getMessagesReceived() {
      const query = `
      query {
        findFriendsPost(id: "${this.$store.getters.loggedInUserId}", type: "email-received") {
          _id,
          text,
          subject,
          publishedAt,
          talkerId: authorId
          recipientId
          authorId
          flagged
        }
      }`;
      return axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
        this.messagesReceived = response.data.data.findFriendsPost;
        this.messages = this.messages.concat(response.data.data.findFriendsPost);
        this.people = this.people.concat([...new Set(this.messagesReceived.map(a => a.authorId))]);
      }).catch(error => {
        console.log(error);
      });
    },
  },
  computed: {
    isMobile: function() {
      return screen.width <= 768;
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
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        });
      return t.sort((a, b) => {
        let td = new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        return this.sortAsc ? td : -td;
      });
    },
    messagesFiltered: function() {
      return this.threadsFiltered.filter((item) => {
        return item.subject === this.thread;
      }).sort((a, b) => {
        let td = new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        return this.sortAsc2 ? td : -td;
      });
    }
  }
}
</script>
