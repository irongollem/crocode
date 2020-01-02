<template>
  <div>
    <ul v-for="(blogPost, index) in blogPosts" :key="index">
      <nuxt-link :to="`blog/${blogPost.slug}`">{{blogPost.title}}</nuxt-link>
      <p>{{blogPost.description}}</p>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['blogPosts'])
  }
}
</script>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">