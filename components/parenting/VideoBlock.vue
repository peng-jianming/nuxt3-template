<script lang='ts' setup>
import { getVideoPreview } from '~/assets/api/parenting';
import { pageConfig } from './config'

const data = await getVideoPreview();

const isShow = ref(false)
const currentVideoSrc = ref('')
const currentVideoDialogBg = ref('')
const handleOpenDialog = (bg: string, src: string) => {
  currentVideoSrc.value = src
  currentVideoDialogBg.value = bg
  isShow.value = true
}

</script>

<template>
  <div class="-mb-100 desktop:-mb-50">
    <div v-for="(item, key) in pageConfig" :key="key" class="flex flex-col items-center mt-70 desktop:mt-60">
      <div
        class="text-41 desktop:text-19  text-[#0000ff] pr-15 desktop:pr-10  bg-contain bg-no-repeat bg-bottom font-OPPOSans-H"
        :style="{ backgroundImage: `url(${item.titleBg})` }">
        {{
          item.title }}
      </div>
      <div class="text-22 desktop:text-10 text-[#666] text-center mt-30 desktop:mt-15 leading-39 desktop:leading-14"
        v-html="item.desc" />
      <!-- 移动端 -->
      <div class="desktop:hidden">
        <div class="mt-35 relative" @click="handleOpenDialog(item.videoDialogBg, data[key][0]?.resource_url)">
          <img class="w-675 h-438 relative z-10 pointer-events-none" :src="item.videoBgImg">
          <div class="absolute w-591 h-332  left-21 bottom-34">
            <img class="w-full h-full" :src="data[key][0]?.resource_cover" alt="">
          </div>
        </div>
        <div class="px-60 pt-15  text-31 leading-50 mt-15  text-primary text-center"
          @click="navigateTo(`/parenting/${key}`)">
          查看更多 >>
        </div>
      </div>
      <!-- PC端 -->
      <div class="hidden desktop:block relative mt-10">
        <parenting-loop-pic :list="data[key]" @openDialog="handleOpenDialog(item.videoDialogBg, $event)" />
        <img class="w-309 h-200 absolute top-0 z-30 left-153 pointer-events-none" :src="item.videoBgImg" alt="">
        <img class="w-41 h-27 absolute top-1/2 -translate-y-1/2 -right-55 cursor-pointer"
          src="/img/parenting/arrow-right.png" @click="navigateTo(`/parenting/${key}`)">
      </div>
    </div>
  </div>
  <video-dialog v-model:is-show="isShow" :src="currentVideoSrc" :bg-img="currentVideoDialogBg" />
</template>
