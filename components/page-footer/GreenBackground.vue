<template>
  <div class="hidden desktop:block footer-green-bg pb-20 pt-150 overflow-hidden relative">
    <img class="absolute w-200 left-270 -top-3  z-10" src="/img/footer/car.gif">
    <slot />
  </div>
  <div class="desktop:hidden pb-35 pt-200 w-750 h-486 mobile-footer-green-bg  overflow-hidden relative">
    <img class="absolute w-200 left-270 top-30  z-10" src="/img/footer/car.gif">
    <slot />
  </div>
</template>

<style scoped>
.footer-green-bg {
    background: url('/img/footer/page-footer-green.gif') no-repeat center top;
    background-size: cover;
}
.mobile-footer-green-bg {
    background: url('/img/footer/mobile-page-footer-green.png') no-repeat center top;
    background-size: cover;
}
</style>
