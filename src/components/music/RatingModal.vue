<template>
<div class="fixed z-10 inset-0 overflow-y-auto">
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
    <div v-on:click="$emit('toggleRatingModal')" class="fixed inset-0 transition-opacity" aria-hidden="true">
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
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 sm:mx-0 sm:h-10 sm:w-10">
            <!-- Heroicon name: outline/exclamation -->
            <!-- <svg class="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg> -->
            <svg class="h-6 w-6 text-purple-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0H24V24H0z"/><path d="M9 7.539L15 21.539 18.659 13 23 13 23 11 17.341 11 15 16.461 9 2.461 5.341 11 1 11 1 13 6.659 13z"/>
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Rate the music
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Are you sure you want to rate this music? The data will contribute to the global score. You can modify your rating when you want.
              </p>
            </div>
            <div class="">
              <!-- <label for="rating" class="block text-sm font-medium text-gray-700">Rating</label> -->
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm">
                    #
                  </span>
                </div>
                <input v-model="rating100" type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Between 0 and 100">
                <div class="absolute inset-y-0 right-0 flex items-center mr-3">
                  <svg v-for="(star, index) in 5" :key="index" :class="star <= ratingStar ? 'text-purple-700' : 'text-gray-300'" class="h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <!-- <label for="ratingStar" class="sr-only">Rating</label>
                  <select v-model="ratingStar" id="ratingStar" name="ratingStar" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                    <option>0</option>
                  </select> -->
                </div>
              </div>
              <span class="text-xs text-red-600">{{ errorMessage }}</span>
            </div>
            <div class="">
              <label for="review" class="sr-only">Review</label>
              <textarea v-model="review" id="review" name="review" rows="5" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder=""></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button @click="saveRating" :disabled="rating100 < 0 || rating100 > 100" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm">
          Rate
        </button>
        <button v-on:click="$emit('toggleRatingModal')" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { apiUrl } from '@/env.json'
import axios from 'axios'

export default {
  watch: {
    rating100: function(newRating) {
      this.errorMessage = '';
      if (newRating == 0)
        this.ratingStar = 0;
      else if (newRating <= 20)
        this.ratingStar = 1;
      else if (newRating <= 40)
        this.ratingStar = 2;
      else if (newRating <= 60)
        this.ratingStar = 3;
      else if (newRating <= 80)
        this.ratingStar = 4;
      else if (newRating <= 100)
        this.ratingStar = 5;
      else
        this.errorMessage = 'Rating must be between 0 and 100.'
      this.rating100 = Math.round(this.rating100);
    }
  },
  methods: {
    async saveRating() {

      // save history
      let query = `mutation {
        ratingHistCreateOne(
          record: {
            songId: "${this.songId}"
            userId: "${this.$store.getters.loggedInUserId}"
            rating: ${this.rating100}
            review: """${this.review}"""
          }
        ) {
          recordId
        }
      }`;
      await axios.post(process.env.VUE_APP_API || apiUrl, { query });

      // latest rating
      query = `query {
        ratingOne(filter: {
          songId: "${this.songId}"
          userId: "${this.$store.getters.loggedInUserId}"
        }) {
          rating
        }
      }`;
      let res = await axios.post(process.env.VUE_APP_API || apiUrl, { query });
      let isAlreadyRated = res.data.data.ratingOne !== null;

      if (isAlreadyRated) {
        query = `mutation {
          ratingUpdateOne(
            filter: {
              songId: "${this.songId}"
              userId: "${this.$store.getters.loggedInUserId}"
            }
            record: {
              rating: ${this.rating100}
              review: """${this.review}"""
            }
          ) {
            recordId
          }
        }`;
        await axios.post(process.env.VUE_APP_API || apiUrl, { query });

      } else {
        query = `mutation {
          ratingCreateOne(
            record: {
              songId: "${this.songId}"
              userId: "${this.$store.getters.loggedInUserId}"
              rating: ${this.rating100}
              review: """${this.review}"""
            }
          ) {
            recordId
          }
        }`;
        await axios.post(process.env.VUE_APP_API || apiUrl, { query });
      }

      this.$emit('toggleFeedbackModal');
      this.$emit('toggleRatingModal');
    },
  },
  props: ['songId'],
  data() {
    return {
      review: null,
      ratingStar: null,
      rating100: null,
      errorMessage: '',
    }
  }
}
</script>
