<template>
  <div class="mt-3 sm:w-1/2 ">

    <div v-show="showProgress" class="relative pt-1">
      <div class="flex mb-2 items-center justify-between">
        <div>
          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
            Uploading
          </span>
        </div>
        <div class="text-right">
          <span class="text-xs font-semibold inline-block text-purple-600">
            {{ progress }}%
          </span>
        </div>
      </div>
      <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
        <div :style="'width: ' + progress + '%'" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
      </div>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">
        <span v-if="filesSelected !== 1">{{ info.type }} photo</span>
        <span v-else>{{ file.name }}</span>
      </label>
      <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div v-if="results && results.secure_url">
          <img :src="results.secure_url" :alt="results.public_id" />
        </div>
        <div v-else class="space-y-1 text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="flex text-sm text-gray-600">
            <label class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
              <span>Upload a file</span>
              <input @change="if (handleFileChange($event)) upload()" name="file-upload" type="file" class="sr-only" accept="image/*">
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p class="text-xs text-gray-500">
            PNG, JPG, GIF up to 250KB
          </p>
        </div>
      </div>
      <ErrorMessage v-show="errors.length > 0" :message="errors[0]" />
      <!-- <div>
        <ul v-if="errors.length > 0" class="h-screen">
          <li v-for="(error, index) in errors" :key="index">
            <ErrorMessage :message="error" />
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { cldName, cldPreset } from "@/env.json"
import ErrorMessage from './partials/ErrorMessage.vue'

export default {
  name: "PictureUpload",
  components: {
    ErrorMessage
  },
  props: ['info'],
  mounted() {
    this.cloudName = cldName;
    this.preset = cldPreset;
  },
  data() {

    return {
      results: null,
      errors: [],
      file: null,
      filesSelected: 0,
      cloudName: "",
      preset: "",
      tags: "browser-upload",
      progress: 0,
      showProgress: false,
      fileContents: null,
      formData: null
    };
  },
  methods: {
    // function to handle file info obtained from local
    // file system and set the file state
    handleFileChange: function(event) {
      //console.log("handlefilechange", event.target.files);
      //returns an array of files even though multiple not used
      if (event.target.files[0].size > 250000) {
        this.errors.push('File size should be below 250KB');
        return false;
      }
      this.file = event.target.files[0];
      this.filesSelected = event.target.files.length;
      return true;
    },
    prepareFormData: function() {
      this.formData = new FormData();
      this.formData.append("upload_preset", this.preset);
      this.formData.append("tags", this.tags); // Optional - add tag for image admin in Cloudinary
      this.formData.append("file", this.fileContents);
    },
    // function to handle form submit
    upload: function() {
      //no need to look at selected files if there is no cloudname or preset
      if (this.preset.length < 1 || this.cloudName.length < 1) {
        this.errors.push("You must enter a cloud name and preset to upload");
        return;
      }
      // clear errors
      else {
        this.errors = [];
      }
      //console.log("upload", this.file.name);
      let reader = new FileReader();
      // attach listener to be called when data from file
      reader.addEventListener(
        "load",
        function() {
          this.fileContents = reader.result;
          this.prepareFormData();
          let cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`;
          let requestObj = {
            url: cloudinaryUploadURL,
            method: "POST",
            data: this.formData,
            onUploadProgress: function(progressEvent) {
              //console.log("progress", progressEvent);
              this.progress = Math.round(
                (progressEvent.loaded * 100.0) / progressEvent.total
              );
              //console.log(this.progress);
            //bind "this" to access vue state during callback
            }.bind(this)
          };
          //show progress bar at beginning of post
          this.showProgress = true;
          axios(requestObj)
            .then(response => {
              this.results = response.data;
              //console.log(this.results);
              //console.log("url: ", this.results.secure_url);
              this.$emit('upload', this.results.secure_url);
            })
            .catch(error => {
              this.errors.push(error);
              console.log(this.error);
            })
            .finally(() => {
              setTimeout(
                function() {
                  this.showProgress = false;
                }.bind(this),
                1000
              );
            });
        }.bind(this),
        false
      );
      // call for file read if there is a file
      if (this.file && this.file.name) {
        reader.readAsDataURL(this.file);
      }
    }
  }
};
</script>
