<script lang='ts' setup>
interface IProps {
  config: IBreadcrumbItem[]
}
defineProps<IProps>()
</script>

<template>
  <div class="text-info text-25 desktop:text-8 line-clamp-1">
    <span v-for="(item, index) in config" :key="index">
      <span>{{ index ? ' > ' : '' }}</span>
      <nuxt-link v-if="item.link" :to="item.link">{{ item.title }}</nuxt-link>
      <span v-else class="cursor-pointer">{{ item.title }}</span>
    </span>
  </div>
</template>
