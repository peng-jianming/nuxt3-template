import type { UseFetchOptions } from '#app'
const baseURL = 'https://www.xiaobien.com/xiaobien-api/'

interface responseData<T> {
  code: string
  message: string
  data: T
}

export async function useHttp<T = any>(options: UseFetchOptions<T> & { url: string }) {
  options.baseURL = options.baseURL || baseURL
  options.headers = {
    'X-HB-Client-type': 'diandubi-pc',
  }
  return await useFetch(options.url, options).then((res) => {
    const { error, data } = res
    if (error.value) {
      // 整理错误参数
      const e = {
        code: error.value?.statusCode,
        message: `${error.value?.name}${error.value?.statusMessage}`,
        data: '',
      }
      return Promise.reject(e)
    }
    else {
      return data.value!
    }
  })
}
