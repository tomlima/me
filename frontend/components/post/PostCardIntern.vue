<template>
  <article class="c-card" v-if="post">
    <div
      class="c-card__thumb"
      :style="
        `background-image:url(${this.$config.ImagePathUlr +
          post.attributes.image.data.attributes.url})`
      "
    ></div>

    <div class="c-card__content">
      <span>
        <b
          ><NuxtLink :to="post.attributes.category.data.attributes.slug">{{
            post.attributes.category.data.attributes.name
          }}</NuxtLink></b
        >
      </span>
      <NuxtLink
        :to="
          `${post.attributes.category.data.attributes.slug}/${post.attributes.slug}`
        "
        class="c-card__title"
      >
        {{ post.attributes.title }}
      </NuxtLink>
      <a class="c-card__link" href="#"
        >Continue a leitura <i class="bx bx-chevrons-right"></i
      ></a>
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
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: block;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  overflow: hidden;
  transition: all 0.5s ease;
  &:hover {
    transform: translateY(-10px);
  }
  &:last-child {
    border-bottom: none;
  }
  &__thumb {
    height: 200px;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
  &__content {
    padding: 1.5rem;
    h2 {
      display: block;
      margin: 1rem 0;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
      color: $secondary-color;
    }
  }
  &__title {
    color: $secondary-color;
    font-weight: 700;
    font-size: 1.3rem;
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
    display: block;
    b,
    a {
      color: $primary-color;
      font-weight: 700;
    }
  }
}
</style>
