<template>
    <footer>
        <p>&copy; Kalin Nelson | <a href="https://github.com/AlanMTuring/BlakeAndKalinVue" target="_blank">Github Repository</a>
        </p>
    </footer>
</template>

<script>
 export default {
     name: 'AppFooter'
 }
</script>

<style scoped>
footer {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: right;
    background-color: #FFF;
    height: 45px;
}

footer p {
    color: #000;
    margin-right: 20px;
}
</style>
