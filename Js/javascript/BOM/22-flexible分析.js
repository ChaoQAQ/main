(function flexible(window, document) {
  var docEl = document.documentElement // 获取文档根元素html
  var dpr = window.devicePixelRatio || 1 // 监视屏幕分辨率或缩放级别的更改 物理像素比

  // adjust body font size 调整我们body的字体大小
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize) // 如果没有body元素 就等待主要的DOM元素加载完毕再执行js
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10 设置 1rem 就是视口 宽度 / 10 
  function setRemUnit() {
    var rem = docEl.clientWidth / 20 // padding + width 不包含边框大小
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit() // 设置单位

  // reset rem unit on page resize 当我们页面大小发生变化的时候 要重新设置rem的大小
  window.addEventListener('resize', setRemUnit) // 改变浏览器窗口的大小来触发resize事件
  window.addEventListener('pageshow', function (e) { // 页面刷新或者后退都会触发pageshow事件 pageshow事件会在onload事件后执行
    if (e.persisted) { // 只读属性persisted代表一个页面是否从缓存中加载的 火狐后退会有缓存
      setRemUnit()
    }
  })

  // detect 0.5px supports // 有些浏览器不支持 0.5倍 像素比
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
