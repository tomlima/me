<template>
  <div>
    <div v-if="post.length > 0" class="c-post">
      <div class="l-container">
        <div class="c-wrapper l-grid">
          <div class="l-flex u-flex-d-c u-row-gap-60">
            <h2 class="u-is-important">{{ post[0].attributes.title }}</h2>
            <div
              class="c-post__thumb"
              :style="
                `background-image:url(${this.$config.ImagePathUlr +
                  post[0].attributes.image.data.attributes.url})`
              "
            ></div>
            <div
              id="editor"
              v-html="$md.render(post[0].attributes.content)"
            ></div>
          </div>
          <HomeSidebar />
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: []
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
      `articles?[filters][slug][$eq]=${this.$route.params.post}&populate=*`
    )
      .then(res => (this.post = res.data.data))
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
  h2 {
    font-size: 2rem;
  }
  @media screen and (min-width: $lg-breakpoint) {
    column-gap: 150px;
    grid-template-columns: 1.5fr 1fr;
    h2 {
      font-size: 2.8rem;
    }
  }
}
.c-post {
  margin-top: 4rem;
  &__thumb {
    border-radius: 40px;
    position: relative;
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  &__overlay {
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.767);
  }
}
</style>
