<template>
    <div id="app">
      <app-header></app-header>
      <router-view/>
      <app-footer></app-footer>
    </div>
</template>

<script>
 import AppHeader from './components/AppHeader.vue'
 import AppFooter from './components/AppFooter.vue'
 export default {
     name: 'App',
     components: { AppHeader, AppFooter}
}
</script>

<style>
body {
    margin: 150px 0 50px 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
}
.container {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
</style>