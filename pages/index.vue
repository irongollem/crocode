<template>
  <page>
    <container class="block" v-for="(item, i) in content" :style="item.style" :key="i">
      <section class="half left" v-if="item.left" v-html="$md.render(item.left)" :class="{'spaced': item.center}"></section>
      <section class="half spaced" v-if="item.center" v-html="$md.render(item.center)"></section>
      <section class="half right" v-if="item.right" v-html="$md.render(item.right)" :class="{'spaced': item.center}"></section>
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
    & h1, & a {
      color: $white;
    }
    & a:hover {
      color: grey;
    }
  }
  &:nth-child(3n) {
    & .half {
      &.left { flex: 3; }
      &.right { flex: 2; }
    }
  }

  & .half {
    display: flex;
    justify-content: center;
    padding: 2em;
    flex-wrap: wrap;
    align-items: center;

    &.left { 
      & h1, & h2 {
        width: 100%;
        text-align: center;
      }
      & img, & p {
        flex-grow: 1;
        min-width: 30%;
        text-align: center;
      }
      flex: 2; 
    }
    &.right {
      flex: 3;  
      flex-direction: column;
    }
    &.spaced {
      flex-direction: column;
      flex: 1;
      justify-content: space-evenly;
      align-items: center;
      & h1, & h2, & img, & p {
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
