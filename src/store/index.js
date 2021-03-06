import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { apiUrl } from '@/env.json'
import jwt_decode from "jwt-decode"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rememberMe: true,
    cryptWorker: new Worker('crypto-worker.js'),
    token: localStorage.getItem('access_token') || null,
//    isProduction: process.env.VUE_APP_API !== undefined, // #todo not the right way works tho
  },
  getters : {
    loggedIn(state) {
      return state.token !== null;
    },
    loggedInUserId(state) {
      return jwt_decode(state.token).id;
    },
    loggedInUserEmail(state) {
      return jwt_decode(state.token).email;
    },
    remember(state) {
      return state.rememberMe;
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    },
    remember(state, bool) {
      state.rememberMe = bool;
    }
  },
  actions: {
    /** Post a message to the web worker and return a promise that will resolve with the response.  */
    getWebWorkerResponse (context, data) {
      return new Promise((resolve) => {
        // Generate a random message id to identify the corresponding event callback
        const messageId = Math.floor(Math.random() * 100000)

        // Post the message to the webworker
        context.state.cryptWorker.postMessage([data.messageType, messageId].concat(data.messagePayload))

        // Create a handler for the webworker message event
        const handler = function (e) {
          // Only handle messages with the matching message id
          if (e.data[0] === messageId) {
            // Remove the event listener once the listener has been called.
            e.currentTarget.removeEventListener(e.type, handler)

            // Resolve the promise with the message payload.
            resolve(e.data[1])
          }
        }

        // Assign the handler to the webworker 'message' event.
        context.state.cryptWorker.addEventListener('message', handler)
      })
    },
    checkCurrentPassword(context, credentials) {
      return new Promise((resolve, reject) => {
        const query = `
          mutation {
            login(record: {
              email: "${credentials.email}",
              password: "${credentials.password}"
            })
          }`;
        axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
          if (response.data.errors) {
            reject(response);
          } else
            resolve(response);
        })
        .catch(error => {
          reject(error);
        });
      });
    },
    destroyToken(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve) => {
          localStorage.removeItem('access_token');
          context.commit('destroyToken');
          resolve('Logout OK');
        });
      }
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        const query = `
          mutation {
            login(
              username: "${credentials.username}",
              password: "${credentials.password}"
            )
          }`;
        axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
          const token = response.data.data.login;
          localStorage.setItem('access_token', token);
          context.commit('retrieveToken', token);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
      });
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        const query = `
          mutation {
            signup(
              record: {
                firstName: "${data.firstname}"
                lastName: "${data.lastname}"
                email: "${data.email}"
                userName: "${data.username}"
                password: "${data.password}"
              }
            )
          }`;
        axios.post(process.env.VUE_APP_API || apiUrl, { query }).then(response => {
          const token = response.data.data.signup;
          localStorage.setItem('access_token', token);
          context.commit('retrieveToken', token);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
      });
    },
    rememberMe(context, data) {
      context.commit('remember', data.remember);
    }
  }
})
