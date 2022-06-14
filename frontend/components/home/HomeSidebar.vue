<template>
  <aside v-if="posts.length > 0" class="l-flex u-flex-d-c u-row-gap-60">
    <div class="l-flex u-flex-d-c u-row-gap-30">
      <h2 class="u-is-important">Em destaque</h2>
      <div v-for="(post, index) in posts" :key="index">
        <PostCardMinimal :post="post" />
      </div>
    </div>
    <CategoryList />
    <TagList />
  </aside>
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
aside {
  padding: 0px 30px;
  border-left: 2px solid rgba(155, 151, 151, 0.205);
}
</style>
