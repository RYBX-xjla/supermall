import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/views/home/Home')
    },
    {
        path: '/category',
        component: () => import('@/views/category/Category')
    },
    {
        path: '/cart',
        component: () => import('@/views/cart/Cart')
    },
    {
        path: '/me',
        component: () => import('@/views/me/Me')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router