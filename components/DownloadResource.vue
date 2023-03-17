<template>
    <div class="w-198 h-58 flex text-28 leading-58 pl-25 mx-auto desktop:mx-0 mb-20 group desktop:order-3 order-4 desktop:my-20 desktop:w-69 desktop:h-20 desktop:text-9 desktop:pl-10 desktop:leading-20 text-primary bg-download-bg bg-no-repeat bg-cover cursor-pointer hover:bg-download-bg-active hover:text-bgc"
        @click="handleDownload">
        <van-loading v-if="loading" type="spinner">下载中...</van-loading>
        <div v-else>{{ downloadBtnText }}</div>
    </div>
</template>
<script lang="ts" setup>
import JSZip from "jszip";
import { saveAs } from "file-saver";
interface IProps {
    list: string[],
    name?: string,
    downloadBtnText?: string
}

const props = withDefaults(defineProps<IProps>(), {
    name: '压缩文件',
    downloadBtnText: '下载'
})

const deviceStore = useDeviceStore()

const loading = ref(false)

const handleDownload = async () => {
    if (deviceStore.device === deviceEnums.PC) {
        if (props.list.length === 1) {
            return location.href = props.list[0]
        } else {
            if (!loading.value) {
                const zip = new JSZip()
                loading.value = true
                await Promise.all(props.list.map(url =>
                    $fetch(url, {
                        responseType: "arrayBuffer"
                    }).then((res: any) => {
                        zip.file(url.substring(url.lastIndexOf("/") + 1), res);
                    })))
                zip.generateAsync({
                    type: "blob"
                }).then((content: any) => {
                    saveAs(content, `${props.name}.zip`);
                    loading.value = false
                })
            }
        }
    } else {
        const iosLink = 'https://apps.apple.com/cn/app/id1502189335'
        const androidLink = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.hb.xiaobien'
        window.open(/iPad|iPhone|iPod/i.test(navigator.userAgent) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ? iosLink : androidLink)
    }
}

</script>
<style lang="scss">
.van-loading__spinner {
    @apply w-30 h-30  desktop:w-10 desktop:h-10 desktop:-ml-3 group-hover:text-white;

}

.van-loading__text {
    @apply text-25 desktop:text-9 group-hover:text-white;
}
</style>
