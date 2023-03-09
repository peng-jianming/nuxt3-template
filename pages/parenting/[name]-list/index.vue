<script lang="ts" setup>
import { getParentsGuideList } from '~/assets/api/parents-guide'
definePageMeta({
  footerColor: 'red',
})

const route = useRoute()
const breadcrumbConfig = ref<IBreadcrumbItem[]>([
  {
    title: '品质育儿研究所',
    link: '/parenting',
  },
  {
    title: '家长指南'
  },
])
interface IlistItem {
  id: number
  title: string
  online_at: string
  cover: string
  brand_desc: string
}
const options = ref({
  title: '',
  show_place: 2,
})

const { loadData, list, finished, loading, curPage } = useList<IlistItem>(getParentsGuideList, options)

const onload = () => {
  curPage.value += 1
  loadData()
}
</script>

<template>
  <div class="-mb-120 desktop:pt-90 desktop:px-78 desktop:-mb-60 relative">
    <img class="hidden desktop:block absolute -right-60 top-0 w-299" src="/img/right-cloud-bg.gif" alt="">
    <img class="hidden desktop:block  absolute left-0 top-283 w-191 h-89" src="/img/download/left-point.png" alt="">
    <mobile-search v-model="options.title" class="px-30 pt-180 pb-40" placeholder="搜索动态" @search="loadData(true)" />
    <div class="desktop:flex justify-between items-center px-40 mb-40 desktop:px-0 desktop:mb-10">
      <breadcrumb class="" :config="breadcrumbConfig" />
      <search v-model="options.title" class="hidden desktop:block" @search="loadData(true)" />
    </div>
    <!-- 移动列表 -->
    <van-list v-model:loading="loading" class="desktop:hidden" :finished="finished" @load="onload">
      <div v-for="(item, index) in list" :key="index" class="px-40 mb-40"
        @click="navigateTo(`${route.fullPath}/detail/${item.id}`)">
        <img class=" w-672 h-384 rounded-25 mb-35" :src="item.cover" alt="">
        <div class="text-[#0000FF] text-36 font-OPPOSans-B custom-under-line line-clamp-1">
          {{ item.title }}
        </div>
        <div class="text-22 my-20 text-[#666] line-clamp-2">
          {{ item.brand_desc }}
        </div>
        <div class="text-19 text-info">
          {{ item.online_at }}
        </div>
      </div>
      <template #loading>
        <van-divider class="text-22 px-80 mt-0" style="--van-divider-border-color: #9c9c9c">
          向下滑动加载更多
        </van-divider>
      </template>
      <template #finished>
        <van-divider class="text-22 px-80 mt-0" style="--van-divider-border-color: #9c9c9c">
          没有更多了
        </van-divider>
      </template>
    </van-list>
    <!-- pc列表 -->
    <div class="hidden desktop:block relative z-10">
      <div class="flex flex-wrap justify-between">
        <div v-for="(item, index) in list" :key="index"
          class="w-182 h-139 rounded-16 cursor-pointer overflow-hidden shadow-input mb-45"
          @click="navigateTo(`${route.fullPath}/detail/${item.id}`)">
          <img class="w-182 h-102 " :src="item.cover" alt="">
          <div class="h-37 text-8 text-[#666] bg-white overflow-hidden px-16 py-6 line-clamp-2">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
