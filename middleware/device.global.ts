import { defineNuxtRouteMiddleware } from '#app'

export default defineNuxtRouteMiddleware(() => {
  const device = useDeviceStore()
  device.setDevice()
})
