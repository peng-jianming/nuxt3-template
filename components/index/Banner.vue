<template>
  <div>
    <!-- 移动端 -->
    <div class="relative desktop:hidden overflow-hidden">
      <img class="desktop:hidden w-full mt-150" src="/img/index/mobile/banner.png">
      <img class="w-596 h-262 m-auto mt-40" src="/img/index/mobile/data-bg.png">
      <img class="w-320 absolute -right-135 top-600" src="/img/index/data-cloud-bg.gif">
    </div>
    <!-- pc端 -->
    <div class="hidden desktop:block relative overflow-hidden">
      <img class="w-full" src="/img/index/banner.png">
      <div class="flex items-center flex-col">
        <img class="w-388 h-143 mt-18" src="/img/index/data-bg.png">
        <div class="text-black text-15 mt-10 pl-30 font-OPPOSans-B">
          品质点读：正版授权 安全环保 精品优选
        </div>
      </div>
      <img class="w-280 absolute -right-120 top-255" src="/img/index/data-cloud-bg.gif">
    </div>
  </div>
</template>
