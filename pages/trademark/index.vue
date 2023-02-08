<script lang='ts' setup>
definePageMeta({
  footerColor: 'blue',
})
useHead({
  title: '品牌动态-儿童点读笔-英语启蒙绘本_小彼恩littlebean',
  meta: [
    { name: 'description', content: '小彼恩littlebean致力于成为智慧早教生态的领潮者，为中国家庭提供寓教于乐的早教产品及服务，让每一个孩子都能够享受有趣、 有爱、有内容的早教学习体验。可访问小彼恩官网了解更多品牌动态。' },
    { name: 'keywords', content: '儿童点读笔、英语启蒙绘本、国学启蒙绘本、小彼恩littlebean、幼儿点读笔' },
  ],
})

const breadcrumbConfig = ref<IBreadcrumbItem[]>([
  {
    title: '首页',
    link: '/',
  },
  {
    title: '品牌动态',
    link: '/trademark',
  },
])
</script>

<template>
  <list :show-place="1" :breadcrumb-config="breadcrumbConfig" />
</template>
