<script lang='ts' setup>
interface IProps {
  title: string
  time: string
  content: string
  breadcrumbConfig: IBreadcrumbItem[]

}
defineProps<IProps>()
</script>

<template>
  <div class="pt-150 desktop:pt-90 -mb-80 relative">
    <img class="hidden desktop:block absolute -right-60 top-0 w-299" src="/img/right-cloud-bg.gif" alt="">
    <img class="hidden desktop:block  absolute left-0 top-283 w-191 h-89" src="/img/download/left-point.png" alt="">
    <div class="px-35 desktop:px-150 min-h-300">
      <breadcrumb class="my-40 desktop:mt-0 desktop:mb-15" :config="breadcrumbConfig" />
      <div class="flex flex-col items-center">
        <div class="text-[32px] mb-[25px] text-[#0000FF] mx-auto custom-under-line font-OPPOSans-B">
          {{ title }}
        </div>
        <div class="text-[17px] mb-[30px] text-info">
          {{ time }}
        </div>
        <div class="content-container" v-html="content" />
        <!-- 倒数第二个为列表,必有 -->
        <div
          class=" text-primary text-[20px] cursor-pointer mt-[30px]"
          @click="navigateTo(breadcrumbConfig[breadcrumbConfig.length - 2].link)"
        >
          &lt;&lt; 返回列表
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
.content-container * {
    font-size: 14px;
    line-height: 32px;
    color: #7c8a95;
    position: relative;
    z-index: 10;
}
</style>
