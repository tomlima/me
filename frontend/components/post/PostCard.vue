<template>
  <article class="c-card" v-if="post">
    <NuxtLink
      class="c-card__title"
      :to="
        `${post.attributes.category.data.attributes.slug}/${post.attributes.slug}`
      "
      >{{ post.attributes.title }}</NuxtLink
    >
    <span>
      Publicado <b>24/02/2022</b>
      em
      <b
        ><NuxtLink :to="post.attributes.category.data.attributes.slug">{{
          post.attributes.category.data.attributes.name
        }}</NuxtLink></b
      >
    </span>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
      inventore? Id explicabo quae iste minus inventore neque veritatis,
      architecto et dolores soluta numquam corrupti nam officia illo asperiores
      minima fugiat.
    </p>
    <NuxtLink
      class="c-card__link"
      :to="
        `/${post.attributes.category.data.attributes.slug}/${post.attributes.slug}`
      "
      >Continue a leitura <i class="bx bx-chevrons-right"></i
    ></NuxtLink>
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
  border-bottom: 2px solid rgba(155, 151, 151, 0.205);
  &:last-child {
    border-bottom: none;
  }
  &__title {
    color: #fff;
    font-weight: 700;
    font-size: 2rem;
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
    margin: 0.5rem 0 1rem 0;
    display: block;
    b,
    a {
      color: $primary-color;
      font-weight: 700;
    }
  }
}
</style>
