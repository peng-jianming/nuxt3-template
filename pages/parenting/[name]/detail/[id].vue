<script lang='ts' setup>
import { getParentsGuideDetail } from '~/assets/api/parents-guide'
definePageMeta({
  footerColor: 'red',
})
const route = useRoute()

const data = await getParentsGuideDetail(Number(route.params.id), {
  show_place: 3,
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
    title: '品质育儿研究所',
    link: '/parenting',
  },
  {
    title: '“育”见成长',
    link: '/parenting/grow_list',
  },
  {
    title: data.title,
  },
])
</script>

<template>
  <detail :title="title" :time="online_time" :content="content" :breadcrumb-config="breadcrumbConfig" />
</template>
