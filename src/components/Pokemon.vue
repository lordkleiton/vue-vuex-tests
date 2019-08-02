<template>
    <div>
        <div v-if="!isReady">
            Favor aguardar
        </div>
        <div v-else>
            {{currentPokemon.name}}
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
            isReady: false,
        }
    },
    computed: {
        ...mapGetters(['currentPokemon'])
    },
    created(){
        this.fetchPokemon(this.$route.params.url).then(() => {
            this.isReady = true
            console.log(this.currentPokemon)
        })
    },
    methods: {
        ...mapActions(['fetchPokemon']),
    },
}
</script>

<style>

</style>
