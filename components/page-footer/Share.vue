<script lang='ts' setup>
interface IConfig {
  label: string
  img: string
  link?: {
    pc?: string
    mobile?: string
  }
  qrcode?: string
}
const config: IConfig[] = [
  {
    label: '小彼恩小红书',
    img: '/img/footer/xhs.png',
    link: {
      pc: 'https://www.xiaohongshu.com/user/profile/5da435f7000000000100096a?xhsshare=CopyLink&appuid=59ef05a44eacab5ffb9045ea&apptime=1608776926',
      mobile: 'https://www.xiaohongshu.com/user/profile/5da435f7000000000100096a?xhsshare=CopyLink&appuid=59ef05a44eacab5ffb9045ea&apptime=1608776926',
    },
  },
  {
    label: '小彼恩公众号',
    img: '/img/footer/wx.png',
    qrcode: 'https://oss.xiaobien.com/static/images/www-xbe/qrcode-service1.png',
  },
  {
    label: '小彼恩官博',
    img: '/img/footer/wb.png',
    link: {
      pc: 'https://weibo.com/p/1006065483020963/home?from=page_100606&mod=TAB&is_all=1#place',
      mobile: 'https://weibo.com/u/5483020963',
    },
  },
]
const deviceType = useDeviceStore()
const isShowQrCode = ref(false)

const handlerClick = (item: IConfig) => {
  if (deviceType.device === deviceEnums.MOBILE)
    window.location.href = item.link?.mobile || ''
  else
    window.open(item.link?.pc || '', '_blank')
}
// 移动端popover的默认点击和mouseenter与mouseleave会同时触发,导致切换失败
const mouseenterEvent = computed(() => deviceType.device === deviceEnums.PC ? 'mouseenter' : '')
const mouseleaveEvent = computed(() => deviceType.device === deviceEnums.PC ? 'mouseleave' : '')
</script>

<template>
  <div class="flex flex-nowrap items-start">
    <div
      v-for="(item, index) in config" :key="index"
      class="px-11 desktop:px-0 desktop:pr-8 cursor-pointer relative group flex"
    >
      <!-- pc端采用hover,移动端采用click -->
      <ClientOnly v-if="item.qrcode">
        <van-popover v-model:show="isShowQrCode" placement="top">
          <img class="w-150 h-150 desktop:w-80 desktop:h-80 z-50" :src="item.qrcode" alt="">
          <template #reference>
            <img
              class="w-82 h-82 desktop:w-26 desktop:h-26" :src="item.img" alt=""
              @[mouseenterEvent]="isShowQrCode = true" @[mouseleaveEvent]="isShowQrCode = false"
            >
          </template>
        </van-popover>
      </ClientOnly>
      <img v-else class="w-82 h-82 desktop:w-26 desktop:h-26 " :src="item.img" alt="" @click="handlerClick(item)">
    </div>
  </div>
</template>
