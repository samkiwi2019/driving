<template>
    <div>mock</div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "mockTest",
        props:{
            type:{
                type: String,
                default: 'all',
            },
            length:{
                type: Number,
                default: 30,
            }
        },
        methods:{
            ...mapActions({
                getMockItems: "mock/getMockItems"
            })
        },
        created(){
            this.getMockItems({type: this.type, length: this.length})
        }
    }
</script>

<style scoped>

</style>
