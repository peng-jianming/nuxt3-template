<script lang='ts' setup>
import { getHelpsDetail } from '~/assets/api/service-support'
definePageMeta({
  footerColor: 'red',
})
const route = useRoute()

const data = await getHelpsDetail(Number(route.params.id))

useHead({
  title: data.title,
  meta: [
    { name: 'description', content: data.seo_description },
    { name: 'keywords', content: data.seo_keywords },
  ],
})

const content = ref(data.content)
const online_time = ref(data.online_time)
const title = ref(data.title)
const breadcrumbConfig = ref<IBreadcrumbItem[]>([
  {
    title: '首页',
    link: '/',
  },
  {
    title: '服务与支持',
    link: '/service-support',
  },
  {
    title: data.title,
  },
])
</script>

<template>
  <detail :title="title" :time="online_time" :content="content" :breadcrumb-config="breadcrumbConfig" />
</template>
