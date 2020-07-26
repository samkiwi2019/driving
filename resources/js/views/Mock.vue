<template>
    <mock-test type="all" :length="$route.params.id" />
</template>

<script>
    import MockTest from '_c/MockTest'
    export default {
        name: "mock",
        components:{MockTest},
    }
</script>
