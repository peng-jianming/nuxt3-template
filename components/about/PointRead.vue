<script lang="ts" setup>
const pageConfig = {
  title: '品质点读',
  desc: [
    {
      title: '正版授权',
      tag: ['国内外知名出版社原版授权', '优质内容符合出版规范', '专业音频研发团队'],
    },
    {
      title: '安全环保',
      tag: ['食用级硅胶材质', '环保油墨印刷', '图文印制清晰', '高清音质精准发音'],
    },
    {
      title: '精品优选',
      tag: ['精选国学启蒙系列', '精选儿歌童谣系列', '精选英文启蒙系列', '精选幼小衔接系列'],
    },
  ],
}
</script>

<template>
  <!-- 移动端 -->
  <div class="desktop:hidden mt-90">
    <div class="text-[#0000FF] mx-auto text-42 mobile-under-bg-yellow-four px-10 w-190 font-OPPOSans-H">
      {{ pageConfig.title }}
    </div>
    <div class="relative">
      <img class="ml-71 mt-55 w-643" src="/img/about/mobile/point-reading-bg.png" style="object-fit: cover;">
      <div class="text-bgc absolute left-200 top-125 text-center">
        <div class="text-34 mb-25 font-OPPOSans-B">
          {{ pageConfig.desc[0].title }}
        </div>
        <div class="text-22 leading-39 font-OPPOSans-M">
          <p v-for="(item, index) in pageConfig.desc[0].tag" :key="index">
            {{ item }}
          </p>
        </div>
      </div>
      <div class="text-bgc absolute left-375 top-500 text-center">
        <div class="text-34 mb-25 font-OPPOSans-B">
          {{ pageConfig.desc[1].title }}
        </div>
        <div class="text-22 leading-39 font-OPPOSans-M">
          <p v-for="(item, index) in pageConfig.desc[1].tag" :key="index">
            {{ item }}
          </p>
        </div>
      </div>
      <div class="text-bgc absolute left-240 bottom-160 text-center">
        <div class="text-34 mb-25 font-OPPOSans-B">
          {{ pageConfig.desc[2].title }}
        </div>
        <div class="text-22 leading-39 font-OPPOSans-M">
          <p v-for="(item, index) in pageConfig.desc[2].tag" :key="index">
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- pc端 -->
  <div class="hidden desktop:flex mt-88 flex-col items-center">
    <div class="under-bg-yellow-four text-20 text-[#001CF2] px-7 font-OPPOSans-H">
      {{ pageConfig.title }}
    </div>
    <div class="point-reading-bg w-575 h-214 m-auto mt-30 relative">
      <div class="text-bgc absolute left-55 top-55 text-center">
        <div class="text-14 mb-8 font-OPPOSans-B">
          {{ pageConfig.desc[0].title }}
        </div>
        <div class="text-9 leading-15 font-OPPOSans-M">
          <p v-for="(item, index) in pageConfig.desc[0].tag" :key="index">
            {{ item }}
          </p>
        </div>
      </div>
      <div class="text-bgc absolute left-250 top-55 text-center">
        <div class="text-14 mb-8 font-OPPOSans-B">
          {{ pageConfig.desc[1].title }}
        </div>
        <div class="text-9 leading-15 font-OPPOSans-M">
          <p v-for="(item, index) in pageConfig.desc[1].tag" :key="index">
            {{ item }}
          </p>
        </div>
      </div>
      <div class="text-bgc absolute right-77 top-55 text-center">
        <div class="text-14 mb-8 font-OPPOSans-B">
          {{ pageConfig.desc[2].title }}
        </div>
        <div class="text-9 leading-15 font-OPPOSans-M">
          <p v-for="(item, index) in pageConfig.desc[2].tag" :key="index">
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.point-reading-bg {
    background: url('/img/about/point-reading-bg.png') no-repeat center top;
    background-size: cover;
}
</style>
