<script lang='ts' setup>
onMounted(() => {
  loadScript('https://webapi.amap.com/maps?v=2.0&key=b65ac20719e827208fb4c94bf9bc48e5').then(
    () => {
      const lnglat = [113.85899, 22.571858]
      const map = new window.AMap.Map('mapContainer', {
        zoom: 15,
        center: lnglat,
      })
      const marker = new window.AMap.Marker({
        position: new window.AMap.LngLat(...lnglat),
      })
      map.add(marker)
    },
  )
})
</script>

<template>
  <div
    class=" bg-no-repeat bg-cover bg-mobile-contact-us desktop:bg-contact-us  mt-11 w-665 h-421 desktop:w-531 desktop:h-307 m-auto relative">
    <div
      class="mobile-under-bg-blue-four desktop:under-bg-blue-four text-33 desktop:text-20 text-bgc  absolute left-1/2 -translate-x-[50%] top-38 desktop:top-51 px-7 font-OPPOSans-H">
      联系我们
    </div>
    <div class="flex absolute left-42 bottom-48 desktop:bottom-30 items-center">
      <div class="w-280 desktop:w-200 whitespace-nowrap">
        <div class="text-black text-20 desktop:text-12 mb-16 desktop:mb-12 font-OPPOSans-B">
          深圳市小彼恩文教科技有限公司
        </div>
        <div class="text-info text-14 desktop:text-7 leading-24 desktop:leading-17 desktop:whitespace-nowrap">
          <p class="whitespace-pre-wrap">
            公司地址：深圳市宝安区西乡街道劳动社区万庭大厦1号楼1402
          </p>
          <p>点读笔售后热线电话：0755-36564470</p>
          <p>企业邮箱：littlebean@xiaobien.com</p>
          <p>官方微博：@小彼恩官博</p>
          <p>官方公众号：小彼恩公众号</p>
          <p>小红书：小彼恩</p>
        </div>
      </div>
      <div id="mapContainer" class="my-0 ml-25 desktop:ml-40  w-269 h-213 desktop:w-220 desktop:h-150 rounded-15" />
    </div>
  </div>
</template>
