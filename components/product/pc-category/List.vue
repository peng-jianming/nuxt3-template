<script lang="ts" setup>
const router = useRouter()
const input = ref('')
</script>

<template>
  <div class="w-442 ml-80 min-h-400 relative">
    <div class="flex justify-between items-center mb-10">
      <div class="text-8 text-info">
        中文童书 > 儿童歌谣
      </div>
      <search v-model="input" />
    </div>
    <div v-if="true">
      <div class="flex flex-wrap">
        <div
          v-for="(item, index) in [{}, {}, {}, {}, {}, {}, {}, {}]" :key="index"
          class="w-130 mb-20 cursor-pointer" :class="[index % 3 === 0 ? 'ml-0' : 'ml-26']"
          @click="router.push({ path: `/product/detail/${index}` })"
        >
          <img
            class="w-130 h-130 rounded-15 overflow-hidden"
            src="https://oss.baobaobooks.net/basicAdmin/cover/202209/166271929169975.jpg?x-oss-process=image/resize,m_mfit,h_400,w_400/quality,q_90"
            alt=""
          >
          <div class="px-14">
            <div class="text-8 leading-23 text-black font-OPPOSans-B">
              唱! 古诗
            </div>
            <div class="text-6 text-info line-clamp-2">
              423世界读书日，littlebean小彼恩携国学启蒙新品
            </div>
          </div>
        </div>
      </div>
      <div class="pagination-container relative pl-80">
        <pagination :total-items="1000" />
      </div>
    </div>
    <img v-else class="w-226 absolute top-100 left-1/2 -translate-x-1/2" src="/img/empty.png" alt="">
  </div>
</template>
