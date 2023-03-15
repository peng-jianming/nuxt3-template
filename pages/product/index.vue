<script lang="ts" setup>
import { getCategory, getProductList, getDiandubaoList, CategoryEnums } from '~/assets/api/product';
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
const menu = await getCategory()
const activeSecond = ref(menu.child[0].title)
const activeThrid = ref('')

const options = ref<any>({
  keyword: ''
})
const listParams = ref<any>()

const getList = (type: CategoryEnums, id: number) => {
  CategoryEnums.PRODUCT === type ? options.value.type = id : options.value.category_id = id
  listParams.value = useList(CategoryEnums.PRODUCT === type ? getProductList : getDiandubaoList, options)
}
getList(menu.child[0].type, menu.child[0].id)
</script>

<template>
  <div>
    <div class="desktop:hidden">
      <mobile-search v-model="options.keyword" class="bg-bgc px-30 pt-200 pb-50" placeholder="搜索书名" />
      <!-- <product-category /> -->
    </div>
    <div class="hidden desktop:block">
      <product-pc-category :menu-config="menu.child" v-model:activeSecond="activeSecond"
        v-model:activeThrid="activeThrid" :list-params="listParams" @getList="getList"/>
    </div>
  </div>
</template>
