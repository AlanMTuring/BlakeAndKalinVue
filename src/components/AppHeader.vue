<template>
    <nav>
        <ul>
            <li><router-link to="/setlist">Set-List</router-link></li>
            <li><router-link to="/photos">Photos</router-link></li>
            <li><router-link to="/" class="home-button">Blake and Kalin Music</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </nav>
</template>


<script>
 export default {
     name: 'AppHeader'
 }
</script>



<style scoped>
nav {
    display: inline-block;
    width: 100%;
    height: 150px;
    background-color: #FFF;
    text-align: center;
    position: fixed;
    top: 0;
    box-shadow: 0 4px 4px -2px rgba(0,0,0,.2);
}

nav ul {
    padding: 15px 0;
    margin: 0;
}

nav li {
    margin-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    display: inline-block;
    text-decoration: none;
}

nav a {
    color: #000;
    text-decoration: none;
    padding: 20px;
    font-family: 'Great Vibes', cursive;
    font-size: 30px;
}

nav a:hover, nav .active a {
    border-bottom: 5px solid #000;
}

nav .home-button {
    color: #000;
    font-family: 'Great Vibes', cursive;
    font-size: 60px;
    display: inline;
    padding-bottom: 0;
}

</style>