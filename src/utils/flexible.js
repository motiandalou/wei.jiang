// 自适应配置
// 如果使用插件px to rem & rpx & vw (cssrem)  将里面的Root Font Size改成192(设计稿(1920) 除以 屏幕被等分10份),更加方便使用一些
(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // 调整根元素的font-size
  function setBodyFontSize() {
    if (document.body) {
      // 默认body字体为14px
      document.body.style.fontSize = 14 * dpr + "px";
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // 设置 1rem = viewWidth / 10
  function setRemUnit() {
    var rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + "px";
  }

  setRemUnit();

  // 实时监听浏览器的宽高变化,重新赋值body的字体大小
  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // 0.5px的兼容性问题(PC端浏览器的最小识别像素为1px)
  // dpr：是指 物理像素 /css像素 的比例
  // 当 dpr=1 时，说明物理像素和css像素是1:1，此时 css中的1px等于设备的1px
  // 当 dpr=2 时，说明物理像素是css像素的两倍，那么此时css中的1px等于设备的2px
  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);
