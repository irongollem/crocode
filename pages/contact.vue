<template>
  <page>
    <form
      name="contact-form"
      method="post"
      class="form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="contact">
    <h1>Contact us</h1>
        <label>
          Your Name
          <input 
            type="text"
            name="name"
            placeholder="Name"
            v-model="form.name"
            required>
        </label>

        <label>
          Your Email
          <input
            type="email"
            name="email"
            required
            placeholder="e-mail"
            v-model="form.email">
        </label>
      
        <label>
          Message
          <textarea
            name="message"
            placeholder="Message..."
            required
            v-model="form.message"></textarea>
        </label>
      
        <button type="submit">Send</button>
    </form>
  </page>
</template>

<script>
import Page from '~/components/page'
import axios from 'axios'

export default {
  components: {
    Page
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      axios
        .post(
          '/',
          this.encode({
            'form-name': 'contact',
            ...this.form
          }),
          axiosConfig
        )
        .then(() => {
          this.$router.push({
            path: '/contact-success'
          })
        })
        .catch(() => {
          this.$router.push({
            path: '/contact-failure'
          })
        })
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 1em;
  background: $black;
  margin: 5em auto;
  @media screen and(min-width: 380px) {
      width: 500px;
  }
  & h1 {
      color: $white;
  }
  & label {
      color: $white;
      width: 85%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
  }
  & input, & textarea {
      margin: .25rem;
      width: 250px;
      border: 1px solid #eee;
      border-left: 3px solid;
      border-radius: 5px;
      transition: border-color .5s ease-out;
      padding: .25rem;
      font-size: 1.5rem;
      resize: vertical;
      &:optional {
          border-left-color: #999;
      }
      &:required {
          border-left-color: palegreen;
      }
      &:invalid {
          border-left-color: salmon;
      }
  }
  & button {
      $button-color: palegreen;
      font-size: 1.5rem;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      background-color: $button-color;
      margin: .25rem;
      outline: none;
      &:hover {
          cursor: pointer;
          background-color: lighten($button-color, 10%);
      }
      &:active {
          background-color: darken($button-color, 40%);
      }

  }
}
</style>