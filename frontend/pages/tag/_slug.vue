<template>
  <div>
    <section class="u-section">
      <div class="l-container">
        <h1>#{{ this.$route.params.slug }}</h1>
        <div class="l-grid c-wrapper">
          <div>
            <div v-if="posts.length > 0" class="l-flex c-wrapper__posts">
              <div
                class="c-wrapper__column"
                v-for="(post, index) in posts"
                :key="index"
              >
                <PostCardIntern v-if="post" :post="post" />
              </div>
            </div>
            <Loader v-else />
          </div>
          <HomeSidebar />
        </div>
      </div>
    </section>
    <TheFooter />
  </div>
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
    await this.$axios(
      `articles?[filters][tag][slug][$eq]=${this.$route.params.slug}&populate=*`
    )
      .then(res => {
        if (res.data.data.length > 0) {
          this.posts = res.data.data
        } else {
          return this.$nuxt.error({
            statusCode: 404,
            message: 'Página nao encontrada'
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-transform: capitalize;
  border-left: 3px solid $primary-color;
  padding: 0 2rem;
}
.c-wrapper {
  margin-top: 30px;
  grid-template-columns: 1fr;
  row-gap: 50px;
  &__column {
    width: 100%;
  }
  &__posts {
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 2rem;
  }
  @media screen and (min-width: $lg-breakpoint) {
    column-gap: 150px;
    grid-template-columns: 1.5fr 1fr;
    &__column {
      width: 50%;
    }
    &__posts {
      flex-wrap: nowrap;
    }
  }
}
</style>
