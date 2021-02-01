import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { apiUrl } from '@/env.json'
import jwt_decode from "jwt-decode"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
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
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    }
  },
  actions: {
    checkCurrentPassword(context, credentials) {
      return new Promise((resolve, reject) => {
        const query = `
          mutation {
            login(record: {
              email: "${credentials.email}",
              password: "${credentials.password}"
            })
          }`;
        axios.post(apiUrl, { query }).then(response => {
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
            login(record: {
              email: "${credentials.email}",
              password: "${credentials.password}"
            })
          }`;
        axios.post(apiUrl, { query }).then(response => {
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
                password: "${data.password}"
                birthday: "${data.birthday}"
                gender: "${data.gender}"
                city: "${data.city}"
                country: "${data.country}"
              }
            )
          }`;
        axios.post(apiUrl, { query }).then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
      });
    }
  }
})
