<script lang="ts" setup>
const pageConfig = {
  title: '品牌视频',
  desc: '小彼恩点读阅听一体机为爱品质升级<span class="hidden desktop:inline-block">，</span> <br class="desktop:hidden"/>与你一起陪伴孩子成长的每一刻',
}
</script>

<template>
  <!-- 移动端 -->
  <div class="desktop:hidden mt-90">
    <div class="text-[#0000FF] mx-auto text-42 mobile-under-bg-light-green-four px-10 w-190 font-OPPOSans-H">
      {{ pageConfig.title }}
    </div>
    <div class="w-656 h-369 mx-auto mt-25 relative">
      <video-player
        src="/img/about/about.mp4"
        class="about-video-player w-full h-full rounded-20  overflow-hidden" loop :controls="false" poster="/img/about/about-poster.png"
      />
      <img class="w-92 h-140 absolute -left-45 -top-95" src="/img/about/mobile/video-bg.png">
      <img class="w-125 h-105 absolute -left-40 -bottom-35" src="/img/about/mobile/fox.png">
    </div>
    <div class="text-25 text-[#666] text-center mx-auto mt-15" v-html="pageConfig.desc" />
  </div>
  <!-- pc端 -->
  <div class="hidden desktop:flex mt-74 flex-col items-center">
    <div class="under-bg-light-green-four text-20 text-[#001CF2] px-7 font-OPPOSans-H">
      {{ pageConfig.title }}
    </div>
    <div class="w-543 h-306 m-auto mt-15 relative p-10 box-content z-10">
      <video-player
        src="/img/about/about.mp4"
        class="about-video-player w-full h-full rounded-10  overflow-hidden" loop :controls="false" poster="/img/about/about-poster.png"
      />
      <img class="w-74 h-118 absolute -left-43 -top-2" src="/img/about/video-bg.png">
      <img class="w-103 h-88 absolute -left-25 -bottom-29" src="/img/about/fox.png">
    </div>
    <div class="text-10 text-[#666] text-center" v-html="pageConfig.desc" />
  </div>
</template>

<style lang="scss">
.about-video-player {
  .video-js {
    @apply w-full h-full;
  }
}
</style>
