<template>
  <div>
    <div class="c-notfound">
      <div class="l-container">
        <div class="c-notfound__wrapper">
          <span>404</span>
          <h1>Página não encontrada</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}
</script>

<style lang="scss" scoped>
.starry-sky {
  display: block;
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.c-notfound {
  margin-top: 10%;
  width: 100%;
  height: 100vh;
  &__wrapper {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: 700;
      font-size: 40px;
    }

    span {
      font-size: 10rem;
      color: #fff;
    }
  }
}

/* change to alternating star opacities */
.all-stars {
  animation: blinkblink 7s linear infinite;
}

@keyframes blinkblink {
  50% {
    opacity: 0.1;
  }
}
</style>
