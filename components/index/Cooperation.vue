<script lang="ts" setup>
const list = [
  '/img/index/publisher/1.jpg',
  '/img/index/publisher/2.jpg',
  '/img/index/publisher/3.jpg',
  '/img/index/publisher/4.jpg',
  '/img/index/publisher/5.jpg',
  '/img/index/publisher/6.jpg',
  '/img/index/publisher/7.jpg',
  '/img/index/publisher/8.jpg',
  '/img/index/publisher/9.jpg',
  '/img/index/publisher/10.jpg',
  '/img/index/publisher/11.jpg',
  '/img/index/publisher/12.jpg',
  '/img/index/publisher/13.jpg',
  '/img/index/publisher/14.jpg',
  '/img/index/publisher/15.jpg',
  '/img/index/publisher/16.jpg',
  '/img/index/publisher/17.jpg',
  '/img/index/publisher/18.jpg',
  '/img/index/publisher/19.jpg',
  '/img/index/publisher/20.jpg',
  '/img/index/publisher/21.jpg',
  '/img/index/publisher/22.jpg',
  '/img/index/publisher/23.jpg',
  '/img/index/publisher/24.jpg',
  '/img/index/publisher/25.jpg',
  '/img/index/publisher/26.jpg',
  '/img/index/publisher/27.jpg',
  '/img/index/publisher/28.jpg',
  '/img/index/publisher/29.jpg',
  '/img/index/publisher/30.jpg',
]
</script>

<template>
  <div class=" mt-60 relative -mb-70 desktop:-mb-10 flex flex-col items-center">
    <div class="mobile-under-bg-yellow-five text-42 desktop:text-20 desktop:mb-15 text-[#0000ff] px-10 font-OPPOSans-H">
      合作出版社
    </div>
    <!-- 移动端 -->
    <div class="desktop:hidden w-600 flex flex-wrap mt-30 mb-60">
      <img
        v-for="(item, index) in list" :key="index" :src="item"
        class="cooperation-logo w-125 h-125 rounded-10 shadow-input mb-32 ml-32"
      >
    </div>
    <!-- PC端 -->
    <div class="hidden desktop:flex w-594 flex-wrap relative z-20 justify-between mt-15 mb-50">
      <img
        v-for="(item, index) in list" :key="index" :src="item"
        class="pc-cooperation-logo w-62 h-62 rounded-15 shadow-input mb-10 ml-10"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cooperation-logo {
    &:nth-child(4n+1) {
        margin-left: 0 !important;
    }
}

.pc-cooperation-logo {
    &:nth-child(9) {
        @apply ml-30;
    }

    &:nth-child(15) {
        @apply mr-30;
    }

    &:nth-child(24) {
        @apply ml-30;
    }

    &:nth-child(30) {
        @apply mr-30;
    }
}
</style>
