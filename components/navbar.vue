<template>
    <nav>
           <nuxt-link to="/"><img src='/img/crocode-icon.png' style="height: 60px;"></nuxt-link> 
            <nuxt-link
              v-for="(link, i) in navlinks"
              :key='i'
              class="nav-item"
              :to="link.to">{{link.name}}</nuxt-link>
        </nav>
</template>

<script>
export default {
    data () {
        return {
            navlinks:[
                {
                    name: 'Home',
                    to: '/'
                },
                // {
                //     name: 'Work',
                //     to:'/work'
                // },
                // {
                //     name: 'Blog',
                //     to: '/blog'
                // },
                {
                    name: 'Contact',
                    to: '/contact'
                }
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
nav {
    list-style-type: none;
    margin: 0 5%;
    padding: 0;
    display: flex;
}
.nav-item {
    display: inline-block;
    vertical-align: middle;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 60px;
    padding: 0 1em;
    &:hover {
        background-color: rgba($black, .1);
        border-radius: .25em;
    }
}
</style>