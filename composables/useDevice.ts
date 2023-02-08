import { defineStore } from 'pinia'
import { useRequestHeaders } from '#app'

export enum deviceEnums {
  MOBILE = 'mobile',
  PC = 'pc',
}

interface IState {
  device: deviceEnums
}

const os = function (ua: string) {
  const isWindowsPhone = /(?:Windows Phone)/.test(ua)
  const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone
  const isAndroid = /(?:Android)/.test(ua)
  const isFireFox = /(?:Firefox)/.test(ua)
  // const isChrome = /(?:Chrome|CriOS)/.test(ua)
  const isTablet
    = /(?:iPad|PlayBook)/.test(ua)
    || (isAndroid && !/(?:Mobile)/.test(ua))
    || (isFireFox && /(?:Tablet)/.test(ua))
  const isPhone = /(?:iPhone)/.test(ua) && !isTablet
  const isPc = !isPhone && !isAndroid && !isSymbian
  return {
    isTablet,
    isPhone,
    isAndroid,
    isPc,
  }
}

export const useDeviceStore = defineStore('device', {
  state(): IState {
    return {
      device: deviceEnums.MOBILE,
    }
  },
  actions: {
    setDevice() {
      const headers = useRequestHeaders()
      const { isPc } = os(process.server ? headers['user-agent'] as string : navigator.userAgent)
      this.device = isPc ? deviceEnums.PC : deviceEnums.MOBILE
    },
  },
})
