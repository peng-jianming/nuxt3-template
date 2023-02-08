<script lang='ts' setup>
import { getParentsGuideDetail } from '~/assets/api/parents-guide'
definePageMeta({
  footerColor: 'red',
})
const route = useRoute()

const data = await getParentsGuideDetail(Number(route.params.id), {
  show_place: 2,
})
const content = ref(data.brand_desc)
const online_time = ref(data.online_at)
const title = ref(data.title)
useHead({
  title: `${data.title}_小彼恩littlebean`,
  meta: [
    { name: 'description', content: data.brand_desc },
    { name: 'keywords', content: '英语启蒙绘本、国学启蒙绘本、英文绘本怎么选、国学启蒙绘本怎么选、小彼恩littlebean' },
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
  {
    title: data.title,
  },
])
</script>

<template>
  <detail :title="title" :time="online_time" :content="content" :breadcrumb-config="breadcrumbConfig" />
</template>
