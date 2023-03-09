import { defineNuxtRouteMiddleware } from '#app'

export default defineNuxtRouteMiddleware(() => {
  const deviceStore = useDeviceStore()
  deviceStore.setDevice()
})
