import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import $ from 'jquery'
import home from './components/home.vue'
import khlist from './components/khmk/khlist.vue'
import khgl from './components/khmk/khgl.vue'
import dxfs from './components/khmk/dxfs.vue'
import wjld from './components/yymk/wjld.vue'
import yjld from './components/yymk/yjld.vue'
import lsly from './components/yymk/lsly.vue'
import ssjk from './components/yymk/ssjk.vue'
import hwtj from './components/tjmk/hwtj.vue'
import ywtj from './components/tjmk/ywtj.vue'
import pjtj from './components/tjmk/pjtj.vue'
import yhgl from './components/xtsz/yhgl.vue'
import xtcs from './components/xtsz/xtcs.vue'
import zdgl from './components/xtsz/zdgl.vue'
import bmgl from './components/xtsz/bmgl.vue'
import cdgl from './components/xtsz/cdgl.vue'
import jsgl from './components/xtsz/jsgl.vue'
import zsk from './components/others/zsk.vue'
import jstx from './components/others/jstx.vue'



Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: "/",
            redirect: '/home'
        }, {
            path: "/home",
            name: 'home',
            component: home
        },
        {
            path: '/khlist',
            name: 'khlist',
            component: khlist
        },
        {
            path: '/khgl',
            name: 'khgl',
            component: khgl
        },
        {
            path: '/wjld',
            name: 'wjld',
            component: wjld
        },
        {
            path: '/yjld',
            name: 'yjld',
            component: yjld
        },
        {
            path: '/lsly',
            name: 'lsly',
            component: lsly
        },
        {
            path: '/hwtj',
            name: 'hwtj',
            component: hwtj
        },
        {
            path: '/ywtj',
            name: 'ywtj',
            component: ywtj
        },
        {
            path: '/pjtj',
            name: 'pjtj',
            component: pjtj
        },
        {
            path: '/ssjk',
            name: 'ssjk',
            component: ssjk
        },
        {
            path: '/yhgl',
            name: 'yhgl',
            component: yhgl
        },
        {
            path: '/bmgl',
            name: 'bmgl',
            component: bmgl
        },
        {
            path: '/xtcs',
            name: 'xtcs',
            component: xtcs
        },
        {
            path: '/zsk',
            name: 'zsk',
            component: zsk
        },
        {
            path: '/jstx',
            name: 'jstx',
            component: jstx
        },
        {
            path: '/dxfs',
            name: 'dxfs',
            component: dxfs
        },
        {
            path: '/jsgl',
            name: 'jsgl',
            component: jsgl
        },
        {
            path: '/cdgl',
            name: 'cdgl',
            component: cdgl
        },
        {
            path: '/zdgl',
            name: 'zdgl',
            component: zdgl
        }
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})


