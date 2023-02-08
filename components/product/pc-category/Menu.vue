<script lang='ts' setup>
import { ref } from 'vue'
const activeAll = ref(['all'])
const activeName = ref('')
const activeThrid = ref('')
const config = [
  {
    prop: '1',
    label: '智能硬件',
    category: [
      {
        label: '儿童歌谣',
      },
      {
        label: '国学启蒙',
      },
      {
        label: '故事绘本',
      },
      {
        label: '益智游戏',
      },
      {
        label: '科普百科',
      },
      {
        label: '科普百科',
      },
    ],
  },
  {
    prop: '2',
    label: '中文童书',
    category: [
      {
        label: '儿童歌谣1',
      },
      {
        label: '国学启蒙',
      },
      {
        label: '故事绘本',
      },
      {
        label: '益智游戏',
      },
      {
        label: '科普百科',
      },
    ],
  },
  {
    prop: '3',
    label: '英文童书',
    category: [
      {
        label: '儿童歌谣',
      },
      {
        label: '国学启蒙',
      },
      {
        label: '故事绘本',
      },
      {
        label: '益智游戏',
      },
      {
        label: '科普百科',
      },
    ],
  },
  {
    prop: '4',
    label: '益智教玩具',
    category: [
      {
        label: '儿童歌谣',
      },
      {
        label: '国学启蒙',
      },
      {
        label: '故事绘本',
      },
      {
        label: '益智游戏',
      },
      {
        label: '科普百科',
      },
    ],
  },
]
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
        <van-collapse v-model="activeName" :border="false" accordion class="pl-5 pt-13 bg-bgc">
          <van-collapse-item v-for="(item, index) in config" :key="index" :name="item.prop" :border="false">
            <template #title>
              <div
                class="font-OPPOSans-B text-11 text-black  inline-block px-3 pb-3"
                :class="[{ 'under-bg-green-four': activeName.includes(item.prop) }]"
              >
                {{ item.label }}
              </div>
            </template>
            <div class="pl-14 pt-6 bg-bgc">
              <div
                v-for="(_item, _index) in item.category" :key="_index"
                class="leading-16 text-8 cursor-pointer"
                :class="[activeThrid === _item.label ? 'text-primary' : 'text-[#666]']"
                @click="activeThrid = _item.label"
              >
                {{ _item.label }}
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
