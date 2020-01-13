<template>
  <page>
    <container class="block" v-for="(item, i) in content" :style="item.style" :key="i">
      <article class="half left" v-html="$md.render(item.left)"></article>
      <article class="half right" v-html="$md.render(item.right)"></article>
    </container>
  </page>
</template>

<script>
import Container from '~/components/container'
import Page from '~/components/page'
import { mapState } from 'vuex'

export default {
  components: {
    Container,
    Page
  },
  computed: {
    ...mapState(['content'])
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style lang='scss'>
.block {
  &:nth-child(odd) {
    background-color: $black;
    color: $white;
    & h1 {
      color: $white;
    }
    & .half {
      display: flex;
      flex-direction: column;
      justify-content: center;
      &.left {
      flex: 2;
    }
    &.right {
      flex: 3;
    }
    }
    
  }
}
</style>
