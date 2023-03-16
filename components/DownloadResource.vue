<template>
    <van-button :loading="loading" loading-type="spinner" :disabled="loading" @click.stop="handleDownload">
        {{ downloadBtnText }}
    </van-button>
</template>
<script>
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { appDownload } from '@/assets/js/utils'
export default {
    components: {
        'VanButton': Button
    },
    props: {
        list: {
            type: Array,
            default() {
                return []
            }
        },
        name: {
            type: String,
            default: '压缩文件'
        },
        downloadBtnText: {
            type: String,
            default: '下载'
        }
    },
    data() {
        return {
            loading: false
        }
    },
    methods: {
        async handleDownload() {
            if (this.$store.state.deviceType === 'pc') {
                // 只有一个资源时直接下载, 有多个资源时,进行压缩
                if (this.list.length === 1) {
                    return location.href = this.list[0]
                } else {
                    if (!this.loading) {
                        const zip = new JSZip()
                        this.loading = true
                        await Promise.all(this.list.map(url => this.$axios.get(url, {
                            responseType: "arraybuffer"
                        }).then(res => {
                            zip.file(url.substring(url.lastIndexOf("/") + 1), res);
                        })))
                        zip.generateAsync({
                            type: "blob"
                        }).then(content => {
                            saveAs(content, `${this.name}.zip`);
                            this.loading = false
                        })
                    }
                }
            } else {
                const iosLink = 'https://apps.apple.com/cn/app/id1502189335'
                const androidLink = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.hb.xiaobien'
                if (type === 'ios') {
                    window.open(iosLink)
                } else if (type === 'android') {
                    window.open(androidLink)
                } else {
                    window.open(isIos() ? iosLink : androidLink)
                }
            }
        }
    }
}

</script>
<style lang="less" scoped>
.van-loading {
    display: flex;
}
</style>
