const mutations = {
  increment(state) {
    state.counter++
  },
  cachePosts(state, payload) {
    state.posts.push(payload)
  }
}

export default mutations
