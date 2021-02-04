<template lang="html">
  <div class="flex flex-wrap-reverse justify-center md:mb-4 antialiased">
    <button v-for="(elem, index) in table.rows" :key="index" @click="$parent.viewProfile(elem._id)"
    class="mx-5 my-4 border border-gray-500 rounded-xl">
      <div v-lazy class="relative h-64 w-64 rounded-xl shadow-xl overflow-hidden hidden md:block">
        <img v-if="elem.coverImage && elem.coverImage !== 'null'" :data-src="elem.coverImage" class="h-full w-full object-cover" />
        <img v-else data-src="http://source.unsplash.com/640x480/?landscape" class="h-full w-full object-cover" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div v-lazy class="w-1/2 h-1/2 border-4 border-white rounded-full overflow-hidden">
            <img v-if="elem.profileImage" :data-src="elem.profileImage" class="h-full w-full object-cover" />
            <svg v-else class="text-gray-300 bg-gray-600 rounded-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden sm:max-w-2xl">
        <div class="flex flex-col sm:flex-row md:hidden block">
          <div v-lazy class="sm:flex-shrink-0">
            <img v-if="elem.coverImage" class="h-48 sm:h-full w-full object-cover sm:w-48" :data-src="elem.coverImage" alt="">
            <img v-else class="h-48 sm:h-full w-full object-cover sm:w-48" data-src="http://source.unsplash.com/640x480/?landscape" alt="">
          </div>
          <div class="relative flex items-center justify-center">
            <div v-lazy class="absolute w-36 h-36 border-4 border-white rounded-full overflow-hidden">
              <img v-if="elem.profileImage" :data-src="elem.profileImage" class="h-full w-full object-cover" />
              <svg v-else class="text-gray-300 bg-gray-600 rounded-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <div class="p-8 mt-16 sm:ml-16 sm:mt-0">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {{ elem.birthday | getAge }} • {{ elem.gender }} • {{ elem.city}}, {{ elem.country }}
            </div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {{ elem.firstName }} {{ elem.lastName }}
            </a>
            <p class="mt-2 text-gray-500">
              <span v-if="elem.about">{{ elem.about.substring(0, 180) }}...</span>
              <span v-else>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </p>
          </div>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import LazyLoadDirective from "@/directives/LazyLoad";

export default {
  directives: {
    lazy: LazyLoadDirective
  },
  props: ['table'],
  name: 'ListCard',
  data() {
    return {

    }
  },
  filters: {
    getAge(birthday) {
      var dob = new Date(birthday);
      var diff = Date.now() - dob.getTime();
      var age = new Date(diff); // miliseconds from epoch
      return Math.abs(age.getUTCFullYear() - 1970);
    }
  },
}
</script>
