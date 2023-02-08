<script lang='ts' setup>
definePageMeta({
  footerColor: 'blue',
})
useHead({
  title: '家长指南-点读笔怎么选-英文绘本怎么选_小彼恩littlebean',
  meta: [
    { name: 'description', content: '点读笔怎么选？英文绘本怎么选？国学启蒙绘本怎么选？访问小彼恩littlebean官网了解更多。' },
    { name: 'keywords', content: '点读笔怎么选、英文绘本怎么选、国学启蒙绘本怎么选、英语启蒙绘本、国学启蒙绘本' },
  ],
})
const breadcrumbConfig = ref<IBreadcrumbItem[]>([
  {
    title: '首页',
    link: '/',
  },
  {
    title: '家长指南',
    link: '/parents-guide',
  },
])
</script>

<template>
  <list :show-place="2" :breadcrumb-config="breadcrumbConfig" />
</template>
