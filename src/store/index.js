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
    locale: 'en',
    username: null,
    theme: 'light',
  },
  mutations: {

    async initialiseStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      }
      if (localStorage.getItem('cartTotal')) {
        state.cartTotal = parseFloat(localStorage.getItem('cartTotal'))
      }
      if (localStorage.getItem('theme')) {
        state.theme = localStorage.getItem('theme');
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
    setUser(state, user_id ) {
      state.user_id = user_id;
    },    
    setToken(state, token) {
      state.token = token;
    },
    setUsername(state, username) {
      state.username = username; 
    },
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    changeLocale(state, locale) {
      state.locale = locale;
    },
    setTheme(state, theme) {
      state.theme = theme;
      localStorage.setItem('theme', theme);
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
      commit('setUsername', null);
      location.reload();
    },
    changeLocale({ commit }, locale) {
      commit('changeLocale', locale);
    },
    toggleTheme({ commit, state }) {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      commit('setTheme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
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
