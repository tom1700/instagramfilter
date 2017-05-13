requirejs.config({
    baseUrl: 'js'
});

requirejs(["vendor/vue","vendor/vue-router", "Home", "Images"],
(Vue, VueRouter, Home, Images) => {
"use strict";

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        { path:'/', component:Home },
        { path:'/images', component:Images }
    ]
});

new Vue({
    router : router
}).$mount('#app');

});
