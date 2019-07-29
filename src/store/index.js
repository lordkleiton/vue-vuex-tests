import Vue from 'vue'
import Vuex from 'vuex'
import films from './modules/films'
import pokemons from './modules/pokemons'

//declarando a store
Vue.use(Vuex)

//exportando a store
export default new Vuex.Store({
    modules: {
        films,
        pokemons,
    }
})