<template>
    <footer>
        <p>&copy; Kalin Nelson</p>
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
