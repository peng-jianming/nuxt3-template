<script lang="ts" setup>
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
const input = ref('')
</script>

<template>
  <div>
    <div class="desktop:hidden">
      <mobile-search v-model="input" class="bg-bgc px-30 pt-200 pb-50" placeholder="搜索书名" />
      <product-category />
    </div>
    <div class="hidden desktop:block">
      <product-pc-category />
    </div>
  </div>
</template>
