<template>
    <div class="header-img"
         :style="`height: ${height}px;  background-image: url(${img}); background-position: ${focus};`">
        <div class="header-img-content text-h3 transition-swing font-weight-bold font-italic" v-text="content"></div>
    </div>
</template>

<script>
    export default {
        name: "HeaderImg",
        props: ['content', 'img', 'focus'],
        computed:{
            height:function(){
               return this.$vuetify.breakpoint.smAndDown ? 360 : 640
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header-img {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;

        &-content {
            padding: 0 20px;
            color: #fff;
            text-shadow: 2px 2px #333333;
        }
    }
</style>
