<script lang="ts" setup>
const pageConfig = {
  title: '品牌历程',
  desc: [
    {
      year: '2015',
      event: '小彼恩品牌创立',
    },
    {
      year: '2016',
      event: '小彼恩第一代好饿的毛毛虫™点读笔上市',
    },
    {
      year: '2018',
      event: '<div class="leading-28 desktop:leading-12">小彼恩京东旗舰店上线<br />小彼恩第二代好饿的毛毛虫™点读笔面世</div>',
    },
    {
      year: '2019',
      event: '小彼恩旗舰店荣获天猫母婴玩具行业最佳突破奖',
    },
    {
      year: '2020',
      event: '<div class="-ml-5 desktop:-ml-3">小彼恩第三代好饿的毛毛虫™点读笔（WIFI版）发布</div>',
    },
    {
      year: '2021',
      event: '<div class="leading-28 desktop:leading-12">小彼恩好饿的毛毛虫™点读笔（WIFI版）<br class="desktop:hidden" />通过HUAWEI HiLink生态产品技术认证</div>',
    },
    {
      year: '2022',
      event: '<div class="-ml-5 desktop:-ml-2">小彼恩点读阅听一体机发布上市<br />小彼恩被认定为国家高新技术企业<br />小彼恩被父母必读杂志社授予“爱心企业”称号</div>',
    },
  ],
}
</script>

<template>
  <!-- 移动端 -->
  <div class="desktop:hidden mt-90 h-700 relative">
    <div
      class=" absolute left-1/2 -translate-x-1/2 top-20 text-[#001CF2] text-42 mobile-under-bg-green-four px-10 font-OPPOSans-H"
    >
      {{ pageConfig.title }}
    </div>
    <img class=" absolute w-370 -left-65 -bottom-45" src="/img/about/chimney.gif" style="object-fit: cover;">
    <img class="w-695 h-62  absolute bottom-0 left-40" src="/img/about/mobile/grass.png">
    <div class="absolute left-100 top-140">
      <div v-for="(item, index) in pageConfig.desc" :key="index" class="mt-10 flex items-start">
        <div class="text-26 text-bgc font-FredokaOne-Regular" :style="{ 'margin-left': `-${index * 0.5}px` }">
          {{ item.year }}
        </div>
        <div class="text-20 text-[#666] ml-35 pt-2 leading-38" v-html="item.event" />
      </div>
    </div>
    <img class="w-198 h-362 absolute -right-60 -top-65" src="/img/about/mobile/course-moon-bg.png" alt="">
  </div>
  <!-- pc端 -->
  <div class="hidden desktop:block relative mt-95 ">
    <img class="w-126 h-229 absolute right-0 -top-229" src="/img/about/course-moon-bg.png">
    <div class="w-544 h-345 m-auto relative">
      <div
        class="under-bg-green-four text-20 text-[#001CF2] px-7 absolute -top-5 left-1/2 -translate-x-1/2 font-OPPOSans-H"
      >
        {{ pageConfig.title }}
      </div>
      <img class="w-544 h-40 absolute bottom-0 z-10" src="/img/about/grass.png">
      <img class=" absolute w-200 -left-40 -top-65" src="/img/about/chimney.gif">
      <img class=" absolute w-285 -right-65 -bottom-40" src="/img/about/princess.gif">
      <div class=" absolute z-20 top-50 left-51">
        <div v-for="(item, index) in pageConfig.desc" :key="index" class="mt-9 flex items-start">
          <div class="text-12 text-bgc font-FredokaOne-Regular" :style="{ 'margin-left': `-${index}px` }">
            {{ item.year }}
          </div>
          <div class="text-7 text-[#666] ml-15 pt-5" v-html="item.event" />
        </div>
      </div>
    </div>
  </div>
</template>
