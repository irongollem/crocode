<template>
    <article class='container'>
        <slot/>
    </article>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang='scss' scoped>
.container {
    width: 100%;
    min-height: 300px;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    align-content: space-around;
    @media screen and(min-width: 380px)  {
        width: 90%;
    }
}
</style>