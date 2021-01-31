import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    Markers: [
      {
        coordinates: [51.420296, 35.732379],
        msg: "hello",
        colore: "blue",
        z: 8
      },
      { coordinates: [51.42, 35.732379], msg: "hello22", colore: "red", z: 17 }
    ],
    home: "Ahvaz"
  },
  mutations: {},
  actions: {},
  modules: {}
});
