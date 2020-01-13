<template>
  <page>
    <container
      class="block"
      v-for="(item, i) in content"
      :style="item.style"
      :key="i">
      <img 
        :src="item.icon"
        class="logo"
        :alt="item.iconAlt"
        :v-if="item.icon"
      />
      <article class="hero" v-html="$md.render(item.body)"></article>
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
    & h1  {
      color: $white;   
    }
  }
}
.logo {
  padding: 1em;
  flex: 2;
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 3;
}
</style>
