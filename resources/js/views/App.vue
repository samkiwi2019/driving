<template>
    <div>
        <front-layout v-if="!isAdmin"></front-layout>
        <back-layout v-else></back-layout>
    </div>
</template>
<script>
    export default {
        computed: {
            isAdmin:function () {
                return this.$route.path.indexOf('/admin') > -1;
            }
        }
    }
</script>
