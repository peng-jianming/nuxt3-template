<script lang='ts' setup>
import { getParentsGuideList } from '~/assets/api/parents-guide'
interface IlistItem {
  id: number
  title: string
  online_at: string
  cover: string
  brand_desc: string
}

const options = ref({
  per_page: 3,
  show_place: 1,
})

const { list } = useList<IlistItem>(getParentsGuideList, options)

const containerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  setTimeout(() => {
    containerRef.value!.scrollLeft = 230 * document.body.clientWidth / 750
  }, 100)
})
</script>

<template>
  <div class="mt-80 desktop:mt-90 relative flex flex-col items-center">
    <div
      class="mobile-under-bg-light-green-four text-42 desktop:text-20 desktop:mb-15 text-[#0000ff] px-15 font-OPPOSans-H">
      品牌动态
    </div>
    <client-only>
      <!-- 移动端 -->
      <div class="desktop:hidden">
        <div ref="containerRef" class="w-750 mt-45 overflow-auto flex pb-25 hidden-scrollbar">
          <div v-for="item in list" :key="item.id"
            class=" flex-shrink-0 rounded-25 mx-12 shadow-input w-383 h-383 overflow-hidden"
            @click="navigateTo(`/trademark/detail/${item.id}`)">
            <img class="w-383 h-305" :src="item.cover" alt="" style="object-fit: cover;">
            <div class="h-78 pl-31 pt-8 bg-white">
              <div class=" text-23 text-black font-OPPOSans-B line-clamp-1">
                {{ item.title }}
              </div>
              <div class=" text-16 text-info font-OPPOSans-M line-clamp-1">
                {{ item.brand_desc }}
              </div>
            </div>
          </div>
        </div>
        <div class=" text-primary text-31 text-center leading-50 cursor-pointer" @click="navigateTo('/trademark')">
          查看更多 >>
        </div>
      </div>
      <!-- PC端 -->
      <div class="hidden desktop:flex w-594 mt-15 z-10 relative m-auto justify-between">
        <div v-for="item in list" :key="item.id"
          class="w-188 h-188 rounded-16  overflow-hidden shadow-input cursor-pointer"
          @click="navigateTo(`/trademark/detail/${item.id}`)">
          <img class="w-188 h-136" :src="item.cover" style="object-fit: cover;" alt="">
          <div class="h-52 px-14 pt-12 bg-white">
            <div class="text-8 text-black font-OPPOSans-B line-clamp-1">
              {{ item.title }}
            </div>
            <div class="text-6 text-info font-OPPOSans-M line-clamp-1">
              {{ item.brand_desc }}
            </div>
          </div>
        </div>
        <img class="w-41 h-27 absolute top-1/2 -translate-y-1/2 -right-55 cursor-pointer" src="/img/index/arrow-right.png"
          @click="navigateTo('/trademark')">
      </div>
    </client-only>
    <img class="w-196 absolute right-0 -bottom-750 desktop:-top-220" src="/img/index/brand-dynamics-bg.gif">
    <img class="hidden desktop:block w-200 absolute -left-50 -top-60" src="/img/index/bird-bg.gif">
  </div>
</template>
