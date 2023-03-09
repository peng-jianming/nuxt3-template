<script lang='ts' setup>
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
  bgImg: {
    type: String,
  },
  src: {
    type: String,
  },
})
const emits = defineEmits(['update:isShow'])

const innerIsShow = computed({
  get() {
    return props.isShow
  },
  set(val) {
    emits('update:isShow', val)
  },
})
</script>

<template>
  <div v-if="innerIsShow" class="fixed top-0 left-0 w-[100vw] h-[100vh] overflow-auto z-[999] bg-[rgba(0,0,0,0.5)]">
    <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <div class="absolute w-610 h-340 left-25 top-95 desktop:w-390 desktop:h-215 desktop:left-15 desktop:top-60">
        <video-player :src="props.src!" autoplay>
          <template #video-play-btn>
            <img
              class="absolute w-80 desktop:w-50 right-40 bottom-30 pointer-events-none"
              src="/img/parenting/mobile/video-stop.png"
            >
          </template>
        </video-player>
      </div>
      <img class="w-700 desktop:w-450 max-w-none relative pointer-events-none z-[999]" :src="bgImg" alt="">
      <img
        class="w-50 h-50 top-100 right-15 desktop:w-30 desktop:h-30  absolute cursor-pointer desktop:right-10 desktop:top-70 z-[999] "
        src="/img/parenting/video-dialog-close.png" alt="" @click="innerIsShow = false"
      >
    </div>
  </div>
</template>
