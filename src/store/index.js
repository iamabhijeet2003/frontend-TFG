// frontend/src/store/index.js

import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
/* eslint-disable */
export default createStore({
  state: {
    cart: [],
    cartTotal: 0,
    user: null,
    token: null,
    isAuthenticated: false,
  },
  mutations: {

    async initialiseStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      }
      if (localStorage.getItem('cartTotal')) {
        state.cartTotal = parseFloat(localStorage.getItem('cartTotal'))
      }
      return true;
    },
    addRemoveCart(state, payload) {

      //add or remove item
      payload.toAdd ?
        state.cart.push(payload.product) :
        state.cart = state.cart.filter(function (obj) {
          return obj.id !== payload.product.id;
        });

      //calculating the total
      state.cartTotal = state.cart.reduce((accumulator, object) => {

        return parseFloat(accumulator) + parseFloat(object.price * object.qty);
      }, 0);

      //saving in web storage
      localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    updateCart(state, payload) {
      //update quantity 
      state.cart.find(o => o.id === payload.product.id).qty = payload.product.qty;

      //calculating the total
      state.cartTotal = state.cart.reduce((accumulator, object) => {
        return parseFloat(accumulator) + parseFloat(object.price * object.qty);
      }, 0);

      //saving in web storage
      localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  actions: {
    checkAuthentication({ commit }) {
      const token = localStorage.getItem("token");
      if (token) {
        commit("setAuthentication", true);
      } else {
        commit("setAuthentication", false);
      }
    },
    logout({ commit }) {
      localStorage.removeItem('token'); // Remove token from local storage
      commit('setToken', null); // Clear token in Vuex store
      commit('setAuthentication', false); // Set authentication status to false
      commit('setUser', null); // Clear user data
      location.reload();
    },
    async fetchUserProfile({ commit }) {
      try {
        const response = await fetch('http://localhost:8000/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const userData = await response.json();
        commit('setUser', userData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    },
  },
  modules: {},
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
  plugins: [createPersistedState()],
})
