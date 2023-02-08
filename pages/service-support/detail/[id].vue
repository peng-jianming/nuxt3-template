<script lang='ts' setup>
import { getHelpsDetail } from '~/assets/api/service-support'
definePageMeta({
  footerColor: 'red',
})
const route = useRoute()

const data = await getHelpsDetail(Number(route.params.id))

useHead({
  title: `${data.title}-小彼恩售后_小彼恩littlebea`,
  meta: [
    { name: 'description', content: data.content },
    { name: 'keywords', content: '好饿的毛毛虫点读笔、英语点读笔、中文点读笔、儿童点读笔、小彼恩littlebean、小彼恩售后' },
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
