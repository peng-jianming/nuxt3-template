<script lang="ts" setup>
const device = useDeviceStore()
const showIosPopover = ref(false)
const showAndroidPopover = ref(false)
const showMobileIosPopover = ref(false)
const showMobileAndroidPopover = ref(false)
definePageMeta({
  footerColor: 'blue',
})
useHead({
  title: '小彼恩app下载-英语点读笔-中文点读笔_小彼恩littlebean',
  meta: [
    { name: 'description', content: '使用小彼恩APP，可与百万家长分享早教日常。通过此版块，用户可官方下载安卓和IOS两个版本的小彼恩APP。' },
    { name: 'keywords', content: '小彼恩littlebean、小彼恩app下载、英语点读笔、中文点读笔' },
  ],
})
</script>

<template>
  <!-- 移动端 -->
  <div class="desktop:hidden mt-150 -mb-150 relative">
    <img class="w-496 mx-auto py-52 relative z-10" src="/img/download/mobile/phone.png" alt="">
    <img class="w-688 absolute top-316 left-18 z-10" src="/img/download/mobile/hand.png" alt="">
    <!-- 手机设备切换成图片 -->
    <video
      v-if="device.device === deviceEnums.PC" poster="https://oss.xiaobien.com/static/images/www-xbe/poster1.png"
      loop src="https://oss.xiaobien.com/websiteVideo/2022730/730.mp4" autoplay muted
      class="absolute w-449 h-972 top-83 left-1/2 -translate-x-1/2"
    />
    <img
      v-else class="absolute w-449 h-972 top-83 left-1/2 -translate-x-1/2"
      src="https://oss.xiaobien.com/static/images/www-xbe/poster@2x.png"
    >
    <div class="flex items-start justify-center">
      <div>
        <img class="w-146 h-146" src="/img/download/mobile/logo.png" alt="">
        <div class="text-17 text-[#7f7f7f] text-center mt-14 font-OPPOSans-M">
          发现点读新玩法<br>让孩子爱上阅读
        </div>
      </div>
      <div class="ml-37 mt-13 flex flex-col">
        <van-popover v-model:show="showMobileIosPopover" placement="bottom">
          <div>
            <img src="https://oss.xiaobien.com/static/images/www-xbe/download-qrcode.png">
          </div>
          <template #reference>
            <div
              class="android-bg w-135 h-56 text-primary text-24 pl-18 leading-58 font-OPPOSans-M"
              :class="[{ 'ios-bg text-bgc': showMobileIosPopover }]"
            >
              IOS下载
            </div>
          </template>
        </van-popover>
        <van-popover v-model:show="showMobileAndroidPopover" placement="bottom">
          <div>
            <img src="https://oss.xiaobien.com/static/images/www-xbe/download-qrcode.png">
          </div>
          <template #reference>
            <div
              class="android-bg mt-12 w-135 h-56 text-primary text-24 pl-18 leading-58 font-OPPOSans-M"
              :class="[{ 'ios-bg text-bgc': showMobileAndroidPopover }]"
            >
              安卓下载
            </div>
          </template>
        </van-popover>
      </div>
    </div>
  </div>
  <!-- pc端 -->
  <div class="hidden desktop:block h-410 relative overflow-hidden -mb-80">
    <img class="absolute -right-60 top-0 w-299" src="/img/right-cloud-bg.gif" alt="">
    <img class="absolute left-0 top-283 w-191 h-89" src="/img/download/left-point.png" alt="">
    <div class="w-594 h-148 rounded-15 bg-[#F7F7F7] mt-203 mx-auto relative">
      <img class=" absolute left-71 -top-120 w-252 h-138" src="/img/download/hand.png" alt="">
      <img class=" absolute left-125 -top-131 w-163 h-336 z-10" src="/img/download/phone.png" alt="">
      <video
        poster="https://oss.xiaobien.com/static/images/www-xbe/poster1.png" loop
        src="https://oss.xiaobien.com/websiteVideo/2022730/730.mp4" autoplay muted
        class="absolute w-163 h-318 left-125 -top-122"
      />
      <div class="absolute right-127 -top-20">
        <img class="w-39 h-39 mb-34" src="/img/download/mobile/logo.png" alt="">
        <div class="text-9 flex mb-8">
          <van-popover v-model:show="showIosPopover" placement="bottom">
            <div>
              <img src="https://oss.xiaobien.com/static/images/www-xbe/download-qrcode.png">
            </div>
            <template #reference>
              <div
                class="android-bg pl-10 cursor-pointer text-primary w-58 h-24 leading-25 font-OPPOSans-M"
                :class="[{ 'ios-bg text-bgc': showIosPopover }]" @mouseenter="showIosPopover = true"
                @mouseout="showIosPopover = false"
              >
                IOS下载
              </div>
            </template>
          </van-popover>
          <van-popover v-model:show="showAndroidPopover" placement="bottom">
            <div>
              <img src="https://oss.xiaobien.com/static/images/www-xbe/download-qrcode.png">
            </div>
            <template #reference>
              <div
                class="android-bg pl-10 cursor-pointer text-primary w-58 h-24 leading-25 ml-9 font-OPPOSans-M" :class="[{ 'ios-bg': showAndroidPopover }]"
                @mouseenter="showAndroidPopover = true" @mouseout="showAndroidPopover = false"
              >
                安卓下载
              </div>
            </template>
          </van-popover>
        </div>
        <div class="text-[#999] text-8 font-OPPOSans-M">
          发现点读新玩法，让孩子爱上阅读
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ios-bg {
  background-image: url('/img/download/bg-ios.png') !important;
  background-size: cover;
  color: #FFFDF7;
}

.android-bg {
  background-image: url('/img/download/bg-android.png');
  background-size: cover;
}
</style>
