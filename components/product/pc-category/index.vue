<script lang='ts' setup>
const attrs = useAttrs()
</script>

<template>
  <div class="pt-88 ml-68 flex -mb-100 relative">
    <img class="absolute -right-80 top-0 w-299" src="/img/right-cloud-bg.gif" alt="">
    <img class="absolute -left-70 top-340 w-191 h-89" src="/img/download/left-point.png" alt="">
    <product-pc-category-menu v-bind="attrs" />
    <product-pc-category-list v-bind="attrs"/>
  </div>
</template>
