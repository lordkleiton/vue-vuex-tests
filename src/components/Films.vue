<template>
    <div>
        <div v-if="isReady">
            <p v-for="film in allFilms" :key="film.id">{{ film.title }}</p>
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
        ...mapGetters(['allFilms'])
    },
    created(){
        this.isReady = true
        this.fetchFilms()
    },
    methods: {
        ...mapActions(['fetchFilms']),
    },
}
</script>

<style>

</style>
