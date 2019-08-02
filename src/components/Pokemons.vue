<template>
    <div>
        <div v-if="isReady">
            <p v-for="(pokemon, index) in allPokemon.results" :key="index">{{ pokemon.name }}, <a :href="pokemon.url">link</a></p>
        </div>
        <div v-else>
            <p>Favor aguardar os resultados.</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Films',
    data(){
        return {
            isReady: false
        }
    },
    computed: {
        ...mapGetters(['allPokemon'])
    },
    created(){
        this.fetchAllPokemon().then(() => {
            this.isReady = true
        })
        console.log(this.$route)
    },
    methods: {
        ...mapActions(['fetchAllPokemon']),
    },
}
</script>

<style>

</style>
