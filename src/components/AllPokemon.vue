<template>
    <div>
        <div v-if="isReady">
            <p v-for="(pokemon, index) in allPokemon.results" :key="index">
                {{ pokemon.name }}, 
                <a :href="pokemon.url">link</a>
                <router-link :to="{ name: 'pokemon', params: { name: pokemon.name, url: pokemon.url }}">clique aqui</router-link>
            </p>
        </div>
        <div v-else>
            <p>Favor aguardar os resultados.</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'AllPokemon',
    data(){
        return {
            isReady: false
        }
    },
    computed: {
        ...mapGetters(['allPokemon', 'currentPokemon'])
    },
    created(){
        this.fetchAllPokemon().then(() => {
            this.isReady = true
            console.log(this.allPokemon)
        })
    },
    methods: {
        ...mapActions(['fetchAllPokemon', 'fetchPokemon']),
    },
}
</script>

<style>

</style>
