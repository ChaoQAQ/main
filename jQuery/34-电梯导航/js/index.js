$(function() {
    // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择 添加 current
    // 节流阀  互斥锁 
    var flag = true;
    // 1. 当我们滚动到今日推荐模块 就让电梯导航显示出来
    var toolTop = $(".recommend").offset().top; // 今日推荐模块距离文档头部的距离
    toggleTool(); // 页面刷新就会触发
    $(window).scroll(function() {
        toggleTool(); // 页面滚动触发
        // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
        if (flag) { // 节流阀
            $(".floor .w").each(function(index, domEle) {
                if ($(document).scrollTop() >= $(domEle).offset().top) {
                    // console.log(index);
                    $(".fixedtool li").eq(index).addClass("current").siblings().removeClass("current");
                }
            })
        }
    })
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) { // 文档上边卷去的头部距离
            $(".fixedtool").fadeIn(); // 淡入
        } else {
            $(".fixedtool").fadeOut(); // 淡出
        }
    
    }
    // 2. 点击电梯导航页面可以滚动到相应的内容区域
    $(".fixedtool li").click(function() {
        flag = false; // 点击li的时候禁止触发滚动事件
        var index = $(this).index(); // 得到当前电梯导航的索引号
        var current = $(".floor .w").eq(index).offset().top; // 得到当前距离文档头部的距离
        $("html, body").stop().animate({ // 元素做动画 所以是html和body 
            scrollTop: current 
        },function() {
            flag = true; // 动画执行完毕后打开节流阀
        })
        // 点击了某个li 就让当前的小li添加 current类名 兄弟移除
        $(this).addClass("current").siblings().removeClass("current");
    })
})