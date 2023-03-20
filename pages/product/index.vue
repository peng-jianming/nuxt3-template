<script lang="ts" setup>
import { CategoryEnums, getCategory, getDiandubaoList, getProductList } from '~/assets/api/product'
definePageMeta({
  footerColor: 'blue',
})
useHead({
  title: '智能硬件-点读阅听一体机-毛毛虫点读笔_小彼恩littlebean',
  meta: [
    { name: 'description', content: '小彼恩（littlebean）旗下有毛毛虫点读阅听一体机、毛毛虫点读笔、外星人AI智能点读笔等智能点读硬件。' },
    { name: 'keywords', content: '小彼恩、littlebean、毛毛虫点读笔、儿童点读笔、毛毛虫点读阅听一体机' },
  ],
})

// 列表参数
const options = ref<any>({
  keywords: '',
  per_page: 10,
})
// 缓存列表请求方法等
const listParams = ref<any>()
// 根据类型(产品和点读包),决定哪个接口
const getList = (type: CategoryEnums, id: number) => {
  // 记录产品类型,作为跳转参数
  options.value.productType = type
  CategoryEnums.PRODUCT === type ? options.value.type = id : options.value.category_id = id
  listParams.value = useList(CategoryEnums.PRODUCT === type ? getProductList : getDiandubaoList, options)
  listParams.value.onload = () => {
    listParams.value.curPage += 1
    listParams.value.loadData()
  }
}

const route = useRoute()
// 获取菜单
const menu = await getCategory()
// 一级分类激活
const activeSecond = ref(route.query.activeSecond as string || menu.child[0].title)
// 二级分类激活
const activeThrid = ref(route.query.activeThrid as string || '')
// 所有分类激活
const activeAll = ref(['all'])

// 根据路由中是否有默认选中的参数,进行初始请求
if (route.query.activeThrid) {
  const result = menu.child.find(item => item.title === route.query.activeSecond)
  if (result) {
    const _result = result.child.find(item => item.title === route.query.activeThrid)
    if (_result)
      getList(_result.type, _result.id)
  }
}
else if (route.query.activeSecond) {
  const result = menu.child.find(item => item.title === route.query.activeSecond)
  if (result)
    getList(result.type, result.id)
}
else {
  getList(menu.child[0].type, menu.child[0].id)
}

const handleChange = (level: number, name: string, type: CategoryEnums, id: number) => {
  options.value.keywords = ''
  if (level === 1) {
    activeThrid.value = ''
    activeSecond.value = name
  }
  else {
    activeThrid.value = name
  }
  getList(type, id)
}
</script>

<template>
  <!-- 移动端 -->
  <div class="desktop:hidden">
    <mobile-search
      v-model="options.keywords" class="bg-bgc px-30 pt-150 pb-50" placeholder="搜索书名"
      @search="listParams.loadData(true)"
    />
    <div class="mobile-category">
      <!-- 菜单 -->
      <van-tabs
        v-model:active="activeSecond" line-width="0" class="px-30" swipe-threshold="4" :ellipsis="false"
        style="--van-tabs-line-height: 0.666rem" title-inactive-color="#999"
      >
        <van-tab v-for="item in menu.child" :key="item.id" :name="item.title">
          <template #title>
            <div
              class="text-31 px-15 font-black h-50 leading-50 bg-bgc font-OPPOSans-B"
              :class="[{ 'under-bg-green-four': activeSecond === item.title }]"
              @click="handleChange(1, item.title, item.type, item.id)"
            >
              {{
                item.title
              }}
            </div>
          </template>
          <van-tabs
            shrink line-width="0" class="mt-10 pt-10 boder-info border-t-1" :ellipsis="false"
            style="--van-tabs-nav-background: #FFFDF7"
          >
            <van-tab v-for="(_item, index) in item.child" :key="index" :name="_item.title">
              <template #title>
                <div
                  title-active-color="#fff"
                  class="text-22 mr-15 h-39 rounded-19 border-1 border-info  px-18 leading-39"
                  :class="[activeThrid === _item.title ? 'bg-primary text-bgc' : 'text-info']"
                  @click="handleChange(2, _item.title, _item.type, _item.id)"
                >
                  {{
                    _item.title
                  }}
                </div>
              </template>
            </van-tab>
          </van-tabs>
        </van-tab>
      </van-tabs>
      <!-- 列表 -->
      <div class="w-690 mx-auto relative mt-10 min-h-500">
        <div v-if="listParams.list.length || (!listParams.finished && listParams.loading)">
          <van-list v-model:loading="listParams.loading" :finished="listParams.finished" @load="listParams.onload">
            <div class="py-30 min-h-500 relative flex flex-wrap justify-between">
              <div
                v-for="item in listParams.list" :key="item.id" class=" shrink-0 w-330 mb-40"
                @click="navigateTo(`/product/detail/${item.id}?type=${options.productType}`)"
              >
                <img class="rounded-38 w-330 h-330" :src="item.cover">
                <div class="px-17 mb-10 pt-20 text-28  text-black text-left font-OPPOSans-B line-clamp-1">
                  {{ item.title || item.book_name }}
                </div>
                <div class="px-17 text-22 text-info text-left line-clamp-2" v-html="item.product_desc || item.book_desc" />
              </div>
            </div>
            <template #loading>
              <van-divider v-if="listParams.list.length " class="load-more" style="--van-divider-border-color: #9c9c9c">
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
        <img v-else class="w-289 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" src="/img/empty.gif" alt="">
      </div>
    </div>
  </div>
  <!-- pc端 -->
  <div class="hidden desktop:block">
    <div class="pt-88 ml-68 flex -mb-100 relative z-30">
      <img class="absolute -right-80 top-0 w-299" src="/img/right-cloud-bg.gif" alt="">
      <img class="absolute -left-70 top-340 w-191 h-89" src="/img/download/left-point.gif" alt="">
      <!-- 菜单 -->
      <div class="pc-category-menu w-100 min-h-300">
        <van-collapse v-model="activeAll" :border="false">
          <van-collapse-item name="all">
            <template #title>
              <div class="font-OPPOSans-B text-13 text-black ">
                所有产品
              </div>
            </template>
            <van-collapse v-model="activeSecond" :border="false" accordion class="pl-5 pt-13 bg-transparent">
              <van-collapse-item
                v-for="item in menu.child" :key="item.id" :title="item.title" :name="item.title"
                :border="false" :readonly="!item.child.length" @click="handleChange(1, item.title, item.type, item.id)"
              >
                <template #title>
                  <div
                    class="font-OPPOSans-B text-11 text-black  inline-block px-3 pb-3"
                    :class="[{ 'under-bg-green-four': activeSecond === item.title }]"
                  >
                    {{ item.title }}
                  </div>
                </template>
                <div v-if="item.child.length" class="pl-14 pt-6 bg-transparent" @click.stop>
                  <div
                    v-for="_item in item.child" :key="_item.id" class="leading-16 text-8 cursor-pointer"
                    :class="[activeThrid === _item.title ? 'text-primary' : 'text-[#666]']"
                    @click="handleChange(2, _item.title, _item.type, _item.id)"
                  >
                    {{ _item.title }}
                  </div>
                </div>
              </van-collapse-item>
            </van-collapse>
          </van-collapse-item>
        </van-collapse>
      </div>
      <!-- 列表 -->
      <div class="w-442 ml-80 min-h-400 relative">
        <div class="flex justify-between items-center mb-10">
          <div class="text-8 text-info">
            {{ activeSecond }} {{ activeThrid ? `> ${activeThrid}` : "" }}
          </div>
          <search v-model="options.keywords" @search="listParams.loadData(true)" />
        </div>
        <div v-if="listParams.list.length || (!listParams.finished && listParams.loading)">
          <van-list v-model:loading="listParams.loading" :finished="listParams.finished" @load="listParams.onload">
            <div class="flex flex-wrap">
              <div
                v-for="(item, index) in listParams.list" :key="index" class="w-130 mb-20 cursor-pointer"
                :class="[index % 3 === 0 ? 'ml-0' : 'ml-26']"
                @click="navigateTo(`/product/detail/${item.id}?type=${options.productType}`)"
              >
                <img class="w-130 h-130 rounded-15 overflow-hidden" :src="item.cover" alt="">
                <div class="px-14">
                  <div class="text-8 mt-10 mb-5 text-black font-OPPOSans-B line-clamp-1">
                    {{ item.title || item.book_name }}
                  </div>
                  <div class="text-6 text-info line-clamp-2" v-html="item.product_desc || item.book_desc" />
                </div>
              </div>
            </div>
            <template #loading>
              <van-divider v-if="listParams.list.length" class="text-22 mt-0" style="--van-divider-border-color: #9c9c9c">
                向下滑动加载更多
              </van-divider>
            </template>
            <template #finished>
              <van-divider class="text-22 mt-0" style="--van-divider-border-color: #9c9c9c">
                没有更多了
              </van-divider>
            </template>
          </van-list>
        </div>
        <img v-else class="w-226 absolute top-100 left-1/2 -translate-x-1/2" src="/img/empty.gif" alt="">
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
.mobile-category {
  @apply -mb-100;

  .van-divider {
    @apply m-0 mt-20;
  }

  .load-more {
    @apply text-22 px-50 mt-0;
  }

  .van-tab {
    padding: 0;
  }

  .van-tab--active {
    font-weight: 400;
  }

  .van-tabs__nav--complete {
    padding: 0 !important;
  }
}

.pc-category-menu {
  .van-cell {
    @apply leading-13 p-0 text-13 bg-transparent;

    &::after {
      @apply border-transparent;
    }

    .van-icon-arrow {
      @apply font-black text-6;
    }
  }

  .van-collapse-item__content {
    @apply p-0 bg-transparent;

    .van-collapse-item {
      @apply pb-10 bg-transparent;
    }
  }

}
</style>
