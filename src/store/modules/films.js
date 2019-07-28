import axios from 'axios'

const state = {
    films: []
}

const getters = {
    allFilms: (state) => state.films
}

const actions = {
    async fetchFilms({ commit }){
        const res = await axios.get('https://ghibliapi.herokuapp.com/films')
        commit('setFilms', res.data)
    }
}

const mutations = {
    setFilms: (state, films) => (state.films = films)
}

export default {
    state,
    getters,
    actions,
    mutations,
}