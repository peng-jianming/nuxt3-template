<script lang='ts' setup>
definePageMeta({
  footerColor: 'blue',
})

const breadcrumbConfig = ref<IBreadcrumbItem[]>([
  {
    title: '品质育儿研究所',
    link: '/parenting',
  },
  {
    title: '“育”见成长',
  },
])
</script>

<template>
  <list :show-place="3" :breadcrumb-config="breadcrumbConfig" />
</template>
