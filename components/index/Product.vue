<script lang='ts' setup>
const product = [
  {
    img: 'https://oss.baobaobooks.net/college/cover/202105/162148069121745.jpg',
    bg: '/img/index/product-bg-1.png',
    bgClass: 'w-115 -left-115 -top-60 group-hover:left-0',
    text: '智能硬件',
  },
  {
    img: 'https://oss.baobaobooks.net/college/cover/202105/162148069121745.jpg',
    bg: '/img/index/product-bg-2.png',
    bgClass: 'w-171 -left-171 top-30 group-hover:left-0',
    text: '点读童书',
  },
  {
    img: 'https://oss.baobaobooks.net/college/cover/202105/162148069121745.jpg',
    bg: '/img/index/product-bg-3.png',
    bgClass: 'w-143 -left-143 top-50 group-hover:left-0',
    text: '产品系列',
  },
  {
    img: 'https://oss.baobaobooks.net/college/cover/202105/162148069121745.jpg',
    bg: '/img/index/product-bg-4.png',
    bgClass: 'w-148 -left-148 -top-40 group-hover:left-0',
    text: '益智教玩具',
  },
]
</script>

<template>
  <div class="mt-80 relative desktop:mt-85 flex flex-col items-center">
    <div
      class="mobile-under-bg-green-four text-42 desktop:text-20 desktop:mb-15 desktop:px-10  text-[#0000ff] px-20 font-OPPOSans-H"
    >
      产品系列
    </div>
    <!-- 移动端 -->
    <div class="desktop:hidden ">
      <img class="absolute w-172 h-566 -left-55 -top-140" src="/img/index/mobile/bug-bg.png" alt="">
      <div class="relative z-10 desktop:hidden">
        <div v-for="(item, index) in product" :key="index" class="rounded-25 shadow-input overflow-hidden mt-40">
          <img class="w-672 h-327" :src="item.img" alt="">
          <div class="text-right h-57 text-28 leading-57 text-bgc bg-primary px-24">
            {{ item.text }} >>
          </div>
        </div>
      </div>
    </div>
    <!-- pc端 -->
    <div class="hidden desktop:flex ">
      <div class="flex m-auto w-600 flex-wrap justify-between z-10">
        <div
          v-for="(item, index) in product" :key="index"
          class="w-188 h-151 rounded-12 mt-13 group overflow-hidden cursor-pointer"
        >
          <div class="relative z-20 w-full h-full">
            <img :src="item.img" alt="" class="w-full h-full">
            <div
              class="opacity-0 group-hover:opacity-100 cursor-pointer  absolute bottom-0 left-0 h-34 w-full bg-primary z-10 leading-34 text-11 text-bgc pr-10 text-right"
            >
              {{ item.text }} >>
            </div>
          </div>
          <img class="transition-all duration-500 absolute" :class="[item.bgClass]" :src="item.bg" alt="">
        </div>
        <div class="w-395 h-151 rounded-12 overflow-hidden mt-13 relative">
          <img class="w-full h-full" src="/img/index/product-banner.png">
        </div>
      </div>
    </div>
  </div>
</template>
