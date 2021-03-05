<template>
<div>
<section class="relative bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">

        </nav>
      </div>

      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">A social site to enrich</span>
            <span class="block text-indigo-600 xl:inline"> your musical culture</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            This is a music database based on volunteering and peer review. You can rate songs and watch the charts realtime.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <button @click="handleStart" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Get started
              </button>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#feat" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
     srcset="https://source.unsplash.com/random/480x320/?music 480w, https://source.unsplash.com/random/800x600/?music 800w"
     sizes="(min-width: 800px) 800px, 100vw"
     alt="poker cards on brown table" src="https://source.unsplash.com/random/800x600/?music">
  </div>
</section>

<section id='feat' class="py-12 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Recommendations</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        A database where you can rate music
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Participate in rating songs, albums, artists, labels, genres and venues on this website.
      </p>
    </div>

    <div class="mt-10">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div class="flex">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <!-- Heroicon name: globe-alt -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              A huge database
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              This music database is fed by volunteers and is peer reviewed ensuring the strongest quality to discover music.
            </dd>
          </div>
        </div>

        <div class="flex">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <!-- Heroicon name: scale -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              A free database
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              The access to the website is completely free. You might stumble upon an ad sometimes or we might get a small fee when you buy music.
            </dd>
          </div>
        </div>

        <div class="flex">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <!-- Heroicon name: lightning-bolt -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              A helpful database
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              Discover the music people or your loved ones like. It's your only place to know what's worth listening to.
            </dd>
          </div>
        </div>

        <div class="flex">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <!-- Heroicon name: annotation -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
          </div>
          <div class="ml-4">
            <dt class="text-lg leading-6 font-medium text-gray-900">
              A social database
            </dt>
            <dd class="mt-2 text-base text-gray-500">
              A social network is included on this website so you can communicate with fellow music lovers. Make friends and maybe more here!
            </dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</section>

<section class="mb-5 py-12 bg-white">
<div class="flex flex-col md:flex-row mx-4 items-center md:items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="divide-y divide-gray-300 md:w-1/2 my-auto">
    <div class=" mb-5 w-full flex flex-col justify-center items-center md:items-start">
      <div class="flex-shrink-0 mb-5">
        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
      </div>
      <div class=" text-center md:text-left ">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Visualize your network easily
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          This is the only social network that lets you see your network drawn by a force-directed algorithm.
          Get to discover all your connections simply and know who you should talk to for your next project.
        </p>
      </div>
      <div class="rounded-md shadow mt-5">
        <button @click="handleStart" class="w-full flex items-center justify-center  border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg py-2 px-3">
          Get started
        </button>
      </div>
    </div>
    <!-- <div class="">
      <p class="mt-4 max-w-2xl text-md text-gray-500 lg:mx-auto">
        "This is the only social network that lets you see your network drawn by a force-directed algorithm."
      </p>
      <div class=" flex items-center rounded-full mt-2">
        <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1613397872515-48d9ad393758?crop=entropy&cs=tinysrgb&fit=facearea&facepad=3.5&fm=jpg&h=500&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500" alt="">
        <span class="ml-3 text-md text-gray-800 font-semibold">
          Remi Cochi, Airline Pilot
        </span>
      </div>
    </div> -->
  </div>
  <div class="md:w-1/2 my-auto">
    <img src="../assets/images/graph.jpg" alt="">
  </div>
</div>
</section>

<section class="m-5 p-12 bg-white flex flex-col md:flex-row">
  <div class="md:w-1/3 mb-8">
    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      Frequently Asked Questions
    </p>
    <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
      Can't find the answer you're looking for?
      Reach out to our <router-link class="text-indigo-700" :to="{ name: 'Contact' }">support</router-link> team.
    </p>
  </div>
  <div class="md:w-2/3 space-y-6">
    <div class="">
      <dt class="text-lg leading-6 font-medium text-gray-900">
        I can't find a song I want to rate. What should I do?
      </dt>
      <dd class="mt-2 text-base text-gray-500">
        On the <em>Music</em> page, you can add a song using the <em>Add</em> button.
        Then a panel appears where you can edit the details of the song. Hit save and you're done!
      </dd>
    </div>
    <div class="">
      <dt class="text-lg leading-6 font-medium text-gray-900">
        I have a huge music library. Should I add each song one by one?
      </dt>
      <dd class="mt-2 text-base text-gray-500">
        Of course not. On the <em>Music</em> page, you can add a library using the <em>Import</em> button.
        Then you have to select the XML file containing your iTunes library. Import for Spotify will be done in the near future.
      </dd>
    </div>
    <div class="">
      <dt class="text-lg leading-6 font-medium text-gray-900">
        I can't find my iTunes XML library file! How come?
      </dt>
      <dd class="mt-2 text-base text-gray-500">
        By default, iTunes does not generate an XML file. In <em>iTunes</em>, you have to go to the <em>Advanced</em> tab,
        and check the box <em>Share iTunes library XML</em>. Normally, the file should be located here:
        <em>(home folder)/Music/iTunes</em>.
      </dd>
    </div>
    <div class="">
      <dt class="text-lg leading-6 font-medium text-gray-900">
        How do I send a message to someone without knowing their username?
      </dt>
      <dd class="mt-2 text-base text-gray-500">
        On the <em>Members</em> page, you can check the profile of someone by clicking on the <em>Profile</em> button.
        Then you can click on the <em>Message</em> button, and you will be taken to the <em>Messages</em> page.
      </dd>
    </div>
  </div>
</section>

<section class=" text-center">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">Want news and updates?</span>
      <span class="block text-purple-600">Sign up for our weekly newsletter.</span>
    </h2>
    <div class="mt-8 lex lg:mt-0 lg:flex-shrink-0 lg:w-1/2 mr-5 sm:mr-0">
      <form action="https://formspree.io/f/xjvplbll" method="POST" class="md:flex md:justify-end">
        <div class="max-w-sm mx-auto md:mx-0 p-1 pr-0 flex flex-col sm:flex-row">
          <input @input="$gtag.event('subscribe_started', { method: 'splash' })" id='email' required name="_replyto" type="email" placeholder="yourmail@example.com" class="m-2 w-full sm:w-2/3 lg:w-90  appearance-none rounded-md shadow-md p-3 text-grey-dark mr-2 focus:outline-none border border-transparent" />
          <button @click="$gtag.event('subscribe_finished', { method: 'splash' })" value="Send" type="submit" class="m-2 w-full sm:w-1/3 lg:w-40 bg-purple-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-purple-700 p-3">
            Notify Me
          </button>
        </div>
        <label class="text-transparent" for="email">Email</label>
      </form>
    </div>
  </div>
</section>

</div>
</template>

<script type="text/javascript">
import { bus } from '../main'

export default {
  name: 'Home',
  methods: {
    handleStart: function() {
      bus.$emit('start');
    }
  }
}
</script>
