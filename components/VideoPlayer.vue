<script setup lang="ts">
import type { CSSProperties } from 'vue'
import videojs, { type VideoJsPlayerOptions } from 'video.js'
import 'video.js/dist/video-js.min.css'
interface IProps {
  src: string
  poster?: string
  width?: string
  height?: string
  autoplay?: boolean
}
const props = defineProps<IProps>()
// video标签
const videoRef = ref<HTMLElement | null>(null)
// video实例对象
let videoPlayer: videojs.Player | null = null

const isPlayed = ref(false)

const videoWrapStyles = computed<CSSProperties>(() => {
  return {
    width: props.width || '100%',
    height: props.height || '100%',
  }
})

const handlePlay = () => {
  if (!videoPlayer)
    return
  videoPlayer.play()
}

const initVideo = () => {
  // https://gitcode.gitcode.host/docs-cn/video.js-docs-cn/docs/guides/options.html
  const options: VideoJsPlayerOptions = {
    language: 'zh-CN',
    controls: true,
    preload: 'auto',
    autoplay: props.autoplay,
    fluid: true,
    src: props.src,
    poster: props.poster,
    playsinline: true,

  }
  if (videoRef.value) {
    videoPlayer = videojs(videoRef.value, options, () => {
      if (!videoPlayer)
        return
      videoPlayer.on('play', () => isPlayed.value = true)
      videoPlayer.on('pause', () => isPlayed.value = false)
      videoPlayer.on('error', (err) => {
        console.log('视频加载发生错误', err)
      })
    })
  }
}

onMounted(() => {
  initVideo()
})

</script>

<template>
  <div :style="videoWrapStyles">
    <video id="my-player" ref="videoRef" playsinline webkit-playsinline fullscreen class="video-js"
      style="width: 100%;height: 100%;">
      <source :src="src">
    </video>
    <slot v-if="!isPlayed" name="video-play-btn" />
  </div>
</template>

<style lang="scss">
.vjs-big-play-button {
  display: none !important;
}

.video-js .vjs-control-bar {
  @apply px-30;
}
</style>
