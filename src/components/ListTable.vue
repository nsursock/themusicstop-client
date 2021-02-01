<template>
<div>

  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto mt-5">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th v-for="(col, index) in table.cols" :key="index"
                scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div class="flex items-center space-x-3">
                    <button class="font-medium text-gray-500 uppercase tracking-wider" @click="sort(col.toLowerCase())">{{ col }}</button>
                    <svg class="text-gray-500 fill-current" v-bind:class="currentSort === col.toLowerCase() && currentSortDir === 'desc' ? 'block' : 'hidden'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10V8h-2v4H8l4 4 4-4h-3z"/></svg>
                    <svg class="text-gray-500 fill-current" v-bind:class="currentSort === col.toLowerCase() && currentSortDir === 'asc' ? 'block' : 'hidden'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z"/></svg>
                  </div>
                </th>
                <!-- <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th> -->
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">

              <tr v-for="(row, index) in items" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img v-if="row.profileImage" class="h-10 w-10 rounded-full" :src="row.profileImage" alt="">
                      <svg v-else class="h-8 w-8 rounded-full text-gray-300 border-gray-300 border-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ row.firstName }} {{ row.lastName }}
                      </div>
                      <div class="text-sm text-gray-500 flex items-center">
                        <svg class="mr-1 w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                        </svg>
                        <button @click="$parent.viewProfile(row._id)">View profile</button>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ row.birthday | getAge }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ row.gender }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ row.city }}</div>
                  <div class="text-sm text-gray-500">{{ row.country }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                    {{ row.website }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate">
                  <span v-if="row.about">{{ row.about.substring(0, 50) }}...</span>
                </td>
                <!-- <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td> -->
              </tr>

              <!-- More items... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mx-8 my-3">
    <div class="flex-1 flex justify-between sm:hidden">
      <button @click="prevPage" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
        Prev
      </button>
      <button @click="nextPage" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
        Next
      </button>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between space-x-4">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ 1 + (currentPage - 1) * pageSize }}</span>
          to
          <span class="font-medium">{{ Math.min(currentPage * pageSize, numRecords) }}</span>
          of
          <span class="font-medium">{{ numRecords }}</span>
          results
        </p>
      </div>
      <div>
        <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
          <button @click="prevBar"
          class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: chevron-left -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
          <button @click="currentPage = page" v-for="(page, index) in (range(barSize * (currentBar - 1) + 1, Math.min(barSize * currentBar, numPages)))" :key="index"
          :class="currentPage === page ? 'z-10 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' : 'bg-white text-gray-700 hover:bg-gray-50'"
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium">
            {{ page }}
          </button>
          <button @click="nextBar"
          class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Next</span>
            <!-- Heroicon name: chevron-right -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
        </nav>
      </div>

      <div>
        <label for="filter" class="hidden text-sm font-medium text-gray-700">Parameters</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm">

            </span>
          </div>
          <input v-model="filterKey" @input="currentPage = 1" type="text" name="filter" id="filter" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Filter">
          <div class="absolute inset-y-0 right-0 flex items-center">
            <label for="size" class="sr-only">Size</label>
            <select v-model="pageSize" id="size" name="size" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
              <option>10</option>
              <option>25</option>
              <option>100</option>
            </select>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
//import moment from 'moment'

export default {
  props: ['table'],
  name: 'ListTable',
  components : {
  },
  mounted() {
  },
  data() {
    return {
      numRecordsArranged: 0,
      currentSort: 'id',
      currentSortDir: 'asc',
      pageSize: 10,
      currentPage: 1,
      //barSize: 5,
      currentBar: 1,
      filterKey: ''
    }
  },
  methods: {
    range: function(min, max) {
      var array = [], j = 0;
      for(var i = min; i <= max; i++){
        array[j] = i;
        j++;
      }
      return array;
    },
    nextBar: function() {
      if ((this.currentBar * this.barSize) < this.numPages) this.currentBar++;
    },
    prevBar: function() {
      if (this.currentBar > 1) this.currentBar--;
    },
    nextPage: function() {
      if ((this.currentPage * this.pageSize) < this.numRecordsArranged) this.currentPage++;
    },
    prevPage: function() {
      if (this.currentPage > 1) this.currentPage--;
    },
    sort: function(s) {
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = s;
    },
    arrangedItems: function() {
      let tmp = this.$props.table.rows.filter(item =>
        item.firstName.includes(this.filterKey) ||
        item.lastName.includes(this.filterKey)  ||
        item.email.includes(this.filterKey) ||
        item.city.includes(this.filterKey) ||
        item.country.includes(this.filterKey)
        //item.about.includes(this.filterKey) ||
        //item.website.includes(this.filterKey)
      ).sort((a, b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        let field1 = a[this.currentSort], field2 = b[this.currentSort];
        if (this.currentSort === 'name') {
          field1 = a['lastName'] + a['firstName'] + a['email'],
          field2 = b['lastName'] + b['firstName'] + b['email'];
        } else if (this.currentSort === 'location') {
          field1 = a['country'] + a['city'],
          field2 = b['country'] + b['city'];
        } else if (this.currentSort === 'age') {
          field1 = a['birthday'],
          field2 = b['birthday'];
        }
        if(field1 < field2) return -1 * modifier;
        if(field1 > field2) return 1 * modifier;
        return 0;
      });

      // needed to display the bar correctly
      this.numRecordsArranged = tmp.length;
      return tmp;
    }
  },
  computed: {
    barSize() {
      return screen.width > 640 && screen.width < 1024 ? 5 : 10;
    },
    numRecords() {
      return this.numRecordsArranged;
    },
    numPages() {
      return Math.floor(this.numRecords / this.pageSize) +
        (this.numRecords % this.pageSize === 0 ? 0 : 1);
    },
    items: function() {
      return this.arrangedItems().filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
        return false;
      });
    },
  },
  filters: {
    // formatDate(date, format) {
    //   return moment.utc(date).format(format);
    // },
    getAge(birthday) {
      var dob = new Date(birthday);
      var diff = Date.now() - dob.getTime();
      var age = new Date(diff); // miliseconds from epoch
      return Math.abs(age.getUTCFullYear() - 1970);
    }
  },
}
</script>
