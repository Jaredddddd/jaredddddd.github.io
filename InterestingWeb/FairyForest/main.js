// 增加对Scroll的监听，并设置--scrollTop的CSS变量的值为this.scrollY
window.addEventListener("scroll", (e) => {
  document.documentElement.style.setProperty(
    "--scrollTop",
    `${this.scrollY}px`
  );
});

/*
registerPlugin():
  https://gsap.com/docs/v3/GSAP/gsap.registerPlugin()
  向 GSAP 核心注册插件可确保两者无缝协作，
  并防止构建工具/捆绑程序中的树抖动问题。
  您只需要在使用插件之前注册一次即可。
ScrollSmoother:
  https://gsap.com/docs/v3/Plugins/ScrollSmoother/
  ScrollSmoother 向基于 ScrollTrigger 的页面添加垂直平滑滚动效果。
  与大多数平滑滚动库不同，ScrollSmoother 利用原生滚动 - 它不会添加“假”滚动条，
  也不会干扰触摸/指针功能。
*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  /*
	它唯一的子元素应该是 content 元素，它是滚动时移动的元素。
	默认情况下，它会自动查找 id 为“smooth-wrapper”的元素，
	因此如果您遵循该约定，则无需定义 wrapper 。
	*/
  wrapper: ".wrapper",
  /*
	这个 content 元素是滚动时移动的元素。
	默认情况下，它会自动查找 id 为“smooth-content”的元素，
	因此如果您遵循该约定，则无需定义 content 。
	*/
  content: ".content",
});
