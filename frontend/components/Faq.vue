<template>
  <section class="u-section" id="faq">
    <div class="l-container">
      <h2 class="u-section__title">Frequently Questions</h2>
      <ul class="c-faq">
        <li>
          <input type="checkbox" checked />
          <i></i>
          <h3>When is Christmas?</h3>
          <div class="c-faq__wrapper">
            <p>
              Christmas takes place on December 25th.
            </p>
          </div>
        </li>
        <li>
          <input type="checkbox" checked />
          <i></i>
          <h3>What does Christmas represent?</h3>
          <div class="c-faq__wrapper">
            <p>
              The rebirth of the Jesus.
            </p>
          </div>
        </li>
        <li>
          <input type="checkbox" checked />
          <i></i>
          <h3>What is the best Christmas movie?</h3>
          <div class="c-faq__wrapper">
            <p>
              The Grinch.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.c-faq {
  list-style: none;
  perspective: 900;
  padding: 0;
  margin: 0;
  li {
    position: relative;
    padding: 0;
    margin: 0;
    padding: 17px 0 17px 0;
    i {
      position: absolute;
      transform: translate(-6px, 0);
      margin-top: 8px;
      padding-right: 20px;
      right: 0;
      &:before,
      &:after {
        content: '';
        position: absolute;
        background-color: $title-color;
        width: 3px;
        height: 9px;
        transition: all 0.25s ease-in-out;
      }
      &:before {
        transform: translate(-2px, 0) rotate(45deg);
      }
      &:after {
        transform: translate(2px, 0) rotate(-45deg);
      }
    }
    input[type='checkbox'] {
      position: absolute;
      cursor: pointer;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      top: 0;
      right: 0;
      &:checked ~ .c-faq__wrapper {
        margin-top: 0;
        max-height: 0;
        opacity: 0;
        transform: translate(0, 50%);
      }
      &:checked ~ i:before {
        transform: translate(2px, 0) rotate(45deg);
      }
      &:checked ~ i:after {
        transform: translate(-2px, 0) rotate(-45deg);
      }
    }
  }
  &__wrapper {
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    max-height: 800px;
    opacity: 1;
    transform: translate(0, 0);
    margin-top: 14px;
    z-index: 2;
    max-width: 80%;
    transition: all 0.25s ease-in-out;

    p {
      padding-left: 20px;
      margin-bottom: 0;
    }
  }
}
</style>
