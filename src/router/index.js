import Vue from 'vue';
import VueRouter from 'vue-router';
import Today from '../views/Today.vue';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'Today',
        component: Today
    },
    {
        path: '/date',
        name: 'Date',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Date.vue')
    },
    {
        path: '/timeline',
        name: 'Timeline',
        component: () => import(/* webpackChunkName: "timeline" */ '../views/Timeline.vue')
    },
    {
        path: '/history',
        name: 'History',
        component: () => import(/* webpackChunkName: "history" */ '../views/History.vue')
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router;
//# sourceMappingURL=index.js.map