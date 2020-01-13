export const state = () => ({
  blogPosts: [],
  content: []
})

export const mutations = {
  setBlogPosts(state, list) { state.blogPosts = list },
  setFrontPageData(state, list) { state.content = list }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    dispatch('loadBlogPosts')
    dispatch('loadFrontPageData')
  },

  async loadBlogPosts({commit}) {
    const files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    const blogPosts = files.keys().map(key => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    commit('setBlogPosts', blogPosts)
  },

  async loadFrontPageData({commit}) {
    const files = await require.context(
      '~/assets/content/front/',
      false,
      /\.json$/
    )
      const contentBlocks = files.keys().map(key => {
        const res = files (key)
        return res
      })
    commit('setFrontPageData', contentBlocks)
  }
}
