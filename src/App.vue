<template>
    <div id="app">
        <pokemons/>
    </div>
</template>

<script>
import Films from './components/Films.vue'
import Pokemons from './components/Pokemons.vue'

export default {
    name: 'app',
    components: {
        Films,
        Pokemons,
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
