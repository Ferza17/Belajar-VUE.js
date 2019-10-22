import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import { actions, getters, mutations } from './modules/value';
Vue.use(Vuex);

export const store =  new Vuex.Store({
    state:{
        counter : 0,
        value : 0,
    },
    getters,
    mutations,
    actions,
    modules:{
        counter
    }
})