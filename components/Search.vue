<script lang='ts' setup>
interface IProps {
  placeholder?: string
  modelValue: string
}
const props = withDefaults(defineProps<IProps>(), {
  placeholder: '请输入搜索内容',
})
const emits = defineEmits(['search', 'update:modelValue'])

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
</script>

<template>
  <div class="relative w-100 h-17">
    <input
      v-model.trim="inputValue"
      class="float-left w-full h-full rounded-8 border-primary text-6 leading-17 bg-bgc border-1 pl-10 pr-20 outline-none"
      type="text" :placeholder="placeholder" @keyup.enter="handleSearch"
    >
    <img class="w-9 h-9 absolute right-7 top-4" src="/img/magnifier.png" alt="">
  </div>
</template>
