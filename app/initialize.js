import Vue from 'vue';
import 'babel-polyfill';
import 'lib/tracking';
import "lib/face.js";
import "lib/eye.js";
import "lib/mouth.js";
import "vueify/lib/insert-css";
import store from './state/store';
import VueRouter from 'vue-router';
import routes from './config/routes';
import PouchDB from "pouchdb";


Vue.use(VueRouter);

Vue.use({
    install: function(Vue, options) {
        Vue.prototype.$db = new PouchDB("auth");
    }
});

const environment = process.env.NODE_ENV;

Vue.config.debug = (environment === 'development');

Vue.config.devtools = (environment === 'development');

let router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    router,
    store,
    render (h) {
        return h('router-view');
    }
}).$mount('#content');
