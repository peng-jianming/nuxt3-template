<script lang="ts" setup>
const pageConfig = {
  title: '品牌荣誉',
  desc: [
    {
      year: '2022',
      tag: [
        '小彼恩被认定为国家高新技术企业',
        '小彼恩被父母必读杂志社授予「爱心企业」称号',
        '小彼恩荣获2022年儿童智能暨智慧教育产业创新贡献单位',
      ],
    },
    {
      year: '2021',
      tag: [
        '小彼恩荣获松翰科技最佳合作伙伴奖',
        '<div class="mt-5 mb-10 leading-30 desktop:my-0 desktop:leading-14">小彼恩好饿的毛毛虫™点读笔荣<br class="desktop:hidden" />获第二届中国儿童智能产业影响力产品</div>',
        '<div class="leading-30 desktop:leading-14">小彼恩好饿的毛毛虫™点读笔（WIFI版）<br class="desktop:hidden" />通过HUAWEI HiLink生态产品技术认证</div>',
        '小彼恩荣获第七届樱桃大赏·玩具品牌最佳表现力大奖',
        '小彼恩好饿的毛毛虫™点读笔荣获第三届智能终端大奖',
      ],
    },
    {
      year: '2020',
      tag: [
        '第六届樱桃大赏早教益智玩具品牌最佳表现力大奖',
        '第六届樱桃大赏年度最具潜力产品大奖',
        '天猫双11自播成交排行榜玩具类目TOP5京东“飞跃提升奖”',
      ],
    },
    {
      year: '2019',
      tag: [
        '2019年获天猫母婴玩具行业最佳突破奖',
        '小彼恩旗舰店获天猫双11早教行业店铺榜 TOP6',
      ],
    },
  ],
}
</script>

<template>
  <!-- 移动端 -->
  <div class="desktop:hidden px-66 mt-80 relative -mb-120">
    <div class="text-[#001CF2] text-42 mobile-under-bg-yellow-four px-10 w-190 font-OPPOSans-H">
      {{ pageConfig.title }}
    </div>
    <div class="relative z-10">
      <div v-for="(item, index) in pageConfig.desc" :key="index" class="mt-20">
        <div class="text-28 ml-16 text-[#001CF2] font-bold mb-10 font-FredokaOne-Regular">
          {{ item.year }}
        </div>
        <div class="text-22 ml-30 text-[#666] leading-44">
          <div v-for="(_item, _index) in item.tag" :key="_index" v-html="_item" />
        </div>
      </div>
    </div>
    <img class="w-375 h-377 absolute -right-70 top-300" src="/img/about/mobile/honor-bg.png" alt="">
  </div>
  <!-- pc端 -->
  <div class="hidden desktop:block relative m-auto overflow-hidden -mb-90">
    <div class="w-562 m-auto pb-65">
      <span class="under-bg-yellow-four  text-20 text-[#001CF2] px-7 py-2 ml-15 font-OPPOSans-H">
        {{ pageConfig.title }}
      </span>
      <div class="overflow-hidden">
        <div class="float-right relative z-20">
          <div v-for="(item, index) in pageConfig.desc" :key="index" class="mt-10">
            <div class="text-[#001CF2] text-16  font-bold font-FredokaOne-Regular">
              {{ item.year }}
            </div>
            <div class="text-8 text-[#999] leading-15 indent-14">
              <div v-for="(_item, _index) in item.tag" :key="_index" v-html="_item" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="w-550 h-344 absolute left-0 bottom-40" src="/img/about/honor-bg.gif" alt="">
  </div>
</template>
