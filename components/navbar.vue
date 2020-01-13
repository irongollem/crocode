<template>
    <ul>
        <li>
            <img src='/img/crocode-icon.png' style="height: 60px;">
        </li>
        <li v-for="(link, i) in navlinks" :key='i'>
            <nuxt-link :to="link.to">{{link.name}}</nuxt-link>
        </li>
    </ul> 
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
                {
                    name: 'Work',
                    to:'/work'
                },
                {
                    name: 'Blog',
                    to: '/blog'
                },
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
ul {
    list-style-type: none;
    margin: 0 5%;
    padding: 0;
}
li {
    display: inline-block;
    vertical-align: middle;
    & a {
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
}
</style>