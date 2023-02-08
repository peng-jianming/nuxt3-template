<script lang="ts" setup>
import { ref } from 'vue'
const emits = defineEmits(['change'])

const input = ref(1)
const page = ref(1)

const pageChange = (num: number) => {
  input.value = num
  page.value = num
  emits('change', num)
}
</script>

<template>
  <div class="pagination-wrapper">
    <div class="flex items-center text-info text-7 mr-20 font-OPPOSans-B">
      <span class=" shrink-0">跳至</span>
      <input
        v-model="input" type="text"
        class="w-27 h-15 leading-15 bg-[#E7E7E7] rounded-7 text-center text-7 outline-none px-3 mx-3" @keyup.enter="pageChange(input)"
      >
      <span>页</span>
    </div>
    <van-pagination v-model="page" v-bind="$attrs" force-ellipses @change="pageChange">
      <template #prev-text>
        <img class="w-15 h-15" src="/img/pagination-left.png" alt="">
      </template>
      <template #next-text>
        <img class="w-15 h-15" src="/img/pagination-right.png" alt="">
      </template>
      <template #page="{ text }">
        <div class="custom-text">
          {{ text }}
        </div>
      </template>
    </van-pagination>
  </div>
</template>

<style lang="scss">
.pagination-wrapper {
    @apply flex items-center;

    .van-pagination__items {
        @apply items-center;
    }

    // 所有item
    .van-pagination__item {

        // 当前激活按钮
        &.van-pagination__item--active {
            .custom-text {
                @apply bg-transparent text-white;
                background-image: url(/img/pagination-active.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-clip: border-box;
            }

        }

        &::after {
            @apply border-none bg-transparent border-transparent;
        }

        &:nth-child(2) {
            @apply rounded-l-8;

        }

        &:nth-last-child(2) {
            @apply rounded-r-8;
        }
    }

    // 数字部分
    .van-pagination__item--page {
        @apply w-16 h-15 text-7 text-info font-OPPOSans-B bg-transparent flex-none bg-[#E7E7E7] min-w-0;

        .custom-text {
            @apply h-16 leading-18 -mt-2;
        }
    }

    // 后退按钮
    .van-pagination__item--prev {
        @apply mr-6 h-15 w-15 bg-transparent border-none;

        button {
            @apply flex-none
        }

    }

    // 前进按钮
    .van-pagination__item--next {
        @apply ml-6 h-15 w-15 bg-transparent border-none;

        button {
            @apply flex-none
        }

    }
}
</style>
