<template>
  <footer
    id="footer"
    class="c-footer l-flex u-justify-content-center u-align-items-center"
  >
    <div class="l-container l-grid">
      <NuxtLink class="c-footer__logo l-flex  u-align-items-center" to="/">
        <b class="u-is-important  ">Tom</b>Lima
      </NuxtLink>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.c-footer {
  width: 100%;
  bottom: 0;
  background-color: $secondary-color;
  height: 70px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  margin-top: 4.5rem;
  &__container {
    background-color: grey;
  }
  &__logo {
    font-family: 'Indie Flower', cursive;
    font-size: 1.5rem;
  }
  @media screen and (min-width: $md-breakpoint) {
    bottom: 0;
    width: 100%;
    left: 0;
    margin-top: 6.5rem;
  }
}
</style>
