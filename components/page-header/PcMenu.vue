<script lang='ts' setup>
defineProps<IProps>()
const route = useRoute()
interface IProps {
  config: IMenu[]
}
const active = ref('')
watch(route, (val) => {
  active.value = val.fullPath.includes('/', 2) ? val.fullPath.substring(0, val.fullPath.indexOf('/', 2)) : val.fullPath
}, { immediate: true })
</script>

<template>
  <div class="title-bg-red h-17 px-10 py-2 text-9 text-white inline-flex flex-nowrap font-OPPOSans-M">
    <template v-for="item in config" :key="item.link">
      <div
        v-if="!item.isShowMobile" class="px-9 h-13 leading-14 cursor-pointer whitespace-nowrap relative"
        :class="[{ 'title-bg-white text-primary': active === item.link }, { group: item.children && item.children.length }]"
      >
        <div class="flex items-center" @click="navigateTo(item.link, { external: item.external })">
          {{ item.label }}
        </div>
        <div
          v-if="item.children && item.children.length && item.children.every(item => !item.isShowMobile)"
          class="hidden group-hover:flex flex-col text-9 leading-15  rounded-1 p-1 pb-0 box-content overflow-hidden font-OPPOSans-M bg-primary absolute top-13 left-1/2 -translate-x-1/2"
        >
          <div
            v-for="_item in item.children" :key="_item.link" class="bg-bgc px-5 mb-1 rounded-1 text-primary"
            @click="navigateTo(item.link, { external: item.external })"
          >
            {{
              _item.label
            }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang='scss' scoped>
.title-bg-red {
  background-image: url('/img/header/nav-bar-red.png');
  background-size: 100% 100%;
}

.title-bg-white {
  background-image: url('/img/header/nav-bar-white.png');
  background-size: 100% 100%;
}
</style>
