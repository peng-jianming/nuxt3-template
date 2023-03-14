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
  title: data.seo_title,
  meta: [
    { name: 'description', content: data.seo_description },
    { name: 'keywords', content: data.seo_keywords },
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
