<script lang='ts' setup>
import { computed, ref } from 'vue'
const router = useRouter()
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
const activeSmallCate = ref('儿童歌谣')
const activeName = ref('1')
const currentSmallCate = computed(() => {
  const result = config.find(item => item.prop === activeName.value)
  return result ? result.category : []
})

const loadBigCate = () => {
  setTimeout(() => {
    [
      {
        id: 1,
        label: '智能硬件',
      },
      {
        id: 2,
        label: '中文童书',
      },
      {
        id: 3,
        label: '英文童书',
      },
      {
        id: 4,
        label: '益智教玩具',
      },
    ]
  }, 1000)
}
const loading = ref(false)
const finished = ref(false)
const num = ref(0)
const onLoad = () => {
  setTimeout(() => {
    num.value += 4
    loading.value = false
    if (num.value > 30)
      finished.value = true
  }, 1000)
}
</script>

<template>
  <div class="mobile-category">
    <van-tabs
      v-model:active="activeName" line-width="0" class="px-30" swipe-threshold="4" :ellipsis="false"
      style="--van-tabs-line-height: 0.666rem" title-inactive-color="#999"
    >
      <van-tab v-for="{ prop, label } in config" :key="prop" :name="prop">
        <template #title>
          <div
            class="text-31 px-15 font-black h-50 leading-50 bg-bgc font-OPPOSans-B"
            :class="[{ 'under-bg-green-four': activeName === prop }]"
          >
            {{
              label
            }}
          </div>
        </template>
        <van-tabs
          v-model:active="activeSmallCate" line-width="0" class="mt-15 border-t-1 pt-10 boder-info"
          :ellipsis="false" style="--van-tabs-nav-background: #FFFDF7"
        >
          <van-tab v-for="(item, index) in currentSmallCate" :key="index" :name="item.label">
            <template #title>
              <div
                title-active-color="#fff"
                class="text-22 mr-15 h-39 rounded-19 border-1 border-info  px-18 leading-39" :class="[activeSmallCate === item.label ? 'bg-primary text-bgc' : 'text-info']"
              >
                {{
                  item.label
                }}
              </div>
            </template>
          </van-tab>
        </van-tabs>
      </van-tab>
    </van-tabs>
    <div class="w-690 mx-auto relative mt-10">
      <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
        <div class="py-30 min-h-500 relative">
          <van-grid
            v-if="num" :column-num="2" :border="false" :center="false"
            style="--van-grid-item-content-background: #FFFDF7;"
          >
            <van-grid-item v-for="value in num" :key="value">
              <div @click="router.push({ path: `/product/detail/${num}` })">
                <img
                  class="rounded-38 bg-[#C6E4F6] w-330 h-330"
                  src="https://oss.baobaobooks.net/basicAdmin/cover/202209/166271929169975.jpg?x-oss-process=image/resize,m_mfit,h_400,w_400/quality,q_90"
                  alt="唱! 童谣"
                >
                <div class="mb-10 pt-20 text-28  text-black text-left font-OPPOSans-B">
                  <button class="px-17">
                    唱! 童谣
                  </button>
                </div>
                <div class="px-17 text-22 text-info text-left line-clamp-2">
                  423世界读书日，littlebean小彼恩携国学启蒙新品
                </div>
              </div>
            </van-grid-item>
          </van-grid>
          <img
            v-else class="w-289 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" src="/img/empty.png"
            alt=""
          >
        </div>
        <template #loading>
          <van-divider class="load-more" style="--van-divider-border-color: #9c9c9c">
            向下滑动加载更多
          </van-divider>
        </template>
        <template #finished>
          <van-divider class="load-more" style="--van-divider-border-color: #9c9c9c">
            没有更多了
          </van-divider>
        </template>
      </van-list>
    </div>
  </div>
</template>

<style lang='scss'>
.mobile-category {
  @apply min-h-750 -mb-100;

  .load-more {
    @apply text-22 px-50 mt-0;
  }

  .van-tab {
    padding: 0;
  }

  .van-tabs__nav--complete {
    padding: 0 !important;
  }

  .van-grid-item__content {
    @apply px-0 pb-30 pt-0;
  }

  .van-grid-item:nth-child(2n+1) {
    .van-grid-item__content {
      @apply pr-15;
    }
  }

  .van-grid-item:nth-child(2n) {
    .van-grid-item__content {
      @apply pl-15;
    }
  }
}
</style>
