<template>
    <div class="container-main">
        <mock-test :type="$route.params.id" />
    </div>
</template>

<script>
    import MockTest from '_c/MockTest'
    export default {
        name: "learn",
        components:{MockTest},
    }
</script>

<style lang="scss" scoped>
    .container-main{
        padding-top: 64px;
    }
</style>
