import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from './store';
import notFound from './components/not-found';
import roomsEdit from './components/rooms-edit'
const exampleLazyLoading = () => import('./components/example-lazy-loading');

function init() {
    new Vue({
        el: '#block_groupstats',
        store,
        router,
    });
}

export { init };
