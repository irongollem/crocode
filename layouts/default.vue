<template>
  <div class="container">
    <nav-bar/>
    <nuxt />
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
  color: #526488;
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
</style>
