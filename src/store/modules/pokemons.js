import axios from 'axios'

const state = {
    baseurl: 'https://pokeapi.co/api/v2/',
    pokemon: {},
}

const getters = {
    allPokemon: (state) => state.pokemon,
}

const actions = {
    async fetchAllPokemon({ commit }){
        const res = await axios.get(state.baseurl + 'pokemon?limit=10000')
        commit('setPokemons', res.data)
    },
}

const mutations = {
    setPokemons: (state, pokemon) => state.pokemon = pokemon,
}

export default {
    state,
    getters,
    actions,
    mutations,
}