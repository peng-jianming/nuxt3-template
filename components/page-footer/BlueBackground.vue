<template>
  <!-- 移动端 -->
  <div class="desktop:hidden pt-270 overflow-hidden">
    <div class="pb-25 pt-110 w-750 h-388 mobile-footer-blue-bg   relative">
      <img src="/img/footer/boat.gif" class="absolute w-200 left-330 -top-110">
      <img src="/img/footer/footer-cloud-left.gif" class="absolute w-400 -left-150 -top-220">
      <img src="/img/footer/footer-cloud-right.gif" class="absolute w-300 -right-200 -top-220">
      <slot />
    </div>
  </div>
  <!-- pc端 -->
  <div class="hidden desktop:block pt-220 overflow-hidden">
    <div class=" footer-blue-bg w-750 h-268 pb-20 pt-105 relative">
      <img src="/img/footer/boat.gif" class="absolute w-200 left-320 -top-110">
      <img src="/img/footer/footer-cloud-left.gif" class="absolute w-400 -left-150 -top-220">
      <img src="/img/footer/footer-cloud-right.gif" class="absolute w-300 -right-150 -top-220">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.footer-blue-bg {
  background: url('/img/footer/page-footer-blue.gif') no-repeat center top;
  background-size: cover;
}

.mobile-footer-blue-bg {
  background: url('/img/footer/mobile-page-footer-blue.gif') no-repeat center bottom;
  background-size: cover;
}
</style>
