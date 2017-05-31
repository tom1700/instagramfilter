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

//
// Vue extensions
// Here we tell Vue that we want to add extra functionality to the application.
//

Vue.use(VueRouter);
Vue.use({
    install: function(Vue, options) {
        Vue.prototype.$db = new PouchDB("auth");
    }
});


//
// Enviromnment
//

const environment = process.env.NODE_ENV;

//
// Configure Vue
// Here we will configure Vue based on the environment we are running in.
//

Vue.config.debug = (environment === 'development');
Vue.config.devtools = (environment === 'development');

//
// Router
// Here we will create the router instance.
//

let router = new VueRouter({
    mode: 'history',
    routes: routes
});

//
// Start the application
// Finally, we can start the application.
//

const app = new Vue({
    router,
    store,
    render (h) {
        return h('router-view');
    }
}).$mount('#content');
