<template>
    <page>
    <form 
        name="contact" 
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
    >
        <input type="hidden" name="form-name" value="contact" />
        <p>
        <label>
            Your Name:
            <input type="text" name="name" v-model="name" />
        </label>
        </p>
        <p>
        <label>
            Your Email:
            <input type="email" name="email" v-model="email"/>
        </label>
        </p>
        <p>
        <label>
            Message:
            <textarea name="message" v-model="message"></textarea>
        </label>
        </p>
        <p>
        <button type="submit">Send</button>
        </p>
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
        encode (data) {
            return Object.keys(data)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&')
        },
        handleSubmit () {
            const axiosConfig = {
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            axios.post(
                '/',
                this.encode({
                    'form-name': 'contact',
                    ...this.form
                }),
                axiosConfig
            )
            .then(()=> {
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
    data () {
        return  {
            form: {
                name: '',
                email: '',
                message: ''
            }
        }
    }
}
</script>

<style>
</style>