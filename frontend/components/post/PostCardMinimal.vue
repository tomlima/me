<template>
  <article class="c-card l-flex u-align-items-center">
    <div
      class="c-card__thumb"
      :style="
        `background-image:url(${this.$config.ImagePathUlr +
          post.attributes.image.data.attributes.url})`
      "
    ></div>
    <div>
      <NuxtLink
        class="c-card__title"
        :to="
          `/${post.attributes.category.data.attributes.slug}/${post.attributes.slug}`
        "
        >{{ post.attributes.title }}</NuxtLink
      >
      <span>
        Publicado <b>24/02/2022</b>
        em
        <b
          ><NuxtLink
            :to="`/${post.attributes.category.data.attributes.slug}`"
            >{{ post.attributes.category.data.attributes.name }}</NuxtLink
          ></b
        >
      </span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.c-card {
  column-gap: 2rem;
  border-bottom: 2px solid rgba(155, 151, 151, 0.205);
  &:last-child {
    border-bottom: none;
  }
  &__thumb {
    flex-shrink: 0;
    border-radius: 10px;
    width: 80px;
    height: 80px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  &__title {
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    &:hover {
      opacity: 0.6;
    }
  }
  &__link {
    display: flex;
    align-items: center;
    column-gap: 5px;
    margin-top: 1rem;
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
  }
  span {
    color: #fff;
    margin-top: 0.5rem;
    display: block;
    b,
    a {
      color: $primary-color;
      font-weight: 700;
    }
  }
}
</style>
