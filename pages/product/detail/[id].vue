<script lang='ts' setup>
import { onMounted, ref } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
definePageMeta({
  footerColor: 'red',
})
const route = useRoute()

const list = [
  'https://swiperjs.com/demos/images/nature-1.jpg',
  'https://swiperjs.com/demos/images/nature-2.jpg',
  'https://swiperjs.com/demos/images/nature-3.jpg',
  'https://swiperjs.com/demos/images/nature-4.jpg',
  'https://swiperjs.com/demos/images/nature-5.jpg',
]
const swiper = ref()
onMounted(() => {
  swiper.value = new Swiper('.mySwiper-pc', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  })
})
</script>

<template>
  <div class="mt-150 mx-40 -mb-80  relative desktop:w-570 desktop:ml-78 desktop:-mb-100  desktop:mt-80">
    <img class="absolute -right-150 -top-80 w-299 hidden desktop:block" src="/img/right-cloud-bg.gif" alt="">
    <div class="py-30 desktop:py-0 text-25 desktop:text-8 text-info">
      中文童书 > 儿童歌谣 > 幼儿认知标签书
    </div>
    <div class="desktop:flex justify-between desktop:mt-15">
      <div class="mb-55 desktop:mb-0 w-670 desktop:w-252 desktop:h-205 desktop:flex justify-between desktop:mr-45">
        <div class="w-670 h-670 desktop:w-205 desktop:h-205">
          <div class="swiper mySwiper-pc w-full h-full rounded-30 desktop:rounded-16 overflow-hidden">
            <div class="swiper-wrapper">
              <div v-for="(item, index) in list" :key="index" class="swiper-slide">
                <img class="w-full h-full" :src="item">
              </div>
            </div>
          </div>
        </div>
        <div class="mt-20 desktop:mt-0 desktop:w-36 desktop:h-205 flex desktop:flex-col justify-between ">
          <div v-for="(item, index) in list" :key="index" @click="swiper.slideTo(index, 1000)">
            <img class="w-112 h-112 rounded-24 desktop:w-36 desktop:h-36 desktop:rounded-8" :src="item">
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col">
        <div
          class="break-all text-36 desktop:text-11 order-2 desktop:order-1 mb-50 desktop:mb-20 font-FredokaOne-Regular  text-[#0000ff] custom-under-line"
        >
          My Book of Numbers,
          Colours, Opposites, Sounds
          幼儿认知标签书
        </div>
        <div class="order-3 desktop:order-2 text-[#666] text-22 desktop:text-8 text-justify mb-50 desktop:mb-0">
          通过全面的儿童社会技能教育、丰富实际的生活场景、多样化的表达方法、具体
          生动的案例，可以有效的帮助孩子提高社会生活技能，塑造健康完美的人格品质。
          根据不同主题和封面场景进行不同点读设计，给封面人物设计对白，第一次点击
          是中文，第二次点击是英文，分为两种形式：纯人声；人声+音效；动物、物体都
          有设计之对应的音效，如《倾听和学习》封面“钟表”设计转动指针的音效。
        </div>
        <div
          class="w-198 h-58 text-28 leading-58 pl-25 mx-auto desktop:mx-0 mb-20 desktop:order-3 order-4 desktop:my-20 desktop:w-65 desktop:h-19 desktop:text-9 desktop:pl-8 desktop:leading-19 text-primary bg-download-bg bg-no-repeat bg-cover cursor-pointer hover:bg-download-bg-active hover:text-bgc"
        >
          点读包下载
        </div>
        <div class="text-22 desktop:text-6 flex mb-15 desktop:mb-6 order-1 desktop:order-4 ">
          <div
            class="tag-bg-diandu h-39 min-w-110 mr-17 leading-39  desktop:h-11 desktop:leading-11 desktop:min-w-32 text-center desktop:mr-5 font-OPPOSans-B text-bgc"
          >
            点读版
          </div>
          <div
            class="tag-bg h-39 min-w-110 mr-17 leading-39 desktop:h-11 desktop:leading-11 desktop:min-w-32 text-center desktop:mr-5 font-OPPOSans-B text-[#0000FF]"
          >
            0-2岁
          </div>
          <div
            class="tag-bg h-39 min-w-110 mr-17 leading-39 desktop:h-11 desktop:leading-11 desktop:min-w-32 text-center desktop:mr-5 font-OPPOSans-B text-[#0000FF]"
          >
            语言发展
          </div>
          <div
            class="tag-bg h-39 min-w-110 mr-17 leading-39  desktop:h-11 desktop:leading-11 desktop:min-w-32 text-center desktop:mr-5 font-OPPOSans-B text-[#0000FF]"
          >
            词汇积累
          </div>
        </div>
        <div class="order-5 text-19 desktop:text-7 text-info flex flex-col desktop:block items-center">
          <span>发布日期：2022-11-18</span>
          <span class="desktop:ml-10 mt-5 desktop:mt-0">文件大小：47.58MB</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.tag-bg {
    background-image: url(/img/product/tag-yellow-bg.png);
    background-size: 100% 100%;

}

.tag-bg-diandu {
    background-image: url(/img/product/tag-red-bg.png);
    background-size: 100% 100%;
}
</style>
