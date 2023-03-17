<script lang="ts" setup>
const pageConfig = {
  title: '关于我们',
  desc: [
    '小彼恩创立于2015年，专注于0-12岁儿童点读产品及服务，与凯迪克图书品牌同隶属于孩宝小镇集团。同时，小彼恩还与凯迪图书在英文点读产品上达成了深度合作。',
    '品牌基于早期阅读价值，结合智能点读技术，为儿童提供优质的点读笔、点读童书、点读益智玩具等产品以及专业的亲子共读指导服务，不断践行“亲子陪伴”的理念，为万千家庭带来更有趣、更快乐的亲子阅读体验。同时，小彼恩也致力于打造丰富的儿童阅读场景，培养孩子的阅读兴趣、习惯和能力，让每个孩子都能享受寓教于乐的亲子阅读。',
    '发展至今，小彼恩已拥有2500+丰富的精品图书资源，强大的产品研发体系、专业的阅读导师体系，并不断整合全球资源，与企鹅兰登、牛津大学、中国大百科全书、乐乐趣、中信等国内外30+知名出版社达成战略合作，并获得彩虹兔SingAlong欢唱童谣、牛津阅读树等众多热门童书的点读独家授权。',
  ],
  tag: [
    {
      title: '品牌愿景',
      desc: '让小彼恩成为孩子童年生活的一部分',
    },
    {
      title: '品牌使命',
      desc: '让每个孩子都能享受寓教于乐的亲子阅读',
    },
    {
      title: '品牌口号',
      desc: '品质点读，就选小彼恩',
    },
  ],
}
</script>

<template>
  <!-- 移动端 -->
  <div class="desktop:hidden">
    <div class=" px-88 mt-27">
      <div class="text-[#0000FF] text-42 mobile-under-bg-green-four px-10 w-190 font-OPPOSans-H">
        {{ pageConfig.title }}
      </div>
      <div class="text-21 text-[#666] pl-14 pt-40 leading-38">
        <p v-for="(item, index) in pageConfig.desc" :key="index" class="mb-25 indent-30">
          {{ item }}
        </p>
      </div>
      <img class="mt-25 w-657 h-138" src="/img/about/mobile/about-me-bg.gif" alt="">
    </div>
    <div class="mt-88">
      <div class="vision-bg w-589 h-119 ml-82 relative">
        <div class="text-33 text-bgc w-66 absolute left-50 top-22 z-10 leading-38 font-OPPOSans-H">
          {{ pageConfig.tag[0].title }}
        </div>
        <div class="text-black text-25 absolute top-60 right-25">
          {{ pageConfig.tag[0].desc }}
        </div>
      </div>
      <div class="mission-bg w-607 h-141 ml-57 mt-19 relative">
        <div class="text-33 text-primary absolute -right-31 top-109 z-10 leading-38 font-OPPOSans-H">
          {{ pageConfig.tag[1].title }}
        </div>
        <div class="text-black text-25 absolute top-95 left-25">
          {{ pageConfig.tag[1].desc }}
        </div>
      </div>
      <div class="slogan-bg w-489 h-128 ml-120 mt-27 relative">
        <div class="text-33 text-[#FF0085] absolute left-130 top-42 w-66 z-10 leading-38 font-OPPOSans-H">
          {{ pageConfig.tag[2].title }}
        </div>
        <div class="text-black text-25 absolute top-80 right-27">
          {{ pageConfig.tag[2].desc }}
        </div>
      </div>
    </div>
  </div>

  <!-- pc端 -->
  <div class="hidden desktop:block">
    <div class="about-me-bg w-549 h-314 m-auto mt-30 relative">
      <div class=" absolute under-bg-green-four text-20 text-[#001CF2] px-7 left-22 top-57 font-OPPOSans-H">
        {{ pageConfig.title }}
      </div>
      <div class="text-7 text-[#fffdf7] absolute left-28 top-129 w-280">
        <p v-for="(item, index) in pageConfig.desc" :key="index" class="mb-15">
          {{ item }}
        </p>
      </div>
    </div>
    <div class=" h-216 w-533 relative mt-49 mx-auto">
      <div class="absolute w-388 h-72">
        <img src="/img/about/vision-bg.gif" alt="" class="w-388 h-72 absolute">
        <div class="text-20 text-bgc w-40 absolute left-36 top-13 z-10 leading-23 font-OPPOSans-H">
          {{ pageConfig.tag[0].title }}
        </div>
        <div class="text-black text-15 absolute top-37 right-27">
          {{ pageConfig.tag[0].desc }}
        </div>
      </div>
      <div class="absolute w-393 h-83 top-56 right-0">
        <img src="/img/about/mission-bg.gif" alt="" class="w-393 h-83 absolute right-0 top-0">
        <div class="text-20 text-primary absolute -right-19 bottom-0 z-10 leading-20 font-OPPOSans-H">
          {{ pageConfig.tag[1].title }}
        </div>
        <div class="text-black text-15 absolute bottom-4 left-26">
          {{ pageConfig.tag[1].desc }}
        </div>
      </div>
      <div class="absolute w-319 h-77 left-17 bottom-0">
        <img src="/img/about/slogan-bg.gif" alt="" class="w-318 h-77 absolute">
        <div class="text-20 text-primary w-40 absolute left-80 top-32 z-10 leading-23 font-OPPOSans-H">
          {{ pageConfig.tag[2].title }}
        </div>
        <div class="text-black text-15 absolute bottom-5 right-31">
          {{ pageConfig.tag[2].desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-me-bg {
  background: url('/img/about/about-me-bg.gif') no-repeat center top;
  background-size: cover;
}

.vision-bg {
  background: url('/img/about/mobile/vision-bg.gif') no-repeat center top;
  background-size: cover;
}

.mission-bg {
  background: url('/img/about/mobile/mission-bg.gif') no-repeat center top;
  background-size: cover;
}

.slogan-bg {
  background: url('/img/about/mobile/slogan-bg.gif') no-repeat center top;
  background-size: cover;
}
</style>
