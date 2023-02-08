<script lang='ts' setup>
const isShow = ref(false)
const currentVideoSrc = ref('')
const videoDialogBg = ref('')
const pageConfig = [
  {
    title: '“育”教于乐',
    titleBg: '/img/parenting/mobile/under-bg-blue.png',
    videoBgImg: '/img/parenting/mobile/video-bg-red.png',
    videoDialogBg: '/img/parenting/video-play-red.png',
    desc: '“只有品尝到学习的喜悦与快乐后，孩子才会积极主动地去学习。”<br/>小彼恩围绕亲子共读指导、绘本真慧玩、<br class="desktop:hidden"/>阅听悦童谣等品质育儿内容，<br class="desktop:hidden"/>为亲子家庭带来欢乐满满的育儿知识内容，<br/>携手每一个亲子家庭品质成长。',
  },
  {
    title: '“育”见名家',
    titleBg: '/img/parenting/mobile/under-bg-yellow.png',
    videoBgImg: '/img/parenting/mobile/video-bg-blue.png',
    videoDialogBg: '/img/parenting/video-play-blue.png',
    desc: '在孩子的心田播下一颗国学的种子，<br class="desktop:hidden"/>可以让优秀的国学文化不断滋养孩子的心灵。<br/>小彼恩联合父母必读特邀国学文化教授、学者，<br class="desktop:hidden"/>通过深度访谈的形式，制作了“国学启蒙大咖说”栏目，<br/>为家长们阐释国学启蒙教育的重要意义和方法，<br class="desktop:hidden"/>让更多少年儿童接受到正确有效的国学启蒙教育。',
  },
  {
    title: '“育”儿有方',
    titleBg: '/img/parenting/mobile/under-bg-green.png',
    videoBgImg: '/img/parenting/mobile/video-bg-yellow.png',
    videoDialogBg: '/img/parenting/video-play-yellow.png',
    desc: '在养育孩子的过程中，家长总会面临各种各样的挑战与困惑。<br/>如何化解育儿道路上的重重困难，实现科学养育呢？<br/>育儿先育己，小彼恩推出“育”儿有方系列内容，<br class="desktop:hidden"/>陪你和孩子一起成长， 让品质育儿更轻松。',
  },
]
const handleOpenDialog = (bg: string, src?: string) => {
  currentVideoSrc.value = 'https://oss.xiaobien.com/static/videos/advertise-home2.mp4'
  videoDialogBg.value = bg
  isShow.value = true
}
</script>

<template>
  <div class="-mb-100 desktop:-mb-50">
    <div v-for="(item, index) in pageConfig" :key="index" class="flex flex-col items-center mt-40 desktop:mt-60">
      <div
        class="text-41 desktop:text-19  text-[#0000ff] pr-15 desktop:pr-10  bg-contain bg-no-repeat bg-bottom font-OPPOSans-H"
        :style="{ backgroundImage: `url(${item.titleBg})` }"
      >
        {{
          item.title }}
      </div>
      <div
        class="text-22 desktop:text-10 text-[#666] text-center mt-20 desktop:mt-15 leading-39 desktop:leading-14"
        v-html="item.desc"
      />
      <!-- 移动端 -->
      <div class="desktop:hidden">
        <div class="mt-35 relative" @click="handleOpenDialog(item.videoDialogBg)">
          <img class="w-675 h-438 relative z-10 pointer-events-none" :src="item.videoBgImg">
          <div class="absolute w-591 h-332  left-21 bottom-34">
            <img class="w-full h-full" src="https://oss.baobaobooks.net/college/cover/202105/162148069121745.jpg" alt="">
          </div>
        </div>
        <div class="px-60 pt-15  text-25  text-primary text-center" @click="navigateTo('/parenting/abc-list')">
          查看更多 >>
        </div>
      </div>
      <!-- PC端 -->
      <div class="hidden desktop:block relative mt-10">
        <parenting-loop-pic :bg-img="item.videoDialogBg" @openDialog="handleOpenDialog(item.videoDialogBg)" />
        <img class="w-309 h-200 absolute top-0 z-30 left-153 pointer-events-none" :src="item.videoBgImg" alt="">
        <img
          class="w-41 h-27 absolute top-1/2 -translate-y-1/2 -right-55 cursor-pointer"
          src="/img/parenting/arrow-right.png" @click="navigateTo('/parenting/abc-list')"
        >
      </div>
    </div>
  </div>
  <video-dialog v-model:is-show="isShow" :src="currentVideoSrc" :bg-img="videoDialogBg" />
</template>
