<script lang='ts' setup>
const config: IMenu[] = [
  {
    label: '首页',
    link: '/',
    isShowMobile: true,
  },
  {
    label: '品质育儿研究所',
    link: '/parenting',
  },
  {
    label: '产品及资源下载',
    link: '/product',
    children: [
      {
        label: '智能硬件',
        link: 'http://www.baidu.com',
        isShowMobile: true,
      },
      {
        label: '中文童书',
        link: 'http://www.baidu.com',
        isShowMobile: true,
      },
      {
        label: '英文童书',
        link: 'http://www.baidu.com',
        isShowMobile: true,
      },
      {
        label: '益智教玩具',
        link: 'http://www.baidu.com',
        isShowMobile: true,
      },
    ],
  },
  {
    label: 'APP服务',
    link: '/download',
    children: [
      {
        label: '云盘下载',
        external: true,
        link: 'https://cloud.xiaobien.com/',
      },
    ],
  },
  {
    label: '家长指南',
    link: '/parents-guide',
    isShowMobile: true,
  },
  {
    label: '品牌介绍',
    link: '/about',
  },
  {
    label: '联系我们',
    link: '/contact',
  },
  {
    label: '服务与支持',
    link: '/service-support',
    isShowMobile: true,
  },
]
</script>

<template>
  <!-- 移动端 -->
  <div class="fixed z-50 left-0 top-0 h-150 w-full bg-bgc px-40 desktop:hidden">
    <nuxt-link to="/">
      <img class="mx-auto mt-70 w-258 h-69" src="/img/header/mobile-logo.png" alt="小彼恩">
    </nuxt-link>
    <page-header-mobile-menu :config="config" />
  </div>
  <!-- pc端 -->
  <div
    class="h-50 max-w-672 items-center justify-between absolute w-full top-0 z-50 left-1/2 -translate-x-[50%] hidden desktop:flex">
    <h1>
      <a href="/" class="title-bg-logo block w-88 h-47 text-8 -indent-[9999px]">小彼恩</a>
    </h1>
    <page-header-pc-menu :config="config" />
  </div>
</template>

<style scoped>
.title-bg-logo {
  background-image: url('/img/logo.png');
  background-size: 100% 100%;
}
</style>
