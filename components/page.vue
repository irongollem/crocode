<template>
  <div class='page'>
      <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.page {
    width: 100%;
    min-height: calc(100vh - 175px -2em);
}
</style>