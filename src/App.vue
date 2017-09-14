<template>
    <div id="app">
        <v-nav></v-nav>
        <v-body></v-body>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import vNav from './components/nav.vue'
    import vBody from './components/body.vue'
    import vFooter from './components/footer.vue'


    export default {
        name: 'app',
        components: {
            vNav,
            vBody,
            vFooter
        },
        created(){
            this.$router.push('/')
        }
    }
</script>

<style>

</style>
