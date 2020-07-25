<template>
    <div>mock</div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Mock",
        methods:{
            ...mapActions({
                getMockItems: "mock/getMockItems"
            })
        },
        created(){
            this.getMockItems({type: 'all', length: 50})
        }
    }
</script>

<style scoped>

</style>
