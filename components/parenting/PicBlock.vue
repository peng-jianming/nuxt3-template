<script lang='ts' setup>
const containerRef = ref<HTMLElement | null>(null)
onMounted(() => {
  containerRef.value!.scrollLeft = 425 * document.body.clientWidth / 750
})
</script>

<template>
  <div class="flex flex-col items-center mt-70 relative desktop:mt-60">
    <div
      class="under-bg-yellow text-41 desktop:text-19 text-[#0000ff] pr-20 desktop:pr-10 bg-contain bg-no-repeat bg-bottom  font-OPPOSans-H"
    >
      “育”见成长
    </div>
    <div class="text-22 desktop:text-10 text-[#666] text-center mt-20 desktop:mt-15 leading-39 desktop:leading-14">
      如果说绘本中藏着最纯粹的爱，那亲子共读，<br class="desktop:hidden">
      一定承载着孩子最宝贵的童年成长记忆。<br>
      小彼恩倾情推出#育见成长#系列专栏，与你一起共赏亲子阅读过程中，<br class="desktop:hidden">
      那些惊喜、感动、兴奋、温暖......的阅读故事。
    </div>
    <!-- 移动端 -->
    <div class="desktop:hidden">
      <div ref="containerRef" class="w-750 mt-35 overflow-auto flex pb-25 hidden-scrollbar">
        <div
          v-for="item in 5" :key="item"
          class=" flex-shrink-0 rounded-25 mx-15 shadow-input w-503 h-384 overflow-hidden"
          @click="navigateTo('/parenting/abc-list/detail/1')"
        >
          <img
            class="w-503 h-280" src="https://oss.baobaobooks.net/college/cover/202105/162148069121745.jpg"
            alt=""
          >
          <div class="h-104 px-40 pt-20 text-23 text-[#666] ">
            孩子成长的最好方式，我在亲子共读中找到了答案
          </div>
        </div>
      </div>
      <div class=" text-primary text-25 text-center leading-25" @click="navigateTo('/parenting/abc-list')">
        查看更多 >>
      </div>
    </div>
    <!-- PC端 -->
    <div class="hidden desktop:flex w-594 mt-15 z-10 relative m-auto justify-between">
      <div
        v-for="(item, index) in 3" :key="index"
        class="w-182 h-139 rounded-16 overflow-hidden shadow-input cursor-pointer"
        @click="navigateTo('/parenting/abc-list/detail/1')"
      >
        <img
          class="w-182 h-102" src="https://oss.baobaobooks.net/college/cover/202105/162148069121745.jpg"
          style="object-fit: cover;" alt=""
        >
        <div class="h-37 pt-7 px-16 text-8 text-[#666]">
          孩子成长的最好方式，我在亲子共读中找到了答案
        </div>
      </div>
      <img
        class="w-41 h-27 absolute top-1/2 -translate-y-1/2 -right-55 cursor-pointer"
        src="/img/parenting/arrow-right.png" @click="navigateTo('/parenting/abc-list')"
      >
    </div>
    <img
      class="w-167 h-103 desktop:w-191 desktop:h-89 absolute -left-44 -top-60 desktop:left-0  desktop:top-90"
      src="/img/parenting/mobile/point-bg.png"
    >
  </div>
</template>

<style scoped>
.under-bg-yellow {
    background-image: url(/img/parenting/mobile/under-bg-yellow.png);
}
</style>
