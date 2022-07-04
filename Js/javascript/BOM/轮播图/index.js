window.addEventListener('DOMContentLoaded', function() {
   // 1. 获取元素
   var focus = document.querySelector('.focus'); // 焦点图
   var arrow_l = document.querySelector('.arrow-l'); // 左按钮
   var arrow_r = document.querySelector('.arrow-r'); // 右按钮 arrow箭头的意思
   var ul = focus.querySelector('ul'); // 图片的ul
   var ol = focus.querySelector('.circle'); // 小圆点的ol
   var focusWidth = focus.offsetWidth; // 焦点图的宽度
   

   // 2. 鼠标经过 focus焦点图时 显示左右按钮 离开时隐藏按钮
   focus.addEventListener('mouseenter', function() { // 鼠标经过
      arrow_l.style.display = 'block';
      arrow_r.style.display = 'block';
      clearInterval(timer);
      timer = null;
   });
   focus.addEventListener('mouseleave', function() { // 鼠标离开
      arrow_l.style.display = 'none';
      arrow_r.style.display = 'none';
      timer = setInterval(function() {
         arrow_r.click();
      }, 2000)
   });

   // 3. 动态生成小圆点 小圆点的个数和图片的个数相等
   for (var i = 0; i < ul.children.length; i++) {
      var li = document.createElement('li'); // 创建元素节点
      li.setAttribute('index', i); // 记录当前小圆圈的索引号 通过自定义属性来做 
      ol.appendChild(li); // 在ol的子级后面添加li节点
   // 4. 小圆点排他思想 点击事件
      li.addEventListener('click', function() {
         circleChange();
         var index = this.getAttribute('index'); // 得到当前元素的自定义索引号
         // 当我们点击了某个小li 就要把这个li 的索引号给 num  
         num = index;
         // 当我们点击了某个小li 就要把这个li 的索引号给 circle  
         circle = index;
         animate(ul, -index * focusWidth); // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
      });
   };
   ol.children[0].className = 'current'; // 默认显示第一张图 所以第一个小圆点默认选中
   // 5. 点击右侧按钮 让图片滚动一次
   var first = ul.children[0].cloneNode(true); // 克隆第一张图片
   ul.appendChild(first); // 将克隆的第一张图放到最后一张图的后面
   var num = 0; // 记录按钮的点击次数
   var circle = 0; // circle 控制小圆圈的播放
   var flag = true; // 节流阀
   arrow_r.addEventListener('click', function() {
     if (flag) {
      flag = false; // 关闭节流阀
      // 6. 图片无缝滚动
      if (num == ul.children.length - 1) {
         // animate(ul, -num * focusWidth);
         ul.style.left = 0;
         num = 0;
      } 
      num++;
      animate(ul, -num * focusWidth, function() {
         flag = true; // 动画执行完毕打开节流阀
      });
      // 7. 让小圆圈跟右侧按钮一起变化
      circle++;
      if (circle == ol.children.length) {
         circle = 0;
      }
      circleChange();
     }
   })
   arrow_l.addEventListener('click', function() {
      if (flag) {
         flag = false;
      if (num == 0) {
         num = ul.children.length - 1;
         ul.style.left = -num * focusWidth + 'px';
      } 
      num--;
      animate(ul, -num * focusWidth,   function() {
         flag = true;
      });
      circle--;
      console.log(ol.children.length);
      if (circle < 0) {
         circle = ol.children.length - 1;
      }
      circleChange();
      }
   })
   // 8. 自动播放轮播图
   var timer = setInterval(function() {
      //手动调用点击事件
      arrow_r.click();
   }, 2000);
   function circleChange() {
      for (var i = 0; i < ol.children.length; i++) {
         ol.children[i].className = '';
      }
      ol.children[circle].className = 'current';
  }
})