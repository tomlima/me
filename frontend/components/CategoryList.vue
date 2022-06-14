<template>
  <section class="l-flex u-flex-d-c u-row-gap-30">
    <h2 class="u-is-important">Categorias</h2>
    <ul class="l-flex u-flex-d-c" v-if="categories.length > 0">
      <li v-for="(category, index) in categories" :key="index">
        <NuxtLink :to="`/${category.attributes.slug}`">{{
          category.attributes.name
        }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: []
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
   * Get all categories
   */
  async fetch() {
    await this.$axios('categories')
      .then(res => (this.categories = res.data.data))
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
ul {
  row-gap: 1rem;
  li {
    a {
      &:hover {
        color: $primary-color;
      }
    }
  }
}
</style>
