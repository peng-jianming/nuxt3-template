<script lang='ts' setup>
// import { useClickAway } from '@vant/use'

interface IProps {
  config: IMenu[]
}
defineProps<IProps>()

const isShow = ref(false)
const menuRef = ref<Element>()
// useClickAway(menuRef, () => {
//   if (isShow.value)
//     isShow.value = false
// })

const handleLinkTo = (url: string) => {
  location.href = url
}
</script>

<template>
  <img class="w-41 h-33 absolute right-37 top-45" src="/img/header/menu-btn.png" alt="" @click.stop="isShow = !isShow">
  <div
    ref="menuRef"
    class="transition-all duration-300 fixed right-0 w-412 top-100 bg-bgc z-[1001] border-t-1 border-primary overflow-auto"
    style="height: calc(100% - 1.33rem)" :class="[isShow ? 'translate-x-0' : 'translate-x-750']"
  >
    <div class="px-80 py-120 bg-bgc ">
      <div v-for="(item, index) in config" :key="index" class=" mb-30">
        <!-- 一级菜单 -->
        <div class="flex justify-between items-center mb-15" @click="handleLinkTo(item.link)">
          <div class="font-OPPOSans-B text-30 leading-30  text-black">
            {{ item.label
            }}
          </div>
          <img v-if="item.link !== '/'" class="w-8 h-15" src="/img/arrow-right.png" alt="">
        </div>
        <!-- 二级菜单 -->
        <div v-if="item.children && item.children.length" class="text-[#666] leading-43 text-20 pl-30 pb-5">
          <div v-for="(_item, _index) in item.children" :key="_index" @click="handleLinkTo(_item.link)">
            {{ _item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
