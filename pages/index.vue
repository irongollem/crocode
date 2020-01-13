<template>
  <page>
    <container class="block__first">
      <img src="img/logo.svg" class="logo" alt="Crocode logo" />
      <article class="hero">
        <h1 class="title">
          Good development,
          <br />Beter experience.
        </h1>
        <section>
          <p>
            As a developer, leader, designer I know creating good products is more than just
            developing the specs.
          </p>
          <p>Together with the client I make sure I deliver beyond the initial expectation.</p>
        </section>
      </article>
    </container>
  </page>
</template>

<script>
import Container from '~/components/container'
import Page from '~/components/page'

export default {
  components: {
    Container,
    Page
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

<style lang='scss' scoped>
.deploy-button {
  margin-top: 1rem;
}
.block {
  &__first {
    color: $white;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('/img/gaetano-cessati-YOX8ZMTo7hk-unsplash.jpg?nf_resize=fit&w=1600');
    background-size: cover;
    background-position: center 20%;
  }
}
.logo {
  height: 400px;
  margin: 1em;
}
.hero {
  .title {
    color: $white;
    margin-bottom: 1em;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4em 4em 4em 2em;
}
</style>
