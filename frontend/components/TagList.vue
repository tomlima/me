<template>
  <section class="l-flex u-flex-d-c u-row-gap-30">
    <h2 class="u-is-important">Tags</h2>
    <ul class="l-flex" v-if="tags.length > 0">
      <li v-for="(tag, index) in tags" :key="index">
        <NuxtLink :to="`/tag/${tag.attributes.slug}`">{{
          tag.attributes.name
        }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tags: []
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
   * Get all tags
   */
  async fetch() {
    await this.$axios('tags')
      .then(res => (this.tags = res.data.data))
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
ul {
  column-gap: 1rem;
  li {
    background-color: rgba(0, 220, 130, 0.25);
    border: 1px solid $primary-color;
    padding: 1rem;
    border-radius: 5px;
    &:hover {
      background-color: $secondary-color;
    }
    a {
      color: #fff;
    }
  }
}
</style>
