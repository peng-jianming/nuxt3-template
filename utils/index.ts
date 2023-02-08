export function scrollToTop(duration: number) {
  // cancel if already on top
  const parma = document.documentElement.scrollTop ? 'documentElement' : 'body'
  const totalScrollDistance = document[parma].scrollTop
  if (totalScrollDistance === 0)
    return
  let scrollY = totalScrollDistance
  let oldTimestamp: DOMHighResTimeStamp = 0

  function step(newTimestamp: DOMHighResTimeStamp) {
    if (oldTimestamp !== null) {
      // if duration is 0 scrollY will be -Infinity
      scrollY -= (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration
      if (scrollY <= 0)
        return (document[parma].scrollTop = 0)
      document[parma].scrollTop = scrollY
    }
    oldTimestamp = newTimestamp
    window.requestAnimationFrame(step)
  }

  window.requestAnimationFrame(step)
}

/**
* PC端判断滚动方向
* @param upCB
* @param downCB
* @param sign 默认的向上滚与向下滚的边界
*/
export function scrollDirectionPC(upCB = () => { }, downCB = () => { }, sign = 80) {
  document.addEventListener('scroll', () => {
    const oScrollTop = document.documentElement.scrollTop
    if (oScrollTop > sign) {
      sign = oScrollTop // 更新scrollTop
      upCB()
    }
    if (oScrollTop < sign) {
      sign = oScrollTop // 更新scrollTop
      downCB()
    }
  })
}

/**
 * 手机端判断滑动方向
 * @param upCB
 * @param downCB
 * @param lfCB
 * @param rgCB
 * @returns {string}
 */
export function scrollDirectionMB(
  upCB = () => { },
  downCB = () => { },
  lfCB = () => { },
  rgCB = () => { },
) {
  // 滑动处理
  let [startX, startY, moveEndX, moveEndY, X, Y] = [0, 0, 0, 0, 0, 0]
  document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX
    startY = e.touches[0].pageY
  })

  document.addEventListener('touchmove', (e) => {
    moveEndX = e.changedTouches[0].pageX
    moveEndY = e.changedTouches[0].pageY
    X = moveEndX - startX
    Y = moveEndY - startY
    if (X > 0 && Math.abs(X) > Math.abs(Y)) {
      rgCB()
    }
    else if (X < 0 && Math.abs(X) > Math.abs(Y)) {
      lfCB()
    }
    else if (Y > 0 && Math.abs(Y) > Math.abs(X)) {
      downCB()
    }
    else if (Y < 0 && Math.abs(Y) > Math.abs(X)) {
      upCB()
    }
    else {
      // console.log('没滑动')
    }
  })
}

export function loadScript(src: string, variable?: any) {
  if (variable && window[variable])
    return Promise.resolve()

  return new Promise<void>((resolve) => {
    const ele = document.createElement('script')
    ele.src = src
    document.getElementsByTagName('head')[0].appendChild(ele)
    ele.onload = function () {
      resolve()
    }
  })
}
