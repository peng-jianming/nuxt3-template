<script lang='ts' setup>
import PageFooterShare from '~/components/page-footer/Share.vue'
const config = [
  {
    label: '智能硬件',
    children: [
      {
        label: '小彼恩点读阅听一体机',
      },
      {
        label: '好饿毛毛虫™点读笔(WIFI版)',
      },
    ],
  },
  {
    label: '点读童书系列',
    children: [
      {
        label: '中文点读童书系列',
      },
      {
        label: '英文点读童书系列',
      },
    ],
  },
  {
    label: '点读益智教玩具',
    children: [
      {
        label: '挂图类益智教玩具',
      },
      {
        label: '卡片类益智教玩具',
      },
      {
        label: '拼图类益智教玩具',
      },
    ],
  },
  {
    label: 'APP产品及服务',
    children: [
      {
        label: 'APP产品及服务介绍',
        link: '/download',
      },
      {
        label: '下载资源介绍',
        link: '/product',
      },
      {
        label: '服务与支持',
        link: '/service-support',
      },
      {
        label: '家长指南',
        link: '/parents-guide',
      },
    ],
  },
  {
    label: '关注小彼恩',
    component: PageFooterShare,
  },
]
</script>

<template>
  <div class="hidden desktop:flex justify-between mb-10">
    <div v-for="{ label, children, component }, index in config" :key="index">
      <div class="mb-15 text-14 text-white font-OPPOSans-B">
        {{ label }}
      </div>
      <div v-if="children">
        <div
          v-for="item, _index in children" :key="_index" class="cursor-pointer text-8 text-white leading-14"
          @click="navigateTo(item.link)"
        >
          {{
            item.label
          }}
        </div>
      </div>
      <component :is="component" v-else />
    </div>
  </div>
</template>
