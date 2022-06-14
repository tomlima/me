<template>
  <section class="u-section">
    <div class="l-container">
      <div class="c-wrapper l-grid">
        <div>
          <div class="l-flex u-flex-d-c u-row-gap-60" v-if="posts.length > 0">
            <h2 class="u-is-important">Ultimos posts</h2>
            <div v-for="(post, index) in posts" :key="index">
              <PostCard :post="post" />
            </div>
          </div>
          <Loader v-else />
        </div>
        <HomeSidebar />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  /**
   * Cache fetch request for 30seconds.
   */
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  /**
   * Get all posts
   */
  async fetch() {
    await this.$axios('articles?populate=*')
      .then(res => (this.posts = res.data.data))
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
.c-wrapper {
  grid-template-columns: 1fr;
  row-gap: 50px;
  @media screen and (min-width: $lg-breakpoint) {
    column-gap: 150px;
    grid-template-columns: 1.5fr 1fr;
  }
}
</style>
