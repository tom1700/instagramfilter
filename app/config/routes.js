import error from '../components/error.vue';
import home from "../components/home.vue";
import images from "../components/images.vue";

export default [

    {
        path:'*',
        name: 'error',
        component: error
    },

    {
        path:'/',
        name: 'home',
        component: home
    },

    {
        path: '/images',
        name: 'images',
        component: images
    }

];