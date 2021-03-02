<template lang="html">
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto ">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Cover</span>
                </th>
                <th v-for="(col, index) in table.cols" :key="index" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {{ col }}
                </th>
                <th v-show="$store.getters.loggedIn" scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
                <th v-show="$store.getters.loggedIn" scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Rate</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(row, index) in table.rows" :key="index" class="even:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" :src="row.artworkUrl" alt="">
                    </div>
                    <!-- <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        Jane Cooper
                      </div>
                      <div class="text-sm text-gray-500">
                        jane.cooper@example.com
                      </div>
                    </div> -->
                  </div>
                </td>
                <!-- <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                  <div class="text-sm text-gray-500">Optimization</div>
                </td> -->
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ row.title }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ row.artist }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ row.album }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ row.genre }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <!-- {{ timeMin(row.time) }}:{{ timeSec(row.time) }} -->
                  {{ row.time }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ row.trackNumber }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ row.releaseDate | formatDate('YYYY') }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ row.label }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                    {{ row.rating }}
                  </span>
                </td>
                <td v-show="$store.getters.loggedIn" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button v-on:click="handleToggle(row._id)" class="text-indigo-600 hover:text-indigo-900">Edit</button>
                </td>
                <td v-show="$store.getters.loggedIn" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button v-on:click="handleRating(row._id)" class="text-indigo-600 hover:text-indigo-900">Rate</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { bus } from '@/main'

export default {
  props: ['table'],
  filters: {
    formatDate(date, format) {
      return moment.utc(date).format(format);
    }
  },
  methods: {
    handleToggle: function(id) {
      bus.$emit('toggleSlideOver', id);
    },
    handleRating: function(id) {
      bus.$emit('toggleRatingModal', id);
    }
  }
}
</script>
