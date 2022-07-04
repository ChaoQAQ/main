window.addEventListener('load', function() { // 先加载完页面在加载js
    var minbox = this.document.querySelector('.minbox');
    var mask = this.document.querySelector('.mask');
    var big = this.document.querySelector('.big');
    // 1. 鼠标进入minbox 显示mask和big 鼠标离开minbox 隐藏mask和big
    minbox.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    minbox.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    // 2. 获得鼠标在minbox中的坐标 当mask的left和top值
    minbox.addEventListener('mousemove', function(e) {
        // (1) 先计算出鼠标在minbox盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // (2) 减去mask盒子的一半 在赋值给left和top 让mask的中心点跟着鼠标走
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // (3) 如果x坐标小于0 就让mask停止在0的位置 移动最大距离应该是minbox的宽度 - mask的宽度
        var maskMax = minbox.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        // (4) 赋值给mask的left和top值
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3. 大图片的移动距离 = 遮罩层移动距离 * 大图片最大移动距离 / 遮罩层的最大移动距离
        var bigImg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        var bigImgMax = bigImg.offsetWidth - big.offsetWidth;
        // 大图片的移动距离 X Y
        // var bigX = maskX / maskMax * bigImgMax;
        // var bigY = maskY / maskMax * bigImgMax;
        // bigImg.style.left = -bigX + 'px';
        // bigImg.style.top = -bigY + 'px';
        var bigImgX = maskX * bigImgMax / maskMax;
        var bigImgY = maskY * bigImgMax / maskMax;
        bigImg.style.left = -bigImgX + 'px';
        bigImg.style.top = -bigImgY + 'px';
    })
})