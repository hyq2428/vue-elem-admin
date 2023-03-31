import { createStore } from "vuex";

import { createApp } from "vue";
import App from '.././App.vue';
import Vuex from 'vuex';
createApp(App).use(Vuex)

// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

// import Vue from 'vue';
// import Vuex, { createStore } from 'vuex';

import app from './modules/app';

export default createStore({
  modules:{
    app
  }
})