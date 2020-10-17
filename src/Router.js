import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '@/components/pages/guest/Home.vue'
import login from '@/components/pages/guest/Login.vue'
import register from '@/components/pages/guest/Register.vue'
import viewpost from '@/components/pages/guest/ViewPost.vue'

// admin
import admin_home from '@/components/pages/admin/Home.vue'
import admin_viewpost from '@/components/pages/admin/ViewPost.vue'
import create_post from '@/components/pages/admin/CreatePost.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    base: __dirname,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },

    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', name: 'home', component: home, meta: { requireAuth: false } },
        { path: '/login', name: 'login', component: login, meta: { requireAuth: false } },
        { path: '/register', name: 'register', component: register, meta: { requireAuth: false } },
        { path: '/viewpost/:id', name: 'viewpost', component: viewpost, props: true, meta: { requireAuth: false } },

        { path: '/admin-home', name: 'admin_home', component: admin_home, meta: { requireAuth: true } },
        { path: '/admin-newpost', name: 'create_post', component: create_post, meta: { requireAuth: true } },
        { path: '/admin-viewpost/:id', name: 'admin_viewpost', component: admin_viewpost, props: true, meta: { requireAuth: true } },

    ]
})


export default router;