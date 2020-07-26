<template>
    <mock-test :type="$route.params.id" />
</template>

<script>
    import MockTest from '_c/MockTest'
    export default {
        name: "learn",
        components:{MockTest},
    }
</script>
