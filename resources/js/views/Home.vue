<template>
    <div class="container-main">
        <header-img focus="top right" content="Enjoy new journey" img="https://www.newzealand.com/assets/Tourism-NZ/Queenstown/img-1536039393-6885-4205-p-DDDFB457-FA17-8DF8-621925CCB0B0967B-2544003__aWxvdmVrZWxseQo_FocalPointCropWzUyOCwxNTM2LDUwLDUwLDc1LCJqcGciLDY1LDIuNV0.jpg"></header-img>
    </div>
</template>

<script>
    import HeaderImg from "_c/HeaderImg";
    export default {
        name: "Home",
        components:{HeaderImg},
    }
</script>

<style lang="scss" scoped>
    .container-main {
        height: 200vh;
    }
</style>
