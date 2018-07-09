<template>
    <div>
        {{ initData }}
    </div>
</template>

<script>
    // import store from '../../store'
    import { mapMutations, mapState, mapActions } from 'vuex'
    export default {
        computed: mapState({
            initData: 'initData'
        }),
        beforeMount () {
            this.getInitData()
        },
        methods: {
            ...mapActions(['getInitData'])
        }
    }
</script>

<style scoped>

</style>