<script lang='ts' setup>
import { IVideoItem } from '~~/assets/api/parenting';
interface IProps {
  list: IVideoItem[]
}
defineProps<IProps>()

const emits = defineEmits(['openDialog'])

const map = {
  0: [
    'left-163 top-32 z-20 ',
    'left-373 top-48 z-10',
    'left-0 top-48 z-10',
  ],
  1: [
    'left-0 top-48 z-10',
    'left-163 top-32 z-20',
    'left-373 top-48 z-10',
  ],
  2: [
    'left-373 top-48 z-10',
    'left-0 top-48 z-10',
    'left-163 top-32 z-20',
  ],
}
const currentActive = ref(0)
const handleChange = (index: number, url: string) => {
  if (currentActive.value === index)
    emits('openDialog', url)
  else
    currentActive.value = index
}
</script>

<template>
  <div class="w-594 h-240 m-auto relative">
    <div v-for="(item, index) in list" :key="index" class=" transition-all duration-500 absolute cursor-pointer"
      :class="[map[currentActive as keyof typeof map][index]]" @click="handleChange(index, item.resource_url)">
      <img class="rounded-11 transition-all duration-500"
        :class="[index === currentActive ? 'w-270 h-152' : 'w-221 h-124']" :src="item.resource_cover" alt="">
      <div class="text-12 transition-all duration-500  text-center"
        :class="[index === currentActive ? 'mt-28 font-OPPOSans-B text-black ' : 'text-transparent']">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
