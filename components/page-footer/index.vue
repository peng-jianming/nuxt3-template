<script lang="ts" setup>
import BlueBackground from './BlueBackground.vue'
import RedBackground from './RedBackground.vue'
import GreenBackground from './GreenBackground.vue'
const route = useRoute()

const currentFooterBackground = computed(() => {
  const map = {
    green: GreenBackground,
    red: RedBackground,
    blue: BlueBackground,
  }
  return map[route.meta.footerColor as keyof typeof map] || BlueBackground
})
</script>

<template>
  <component :is="currentFooterBackground">
    <div class="desktop:w-580 desktop:mx-auto">
      <!-- pc-产品服务 -->
      <page-footer-product />
      <!-- pc-分割线 -->
      <div class="hidden desktop:block w-670 border-b-1 border-b-white my-1 -ml-45" />
      <div class="m-auto text-center text-white">
        <!-- 友链 -->
        <div class="text-19 desktop:text-7 desktop:py-9">
          友情链接 ：<a href="https://www.kdkts.com" target="_blank">凯迪克童书</a>
          ｜
          <a href="https://www.baobaobooks.com" target="_blank">孩宝小镇</a>
        </div>
        <!-- mobile-关注信息 -->
        <div class="flex flex-col items-center desktop:hidden">
          <page-footer-share class="py-15" />
          <div class="text-22 font-bold mb-20 font-OPPOSans-B">
            关注小彼恩
          </div>
        </div>
        <!-- 网页备案信息 -->
        <div class="text-13 desktop:text-7 leading-25 desktop:leading-10">
          <div class="desktop:flex desktop:justify-center">
            <div class="desktop:mr-15">
              Copyright © 2023 深圳市小彼恩文教科技有限公司 | 粤ICP备16088414号
            </div>
            <div>Shenzhen little bean Culture education Technology Co., Ltd.</div>
          </div>
          <div>
            深圳市宝安区西乡街道劳动社区万庭大厦1号楼1402
          </div>
        </div>
      </div>
    </div>
  </component>
</template>
