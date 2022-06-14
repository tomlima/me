<template>
  <header class="c-header js-header">
    <nav
      class="c-nav l-container l-flex u-justify-content-between u-align-items-center"
    >
      <NuxtLink class="c-nav__logo l-flex  u-align-items-center" to="/">
        <b class="u-is-important  ">Tom</b>Lima
      </NuxtLink>
      <div class="c-nav__menu js-nav__menu">
        <ul class="c-nav__list l-flex u-align-items-center">
          <li class="c-nav__item" link-for="submenu1">
            <a class="c-nav__link has-submenu" href="javascript:void(0)">
              Desenvolvimento de software <ArrowDown
            /></a>
            <div class="c-nav__submenu" id="submenu1">
              <div class="c-nav__submenu-wrapper l-flex">
                <NuxtLink
                  v-for="(category, index) in categories"
                  :key="index"
                  :to="category.attributes.slug"
                  >{{ category.attributes.name }}</NuxtLink
                >
              </div>
            </div>
          </li>
        </ul>

        <div @click="closeMenu()" class="c-nav__close">
          <i class="bx bx-x"></i>
        </div>
      </div>

      <div @click="openMenu()" class="c-nav__toggle">
        <i class="bx bx-grid-alt"></i>
      </div>
    </nav>
  </header>
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
  },
  mounted() {
    this.handleSubmenu()
    this.handleHeader()
  },
  methods: {
    openMenu() {
      const navMenu = document.querySelector('.js-nav__menu')
      navMenu.classList.add('is-open')
    },
    closeMenu() {
      const navMenu = document.querySelector('.js-nav__menu')
      navMenu.classList.remove('is-open')
    },
    handleSubmenu() {
      const menuItems = document.querySelectorAll('.c-nav__item')
      Array.from(menuItems).forEach(item => {
        const submenu = document.getElementById(item.getAttribute('link-for'))
        const events = ['mouseenter', 'click', 'mouseleave']
        const changeClass = this.changeClass

        events.forEach(function(event) {
          item.addEventListener(event, function() {
            if (event == 'mouseenter' || 'click') {
              changeClass(submenu, 'is-visible', 100)
              changeClass(submenu, 'is-open', 200)
              return
            }
            changeClass(submenu, 'is-open', 200)
            changeClass(submenu, 'is-visible', 500)
          })
        })
      })
    },
    changeClass(element, className, time) {
      setTimeout(() => {
        element.classList.toggle(className)
      }, time)
    },
    handleHeader() {
      window.addEventListener('scroll', function() {
        let header = document.querySelector('header')
        if (window.pageYOffset > 50) {
          header.classList.add('is-sticky')
        } else {
          header.classList.remove('is-sticky')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.c-header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: $secondary-color;
  transition: all 1s ease;
  &.is-sticky {
    box-shadow: 0 1px 4px hsla(0, 4%, 15%, 0.1);
    background-color: #08191f;
  }
}
.c-nav {
  position: sticky;
  top: 0;
  height: 70px;
  &__item {
    position: relative;
    text-align: center;
  }
  &__submenu {
    width: 250px;
    opacity: 0;
    transition: all 0.5s ease;
    display: none;
    left: 0;
    top: 1rem;
    transform: translateX(-30px);
    &.is-open {
      opacity: 1;
      transform: translateX(0px);
    }
    &.is-visible {
      display: flex;
    }
    @media screen and (min-width: $lg-breakpoint) {
      position: absolute;
    }
  }

  &__submenu-wrapper {
    width: 100%;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    align-items: flex-start;
    overflow: hidden;
    background-color: $bg-color;
    border-radius: 0 0 10px 10px;
    border-top: 5px solid $primary-color;
    flex-direction: column;
    row-gap: 1rem;
    padding: 2rem;
    margin-top: 2rem;
    a {
      &:hover {
        color: $primary-color;
      }
    }
  }

  &__logo {
    font-family: 'Indie Flower', cursive;
    font-size: 2.5rem;
  }
  &__toggle {
    color: #fff;
    display: inline-flex;
    font-size: 1.25rem;
    cursor: pointer;
  }
  &__list {
    flex-direction: column;
    row-gap: 1.5rem;
  }
  &__link {
    color: $title-color;
    font-weight: 600;
    transition: 0.3s;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
    &:hover {
      opacity: 0.5;
    }
  }
  &__close {
    font-size: 2rem;
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    cursor: pointer;
  }
  @media screen and (min-width: $md-breakpoint) {
    height: 100px;
    column-gap: 3rem;
    &__menu {
      margin-left: auto;
    }
    &__toggle,
    &__close {
      display: none;
    }
    &__list {
      flex-direction: row;
      column-gap: 3rem;
    }
  }
  @media screen and (max-width: $md-breakpoint) {
    &__menu {
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%;
      padding: 4rem 0;
      border-radius: 0 0 1.5rem 1.5rem;
      box-shadow: 0 1px 4px hsla(0, 4%, 15%, 0.1);
      transition: 2s all ease;
      background-color: #fff;
      &.is-open {
        top: 0;
        transition: 0.5s all ease;
      }
    }
  }
}

.o-search {
  font-size: 2rem;
  display: block;
  &:hover {
    color: $primary-color;
  }
}
</style>
