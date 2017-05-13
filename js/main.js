requirejs.config({
    baseUrl: 'js'
});

requirejs(["vendor/vue","vendor/vue-router", "home", "images"],
(Vue, VueRouter, Home, Images) => {
"use strict";

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        { path:'/', component:Home },
        { path:'/images', component:Images }
    ],
    mode:"history"
});

new Vue({
    router : router
}).$mount('#app');

});
