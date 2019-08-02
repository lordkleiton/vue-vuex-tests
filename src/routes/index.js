import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '../components/Films'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        name: 'home', 
        component: require('../components/AllPokemon.vue').default 
    },
    { 
        path: '/teste', 
        name: 'teste', 
        component: Films 
    },
    {
        path: '/pokemon/:name',
        name: 'pokemon',
        component: require('../components/Pokemon.vue').default
    },
    { 
        path: '*', 
        redirect: '/' 
    },
]

export default new VueRouter({
    routes,
})