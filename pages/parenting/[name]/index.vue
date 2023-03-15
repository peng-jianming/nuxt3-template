<script lang="ts" setup>
import { getVideoList, IVideoItem } from '~/assets/api/parenting';
import { pageConfig } from '~/components/parenting/config'
definePageMeta({
  footerColor: 'red',
})

const route = useRoute()
const currentPageConfig = pageConfig[route.params.name as keyof typeof pageConfig]


const breadcrumbConfig = ref<IBreadcrumbItem[]>([
  {
    title: '品质育儿研究所',
    link: '/parenting',
  },
  {
    title: currentPageConfig.title
  },
])

const options = ref({
  video_position: currentPageConfig.video_position,
  title: ''
})
const { loadData, list, finished, loading, curPage } = useList<IVideoItem>(getVideoList, options)

const onload = () => {
  curPage.value += 1
  loadData()
}

const isShow = ref(false)
const currentVideoSrc = ref('')
const currentVideoDialogBg = ref(currentPageConfig.videoDialogBg)
const handleOpenDialog = (src: string) => {
  currentVideoSrc.value = src
  isShow.value = true
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
    <client-only>
      <!-- 移动端 -->
      <div class="desktop:hidden">
        <van-list v-model:loading="loading" :finished="finished" @load="onload">
          <div v-for="(item, index) in list" :key="index" class="px-40 mb-40"
            @click="handleOpenDialog(item.resource_url)">
            <img class=" w-672 h-384 rounded-25 mb-35" :src="item.resource_cover" alt="">
            <div class="text-[#0000FF] text-36 font-OPPOSans-B custom-under-line line-clamp-1">
              {{ item.title }}
            </div>
            <div class="text-22 my-20 text-[#666] line-clamp-2">
              {{ item.resource_desc }}
            </div>
            <div class="text-19 text-info">
              {{ item.online_time }}
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
      </div>
      <!-- pc端 -->
      <div class="hidden desktop:block relative z-10">
        <van-list v-model:loading="loading" :finished="finished" @load="onload">
          <div class="flex flex-wrap">
            <div v-for="(item, index) in list" :key="index"
              class="list-items  w-182 h-139 rounded-16 cursor-pointer overflow-hidden shadow-input mb-45 mr-18"
              @click="handleOpenDialog(item.resource_url)">
              <img class="w-182 h-102" :src="item.resource_cover" alt="">
              <div class="h-37 text-8 text-[#666] bg-white overflow-hidden px-16 py-6 line-clamp-2">
                {{ item.resource_desc }}
              </div>
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
      </div>
    </client-only>
    <video-dialog v-model:is-show="isShow" :src="currentVideoSrc" :bg-img="currentVideoDialogBg" />
  </div>
</template>

<style lang="scss" scoped>
.list-items {
  &:nth-child(3n) {
    @apply mr-0;
  }
}
</style>