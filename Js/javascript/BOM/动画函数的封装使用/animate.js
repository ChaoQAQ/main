function animate(obj, target, callback) { // callback回收的意思 把函数当参数看 传递实参
    // callback = function() {}; // 相当于做了这么一步操作
    // 先清除以前的定时器 再重新开启定时器 这样只保留当前的一个定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 我们的步长值改为整数 不要出现小数 不然会出现位置偏大或偏小
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质就是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            if (callback) {
                // 调用回调函数
                callback();
            }
        } else {
            // 把每次加1 这个步长改为一个慢慢变小的值 步长公式： （目标值 - 现在的位置） / 10
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15)
}