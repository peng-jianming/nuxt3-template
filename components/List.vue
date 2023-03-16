<script lang="ts" setup>
import { getParentsGuideList } from '~/assets/api/parents-guide'
const props = defineProps<IProps>()
const route = useRoute()
interface IProps {
  showPlace: number
  breadcrumbConfig: IBreadcrumbItem[]
}
interface IlistItem {
  id: number
  title: string
  online_at: string
  cover: string
  brand_desc: string
}
const options = ref({
  title: '',
  show_place: props.showPlace,
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
    <img class="hidden desktop:block  absolute left-0 top-283 w-191 h-89" src="/img/download/left-point.gif" alt="">
    <mobile-search v-model="options.title" class="px-30 pt-180 pb-40" placeholder="搜索动态" @search="loadData(true)" />
    <div class="desktop:flex justify-between items-center px-40 mb-40 desktop:px-0 desktop:mb-10">
      <breadcrumb :config="breadcrumbConfig" />
      <search v-model="options.title" class="hidden desktop:block" @search="loadData(true)" />
    </div>
    <client-only>
      <div v-if="list.length" class="relative z-20">
        <van-list v-model:loading="loading" :finished="finished" @load="onload">
          <div v-for="item in list" :key="item.id"
            class="px-40 mb-40 desktop:w-full desktop:px-0 desktop:flex desktop:mb-25 cursor-pointer"
            @click="navigateTo(`${route.fullPath}/detail/${item.id}`)">
            <img
              class="w-672 h-384 rounded-25 mb-35 desktop:mb-0 desktop:w-270 desktop:h-152 desktop:mr-25 desktop:rounded-14"
              :src="item.cover" style="object-fit: cover;">
            <div class="desktop:flex-1 desktop:pt-7">
              <div
                class="text-[#0000FF] text-36 font-OPPOSans-B custom-under-line line-clamp-1 desktop:text-13 desktop:mb-20">
                {{ item.title
                }}
              </div>
              <div
                class="text-24 leading-35 desktop:leading-15 my-20 text-[#666] line-clamp-2 desktop:text-8 desktop:mt-0  desktop:mb-25 desktop:indent-12 desktop:line-clamp-5">
                {{ item.brand_desc }}
              </div>
              <div class="text-19 text-info desktop:text-7">
                {{ item.online_at }}
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
      <img v-else class="w-250 mx-auto mt-80" src="/img/empty.png" alt="">
    </client-only>
  </div>
</template>
