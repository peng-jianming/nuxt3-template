<script lang='ts' setup>
const device = useDeviceStore()
const isShow = ref(false)

onMounted(() => {
  if (device.device === deviceEnums.PC) {
    scrollDirectionPC(
      () => {
        isShow.value = false
      },
      () => {
        isShow.value = document.documentElement.scrollTop > 1200
      },
    )
  }
  else {
    scrollDirectionMB(
      () => {
        isShow.value = false
      },
      () => {
        isShow.value = document.documentElement.scrollTop > 1200
      },
    )
  }
})
const handleClick = () => {
  isShow.value = false
  scrollToTop(200)
}
</script>

<template>
  <img
    src="/img/scroll-to-top.png" class="fixed bottom-50 duration-300 w-80 z-50 desktop:w-41 cursor-pointer"
    :class="[isShow ? 'right-30' : ' -right-750']" @click="handleClick"
  >
</template>
