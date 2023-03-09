<script lang='ts' setup>
interface IProps {
  placeholder?: string
  modelValue: string
}
const props = withDefaults(defineProps<IProps>(), {
  placeholder: '',
})
const emits = defineEmits(['search', 'clear', 'update:modelValue'])

const inputRef = ref<HTMLInputElement | null>(null)
const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  },
})

const handleSearch = () => {
  emits('search')
}

const handleClear = () => {
  inputValue.value = ''
  inputRef.value!.blur()
  emits('clear')
}
</script>

<template>
  <div class="flex desktop:hidden">
    <div class="flex h-72 w-564 flex-1 items-center overflow-hidden rounded-l-10 bg-[#F4F4F4] leading-72">
      <img class="h-24 w-24 ml-25 mr-15" src="/img/magnifier.png" alt="">
      <div class="flex h-30 flex-1 items-center">
        <input ref="inputRef" v-model.trim="inputValue" type="text" :placeholder="placeholder"
          class="h-full w-full border-0 bg-[#F4F4F4] text-25 outline-none" @keyup.enter="handleSearch">
        <svg v-if="inputValue" class="mx-20 h-44 w-44" aria-hidden="true" @click="handleClear">
          <use xlink:href="#icon-icon_web-deleteicon" />
        </svg>
      </div>
    </div>
    <div class="h-72 w-127 bg-cover text-center text-32 leading-72 text-bgc"
      style="background-image: url(/img/search-btn.png);" @click="handleSearch">
      搜索
    </div>
  </div>
</template>
