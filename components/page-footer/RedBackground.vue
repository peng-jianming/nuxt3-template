<template>
  <!-- 移动端 -->
  <div class="desktop:hidden pt-270 overflow-hidden">
    <div class=" pb-35 pt-160 w-750 h-454 mobile-footer-red-bg   relative">
      <img class="absolute w-200 left-330 -top-70 z-10" src="/img/footer/fox.gif">
      <img class="absolute w-400 -left-130 -top-270 z-10" src="/img/footer/footer-red-cloud-left.gif">
      <img class="absolute w-400 -right-140 -top-140 z-10" src="/img/footer/footer-red-cloud-right.gif">
      <slot />
    </div>
  </div>
  <!-- pc端 -->
  <div class="hidden desktop:block pt-270 overflow-hidden">
    <div class=" footer-red-bg w-750 h-297 pb-20 pt-130 relative">
      <img class="absolute w-200 left-330 -top-70 z-10" src="/img/footer/fox.gif">
      <img class="absolute w-400 -left-130 -top-270 z-10" src="/img/footer/footer-red-cloud-left.gif">
      <img class="absolute w-400 -right-140 -top-140 z-10" src="/img/footer/footer-red-cloud-right.gif">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.footer-red-bg {
    background: url('/img/footer/page-footer-red.gif') no-repeat center top;
    background-size: cover;
}

.mobile-footer-red-bg {
    background: url('/img/footer/mobile-page-footer-red.gif') no-repeat center bottom;
    background-size: cover;
}
</style>
