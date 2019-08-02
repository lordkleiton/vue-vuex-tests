import axios from 'axios'

const state = {
    baseurl: 'https://pokeapi.co/api/v2/',
    allPokemon: {},
    currentPokemon: {}, 
}

const getters = {
    allPokemon: (state) => state.allPokemon,
    currentPokemon: (state) => state.currentPokemon,
}

const actions = {
    async fetchAllPokemon({ commit }){
        const res = await axios.get(state.baseurl + 'pokemon?limit=10000')
        commit('setAllPokemon', res.data)
    },
    async fetchPokemon({ commit }, url){
        const res = await axios.get(url)
        commit('setCurrentPokemon', res.data)
    }
}

const mutations = {
    setAllPokemon: (state, pokemon) => state.allPokemon = pokemon,
    setCurrentPokemon: (state, pokemon) =>  state.currentPokemon = pokemon,
}

export default {
    state,
    getters,
    actions,
    mutations,
}