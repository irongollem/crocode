<template>
  <div class="site">
    <nav-bar/>
    <nuxt class="site__content"/>
     <article id="end-cap">
      <img src="/img/logo.svg"/>
      <section>
        <nuxt-link to="/">Home</nuxt-link>
        <!-- <nuxt-link to="/work">Work</nuxt-link> -->
        <!-- <nuxt-link to="/blog">Blog</nuxt-link> -->
        <nuxt-link to="/contact">Contact</nuxt-link>
      </section>
      <section>
        <a href="https://www.facebook.com/CroCodeBV" target="_blank">Facebook</a>
        <a href="https://www.linkedin.com/company/crocode-bv" target="_blank">LinkedIn</a>
        <a href="https://www.youtube.com/channel/UCRdmCT4x13PZD7askvju2Dw" target="_blank">youtube</a>
      </section>
      <section>
        <p><strong>CroCode B.V.</strong></p>
        <p>Lauwersmeer 34</p>
        <p>2729PK Zoetermeer</p>
        <p>kvk.: 76933067</p>
        <p>btw: NL860845011B01</p>
      </section>
    </article>
  </div>
</template>

<script>
import NavBar from '~/components/navbar'
export default {
  components: { NavBar }
}
</script>

<style lang='scss'>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

a {
  font-weight: bold;
  color: $font;
  text-decoration: none;

  &:hover {
    color: lighten($font, 20%)
  }
}

h1 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: bold;
  font-size: 3.2rem;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: .5em;
}

h2 {
  font-weight: 300;
  font-size: 2rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}


*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  &__content {
    flex: 1;
  }
}

#end-cap {
  margin-top: 2em;
  background: $black;
  color: $white;
  width: 100%;
  height: 175px;
  padding: 0 2em;
  display: flex;
  justify-content: space-between;
  align-content: center;
  &.sticky {
    position: fixed;
    bottom: 0;
  }
  & section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & a {
    color: $white;
    margin-bottom: .5em;
  }
}
</style>
