<template>
    <div class="container-main">
        <div>
            <div class="header-img" :style="`height: ${height}px`">

            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi distinctio dolore fugit nesciunt
                obcaecati odio. Accusantium ducimus earum fugiat itaque, natus pariatur quisquam quod sequi sit unde
                voluptas voluptatibus?
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        props:['height'],
    }
</script>

<style lang="scss" scoped>
    .container-main {
        height: 200vh;
        .header-img{
            background-image: url("https://www.newzealand.com/assets/Tourism-NZ/Queenstown/img-1536039393-6885-4205-p-DDDFB457-FA17-8DF8-621925CCB0B0967B-2544003__aWxvdmVrZWxseQo_FocalPointCropWzUyOCwxNTM2LDUwLDUwLDc1LCJqcGciLDY1LDIuNV0.jpg");
            background-position: top right;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
</style>
