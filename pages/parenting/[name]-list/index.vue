<script lang="ts" setup>
definePageMeta({
  footerColor: 'red',
})
const router = useRouter()
const route = useRoute()

const list = ref([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])
const loading = ref(false)
const finished = ref(false)
const onLoad = () => {
  setTimeout(() => {
    loading.value = false
    list.value.push({})
    if (list.value.length > 10)
      finished.value = true
  }, 1000)
}
</script>

<template>
  <div class="-mb-120 desktop:pt-90 desktop:px-78 desktop:-mb-60 relative">
    <img class="hidden desktop:block absolute -right-60 top-0 w-299" src="/img/right-cloud-bg.gif" alt="">
    <img class="hidden desktop:block  absolute left-0 top-283 w-191 h-89" src="/img/download/left-point.png" alt="">
    <mobile-search class="px-30 pt-180 pb-40" placeholder="搜索动态" />
    <div class="desktop:flex justify-between items-center px-40 mb-40 desktop:px-0 desktop:mb-10">
      <breadcrumb class="" :config="['品质育儿研究所', '“育”儿成长']" />
      <search class="hidden desktop:block" />
    </div>
    <!-- 移动列表 -->
    <van-list v-model:loading="loading" class="desktop:hidden" :finished="finished" @load="onLoad">
      <div
        v-for="(item, index) in list" :key="index" class="px-40 mb-40"
        @click="router.push({ path: `${route.fullPath}/detail/${index}` })"
      >
        <img
          class="w-672 h-384 rounded-25 mb-35"
          src="https://oss.baobaobooks.net/basicAdmin/cover/202209/166271929169975.jpg?x-oss-process=image/resize,m_mfit,h_400,w_400/quality,q_90"
          alt=""
        >
        <div class="text-[#0000FF] text-36 font-OPPOSans-B custom-under-line line-clamp-1">
          点读阅听一体机，好饿的毛毛虫蝶变新...
        </div>
        <div class="text-22 my-20 text-[#666] line-clamp-2">
          通过全面的儿童社会技能教育、丰富实际的生活场景、多样化的表达方法、具体生动的案例，可以有效的帮助孩子提高社会生活技能...
        </div>
        <div class="text-19 text-info">
          2022-09-29
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
    <!-- pc列表 -->
    <div class="hidden desktop:block relative z-10">
      <div class="flex flex-wrap justify-between">
        <div
          v-for="(item, index) in list" :key="index"
          class="w-182 h-139 rounded-16 cursor-pointer overflow-hidden shadow-input mb-45"
          @click="navigateTo({ path: `${route.fullPath}/detail/${index}` })"
        >
          <img
            class="w-182 h-102 "
            src="https://oss.baobaobooks.net/basicAdmin/cover/202209/166271929169975.jpg?x-oss-process=image/resize,m_mfit,h_400,w_400/quality,q_90"
            alt=""
          >
          <div class="h-37 text-8 text-[#666] bg-white px-16 py-6 line-clamp-2">
            孩子成长的最好方式，我在亲子共读中找到了答案
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <pagination :total-items="1000" />
      </div>
    </div>
  </div>
</template>
