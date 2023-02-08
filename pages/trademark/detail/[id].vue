<script lang='ts' setup>
import { getParentsGuideDetail } from '~/assets/api/parents-guide'
definePageMeta({
  footerColor: 'red',
})
const route = useRoute()

const data = await getParentsGuideDetail(Number(route.params.id), {
  show_place: 1,
})

useHead({
  title: `${data.title}_小彼恩littlebean`,
  meta: [
    { name: 'description', content: data.brand_desc },
    { name: 'keywords', content: '毛毛虫点读笔、英语点读笔、儿童点读笔、幼儿点读笔、小彼恩littlebean' },
  ],
})

const content = ref(data.brand_desc)
const online_time = ref(data.online_at)
const title = ref(data.title)
const breadcrumbConfig = ref<IBreadcrumbItem[]>([
  {
    title: '首页',
    link: '/',
  },
  {
    title: '品牌动态',
    link: '/trademark',
  },
  {
    title: data.title,
  },
])
</script>

<template>
  <detail :title="title" :time="online_time" :content="content" :breadcrumb-config="breadcrumbConfig" />
</template>
