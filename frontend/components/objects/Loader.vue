<template>
  <div class="placeholder">
    <div class="loader"></div>
    <div class="loader"></div>
    <div class="loader"></div>
  </div>
</template>

<style lang="scss" scoped>
.placeholder {
  width: 40vw;
  height: 12vw;

  background-color: $secondary-color;
  box-shadow: 1px 4px 23px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 3vw 4vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.loader {
  height: 22%;
  background: linear-gradient(
    90deg,
    rgba(210, 210, 210, 0.5) 0%,
    rgba(238, 238, 238, 0.7) 100%
  );
  border-radius: 10px;
  animation: loading 2s infinite;
}

@keyframes loading {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
