<script lang='ts' setup>
defineProps({
  bgImg: {
    type: String,
    default: '',
  },
})
const emits = defineEmits(['openDialog'])
const list = [
  {
    videoUrl: 'https://oss.xiaobien.com/static/videos/advertise-home2.mp4',
    bannerUrl: 'https://oss.baobaobooks.net/college/cover/202105/162148069121745.jpg',
    text: '亲子共读指导1',
  },
  {
    videoUrl: 'https://oss.xiaobien.com/static/videos/advertise-home2.mp4',
    bannerUrl: 'https://oss.baobaobooks.net/college/cover/202105/162148069121745.jpg',
    text: '亲子共读指导2',
  },
  {
    videoUrl: 'https://oss.xiaobien.com/static/videos/advertise-home2.mp4',
    bannerUrl: 'https://oss.baobaobooks.net/college/cover/202105/162148069121745.jpg',
    text: '亲子共读指导3',
  },
]
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
const currentActive = ref(1)
const handleChange = (index: number) => {
  if (currentActive.value === index)
    emits('openDialog')
  else
    currentActive.value = index
}
</script>

<template>
  <div class="w-594 h-240 m-auto relative">
    <div
      v-for="(item, index) in list" :key="index" class=" transition-all duration-500 absolute cursor-pointer"
      :class="[map[currentActive as keyof typeof map][index]]" @click="handleChange(index)"
    >
      <img
        class="rounded-11 transition-all duration-500"
        :class="[index === currentActive ? 'w-270 h-152' : 'w-221 h-124']" :src="item.bannerUrl" alt=""
      >
      <div
        class="text-12 transition-all duration-500  text-center"
        :class="[index === currentActive ? 'mt-28 font-OPPOSans-B text-black ' : 'text-transparent']"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>
