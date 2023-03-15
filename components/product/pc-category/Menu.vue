<script lang='ts' setup>
import { IGetCategoryResponse } from '~/assets/api/product'
interface IProps {
  menuConfig: IGetCategoryResponse[],
  activeThrid: string,
  activeSecond: string
}
const props = defineProps<IProps>()
const emits = defineEmits(['update:activeThrid', 'update:activeSecond', 'getList'])

const localActiveSecond = computed({
  get() {
    return props.activeSecond
  },
  set(val) {
    emits('update:activeThrid', '')
    if(val) emits('update:activeSecond', val)
    
  }
})
const localActiveThrid = computed({
  get() {
    return props.activeThrid
  },
  set(val) {
    emits('update:activeThrid', val)
  }
})
const activeAll = ref(['all'])
</script>

<template>
  <div class="pc-category-menu w-100 min-h-300">
    <van-collapse v-model="activeAll" :border="false">
      <van-collapse-item name="all">
        <template #title>
          <div class="font-OPPOSans-B text-13 text-black ">
            所有产品
          </div>
        </template>
        <van-collapse v-model="localActiveSecond" :border="false" accordion class="pl-5 pt-13 bg-bgc">
          <van-collapse-item v-for="item in menuConfig" :key="item.id" :title="item.title" :name="item.title" :border="false" >
            <template #title>
              <div class="font-OPPOSans-B text-11 text-black  inline-block px-3 pb-3"
                :class="[{ 'under-bg-green-four': localActiveSecond === item.title }]"
                @click="emits('getList', item.type, item.id)">
                {{ item.title }}
              </div>
            </template>
            <div class="pl-14 pt-6 bg-bgc">
              <div v-for="_item in item.child" :key="_item.id" class="leading-16 text-8 cursor-pointer"
                :class="[localActiveThrid === _item.title ? 'text-primary' : 'text-[#666]']"
                @click="localActiveThrid = _item.title">
                {{ _item.title }}
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<style lang='scss' scoped>
.pc-category-menu {
  :deep(.van-cell) {
    @apply leading-13 p-0 text-13 bg-bgc;

    &::after {
      @apply border-transparent;
    }

    .van-icon-arrow {
      @apply font-black text-6;
    }
  }

  :deep(.van-collapse-item__content) {
    @apply p-0;

    .van-collapse-item {
      @apply pb-10 bg-bgc;
    }
  }

}
</style>
