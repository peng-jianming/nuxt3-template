<script lang="ts" setup>
import type { IGetHelpsRequest } from '~/assets/api/service-support'
import { getHelps } from '~/assets/api/service-support'
definePageMeta({
  footerColor: 'blue',
})
useHead({
  title: '服务与支持-小彼恩售后_小彼恩littlebean',
  meta: [
    { name: 'description', content: '小彼恩（littlebean）售后，通过此版块，用户可获得毛毛虫点读阅听一体机、毛毛虫点读笔等硬件产品的操作说明、资源下载、配套功能卡使用说明、故障排查及售后维修等服务。' },
    { name: 'keywords', content: '小彼恩littlebean、小彼恩售后、如何使用小彼恩点读笔、毛毛虫点读阅听一体机' },
  ],
})

interface IlistItem {
  id: number
  title: string
}

const options = ref<IGetHelpsRequest>({
  per_page: 10,
  title: '',
})

const { loadData, list } = useList<IlistItem>(getHelps, options)
</script>

<template>
  <mobile-search v-model="options.title" class="desktop:hidden bg-bgc px-30 pt-150 pb-40" placeholder="搜索问题"
    @search="loadData(true)" />
  <div class="relative h-750 mt-50 desktop:mt-90 desktop:h-450">
    <div
      class=" absolute top- 0 left-1/2 -translate-x-1/2 px-10 text-33 desktop:text-19 mobile-under-bg-yellow-four text-[#001CF2] font-OPPOSans-H">
      服务与支持
    </div>
    <search v-model="options.title" class="hidden desktop:block absolute left-533 top-40 z-50" @search="loadData(true)" />
    <img class="absolute -right-50 -top-60 w-299 desktop:-right-80 desktop:-top-85" src="/img/right-cloud-bg.gif" alt="">
    <img class="w-650 absolute -top-40 -left-90 desktop:w-400 desktop:top-30 desktop:-left-20"
      src="/img/service-support/bubble.gif" alt="">
    <img class="w-407 absolute right-0 top-400 desktop:hidden" src="/img/service-support/hand.gif" alt="">
    <img class="hidden desktop:block w-383 absolute right-0 top-40" src="/img/service-support/hand-pc.png" alt="">
    <client-only>
      <div class="absolute top-170 left-130 desktop:top-160">
        <template v-if="list.length">
          <p v-for="(item, index) in list" :key="index"
            class="text-20  desktop:text-10 mb-8 text-[#666] flex cursor-pointer"
            @click="navigateTo(`/service-support/detail/${item.id}`)">
            <img class="h-21  mr-10 desktop:hidden" src="/img/service-support/arrow.png" alt="">
            <img class="h-13 mr-10 hidden desktop:block" src="/img/service-support/pc-arrow.png" alt="">
            <span>{{ item.title }}</span>
          </p>
        </template>
        <img v-else class="w-150 -ml-20 mt-30" src="/img/empty.gif" alt="">
      </div>
    </client-only>
  </div>
</template>
