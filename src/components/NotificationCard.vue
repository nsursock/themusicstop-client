<template lang="html">
  <div class="fixed bottom-0 left-0 z-50 rounded-lg shadow-lg border border-gray-100 bg-gray-50 flex items-center justify-around p-4 mx-3 my-4 w-11/12 sm:w-2/5 md:w-5/12 lg:w-4/12 xl:w-3/12">
    <div v-if="!details.profileImage" class="">
      <svg class="h-12 w-12 rounded-full object-cover text-gray-300 bg-gray-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </div>
    <img v-else class="object-cover w-12 h-12 rounded-full" :src="details.profileImage" alt="">
    <div class="flex flex-col ml-3 items-start justify-center">
      <span class="text-sm text-gray-800">
        {{ details.firstName }} {{ details.lastName.substring(0,1) }}. ({{ details.city }}, {{ details.country }}) created an account
      </span>
      <span class="text-sm text-gray-500">
        <!-- {{ details.createdAt | formatDate('MMM D, YY') }} at {{ details.createdAt | formatDate('h:mm A') }} -->
        {{ details.createdAt | fromNow }}
      </span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['details'],
  filters: {
    formatDate(date, format) {
      return moment.utc(date).format(format);
    },
    fromNow(date) {
      return moment(date).fromNow();
    }
  }
}
</script>

<style lang="css" scoped>
</style>
