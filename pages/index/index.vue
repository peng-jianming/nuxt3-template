<script lang='ts' setup>
import { useCounterStore } from '@/store/index'
const store = useCounterStore()
</script>

<template>
  <div class="main-container">
    <div class="main-container-content" @click="store.countPlusOne">
      内容区域 {{ store.count }}
    </div>
  </div>
</template>

<style lang="scss">
.main-container {
    height: 1000px;
    background-color: #dde;

    &-content {
        width: 1200px;
        height: 100%;
        margin: auto;
        background-color: #dd1;
    }
}
</style>
