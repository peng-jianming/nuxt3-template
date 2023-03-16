<script lang='ts' setup>
import { getBooksDetail, getProductDetail, CategoryEnums } from '~/assets/api/product'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
definePageMeta({
  footerColor: 'red',
})
const route = useRoute()

const data = route.query.type === CategoryEnums.DIANDUBAO ? await getBooksDetail(Number(route.params.id)) : await getProductDetail(Number(route.params.id))

const breadcrumbConfig: IBreadcrumbItem[] = route.query.type === CategoryEnums.DIANDUBAO ? [
  {
    title: '首页',
    link: '/',
  },
  {
    title: data.book_name,
  },
] : [
  {
    title: data.type === 1 ? '智能硬件' : '益智教玩具',
    link: data.type === 1 ? '/product?activeSecond=智能硬件' : '/product?activeSecond=益智教玩具',
  },
  {
    title: data.title
  }
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
    <breadcrumb :config="breadcrumbConfig" />
    <div class="desktop:flex justify-between mt-15">
      <div class="mb-55 desktop:mb-0 w-670 desktop:w-252 desktop:h-205 desktop:flex justify-between desktop:mr-45">
        <div class="w-670 h-670 desktop:w-205 desktop:h-205">
          <div class="swiper mySwiper-pc w-full h-full rounded-30 desktop:rounded-16 overflow-hidden ">
            <div class="swiper-wrapper">
              <div v-for="(item, index) in data.images" :key="index" class="swiper-slide">
                <img class="w-full h-full" :src="item">
              </div>
            </div>
          </div>
        </div>
        <div class="mt-20 desktop:mt-0 desktop:w-36 desktop:h-205 flex desktop:flex-col overflow-auto hidden-scrollbar">
          <div v-for="(item, index) in route.query.type === CategoryEnums.DIANDUBAO ? data.image_list : data.images"
            :key="index" class="shrink-0" @click="swiper.slideTo(index, 1000)">
            <img class="w-112 h-112 rounded-24 desktop:w-36 desktop:h-36 desktop:rounded-8 "
              :class="[{ 'ml-28 mt-0 desktop:ml-0 desktop:mt-6': index }]" :src="item">
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col">
        <div
          class="break-all text-36 desktop:text-11 order-2 desktop:order-1 mb-50 desktop:mb-20 font-FredokaOne-Regular  text-[#0000ff] custom-under-line">
          {{ route.query.type === CategoryEnums.DIANDUBAO ? data.book_name : data.title }}
        </div>
        <div class="order-3 desktop:order-2 text-[#666] text-22 desktop:text-8 text-justify mb-50 desktop:mb-0"
          v-html="route.query.type === CategoryEnums.DIANDUBAO ? data.book_desc : data.product_desc">
        </div>
        <div
          class="w-198 h-58 text-28 leading-58 pl-25 mx-auto desktop:mx-0 mb-20 desktop:order-3 order-4 desktop:my-20 desktop:w-69 desktop:h-20 desktop:text-9 desktop:pl-8 desktop:leading-19 text-primary bg-download-bg bg-no-repeat bg-cover cursor-pointer hover:bg-download-bg-active hover:text-bgc">
          {{ route.query.type === CategoryEnums.DIANDUBAO ? "点读包下载" : "升级包下载" }}
        </div>
        <div v-if="route.query.type === CategoryEnums.DIANDUBAO ? data.tags.length : data.product_tags.length"
          class="text-22 desktop:text-6 flex mb-15 desktop:mb-6 order-1 desktop:order-4 ">
          <!-- <div
                              class="tag-bg-diandu h-39 min-w-110 mr-17 leading-39  desktop:h-11 desktop:leading-11 desktop:min-w-32 text-center desktop:mr-5 font-OPPOSans-B text-bgc">
                              点读版
                            </div> -->
          <div v-for="(tag, _index) in route.query.type === CategoryEnums.DIANDUBAO ? data.tags : data.product_tags"
            :key="_index"
            class="tag-bg h-39 min-w-110 mr-17 leading-39 desktop:h-11 desktop:leading-11 desktop:min-w-32 text-center desktop:mr-5 font-OPPOSans-B text-[#0000FF]">
            {{ tag }}
          </div>
        </div>
        <div class="order-5 text-19 desktop:text-7 text-info flex flex-col desktop:block items-center">
          <span v-if="route.query.type === CategoryEnums.DIANDUBAO">发布日期：{{ data.release_date }}</span>
          <span v-else> 版本号：{{ data.version_info.version }}</span>
          <span class="desktop:ml-10 mt-5 desktop:mt-0">文件大小：{{ route.query.type === CategoryEnums.DIANDUBAO ?
            data.resource_size : data.version_info.resourceSize }}</span>
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
