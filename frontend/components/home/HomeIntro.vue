<template>
  <section>
    <div class="l-container l-grid c-wrapper">
      <img src="/home.png" alt="intro" data-not-lazy />
      <div class="c-wrapper__content">
        <h1>Olá.</h1>
        <p>Eu sou o Tom.</p>
        <p>
          Atuo como desenvoldedor de software a +5 anos e tenho trabalhado
          atualmente com <b class="u-is-important">PHP</b>,
          <b class="u-is-important">Node.js</b>,
          <b class="u-is-important">Vue.js</b> e
          <b class="u-is-important">Aws</b>. Você pode me seguir no
          <a
            class="u-is-important"
            href="https://github.com/tomlima"
            target="_blank"
            ><b class="u-is-important">Github</b></a
          >
          para saber mais sobre alguns projetos open source que eu publico.
        </p>
        <p>
          Um pouco além da programação eu gosto muito de games, filmes de terror
          trash e música indie.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: #0a1f26;
  padding: 4rem 0;
  @media screen and (min-width: $lg-breakpoint) {
    padding: 6rem 0;
  }
}

.c-wrapper {
  row-gap: 1.5rem;
  img {
    height: 120px;
    width: auto;
    justify-self: center;
  }
  &__content {
    text-align: center;
    h1 {
      font-size: 3rem;
      font-family: 'Rubik', sans-serif;
    }
    p {
      &:first-of-type {
        color: #fff;
        font-size: 2.5rem;
        line-height: 5rem;
        margin-bottom: 0;
      }
    }
    p,
    a {
      font-family: 'Rubik', sans-serif;
      font-size: 1.2rem;
      line-height: 1.8rem;
      margin-bottom: 1rem;
    }
  }
  @media screen and (min-width: $md-breakpoint) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    &__content {
      text-align: initial;
      h1 {
        font-size: 4rem;
      }
    }
  }
  @media screen and (min-width: $lg-breakpoint) {
    column-gap: 3rem;
    img {
      height: 400px;
      width: auto;
    }
    p {
      &:first-of-type {
        color: #fff;
        font-size: 2.5rem;
        line-height: 5rem;
        margin-bottom: 0;
      }
    }
    p,
    a {
      font-family: 'Rubik', sans-serif;
      font-size: 1.3rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
