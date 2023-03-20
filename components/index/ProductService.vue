<script lang='ts' setup>
import { ref } from 'vue'
const showIosPopover = ref(false)
const showAndroidPopover = ref(false)
const showMobileIosPopover = ref(false)
const showMobileAndroidPopover = ref(false)
</script>

<template>
  <div class=" mt-80 relative flex flex-col items-center">
    <div class="mobile-under-bg-yellow-seven text-42 desktop:text-20 desktop:mb-15 text-[#0000ff] px-10 font-OPPOSans-H">
      APP产品服务
    </div>
    <!-- 移动端 -->
    <div class="desktop:hidden h-341 w-full bg-[#f7f7f7] relative mt-250 mb-80">
      <img class="w-290 h-596 absolute -top-188 left-119 z-10" src="/img/download/mobile/phone.png">
      <img class="w-428 h-236 absolute -top-188 left-39 z-10" src="/img/download/mobile/hand.png">
      <video
        poster="https://oss.xiaobien.com/static/images/www-xbe/poster1.png" loop
        src="https://oss.xiaobien.com/websiteVideo/2022730/730.mp4" autoplay muted playsinline="true"
        webkit-playsinline="true" class="absolute w-258 h-564 -top-175 left-135"
      />
      <div class="absolute left-469 -top-40 flex flex-col">
        <img class="w-95 h-95 mb-33" src="/img/download/mobile/logo.png">
        <van-popover v-model:show="showMobileIosPopover" placement="bottom">
          <div>
            <img src="https://oss.xiaobien.com/static/images/www-xbe/download-qrcode.png" class="w-[118px]">
          </div>
          <template #reference>
            <div
              class=" w-154 h-64  text-24 pl-25 leading-68 font-OPPOSans-M"
              :class="[showMobileIosPopover ? 'ios-bg text-bgc' : 'android-bg text-primary']"
            >
              IOS下载
            </div>
          </template>
        </van-popover>
        <van-popover v-model:show="showMobileAndroidPopover" placement="bottom">
          <div>
            <img src="https://oss.xiaobien.com/static/images/www-xbe/download-qrcode.png" class="w-[118px]">
          </div>
          <template #reference>
            <div
              class="w-154 h-64 text-24 mt-21 pl-25 leading-68 font-OPPOSans-M"
              :class="[showMobileAndroidPopover ? 'ios-bg text-bgc' : 'android-bg text-primary']"
            >
              安卓下载
            </div>
          </template>
        </van-popover>
        <div class="text-22 text-[#7f7f7f] mt-15 font-OPPOSans-M">
          发现点读新玩法<br>让孩子爱上阅读
        </div>
      </div>
    </div>
    <!-- PC端 -->
    <div class="hidden desktop:block w-594 h-148 rounded-15 bg-[#F7F7F7] mt-110 mx-auto relative z-20">
      <img class="absolute left-71 bottom-53 w-252 h-138" src="/img/download/hand.png" alt="">
      <div class="absolute w-163 h-234 left-125 bottom-0 overflow-hidden">
        <img class="absolute left-0 bottom-0 w-163 h-234 z-10" src="/img/index/phone.png" alt="">
        <video
          poster="https://oss.xiaobien.com/static/images/www-xbe/poster1.png" loop
          src="https://oss.xiaobien.com/websiteVideo/2022730/730.mp4" autoplay muted
          class="absolute w-163 h-318 left-0 -bottom-90" playsinline="true" webkit-playsinline="true"
        />
      </div>
      <div class="absolute right-127 -top-20">
        <img class="w-39 h-39 mb-34" src="/img/download/mobile/logo.png" alt="">
        <div class="text-9 flex mb-8">
          <van-popover v-model:show="showIosPopover" placement="bottom">
            <div>
              <img src="https://oss.xiaobien.com/static/images/www-xbe/download-qrcode.png" class="w-[118px]">
            </div>
            <template #reference>
              <div
                class=" pl-10 cursor-pointer  w-58 h-24 leading-25 font-OPPOSans-M"
                :class="[showIosPopover ? 'ios-bg text-bgc' : 'android-bg text-primary']"
                @mouseenter="showIosPopover = true" @mouseout="showIosPopover = false"
              >
                IOS下载
              </div>
            </template>
          </van-popover>
          <van-popover v-model:show="showAndroidPopover" placement="bottom">
            <div>
              <img src="https://oss.xiaobien.com/static/images/www-xbe/download-qrcode.png" class="w-[118px]">
            </div>
            <template #reference>
              <div
                class=" pl-10 cursor-pointer w-58 h-24 leading-25 ml-9 font-OPPOSans-M"
                :class="[showAndroidPopover ? 'ios-bg text-bgc' : 'android-bg text-primary']"
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
  background-image: url('/img/download/bg-ios.png');
  background-size: cover;
}

.android-bg {
  background-image: url('/img/download/bg-android.png');
  background-size: cover;
}
</style>
