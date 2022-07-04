// let that;
class Tab {
    constructor(id) {
        // that = this;
        // 1. 获取元素
        this.main =document.querySelector(id);
        this.updateNode();
        this.add = this.main.querySelector('.tabadd');
        // li 的父元素 ul
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        // section 的父元素 div
        this.fsection = this.main.querySelector('.tabscon');
        this.init(); // 页面刷新 constructor 构造函数会被直接执行 这样直接给操作元素绑定事件
    }
    // (1) tab栏切换功能 toggleTab()
    toggleTab(that) { // that 里面存的是 constructor里面的this 是通过bind 传递参数传过来的
        that.clearClass(); // 调用方法清除其他人样式 排他思想
    //    console.log(this);
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive'
    }
    // (2) tab栏添加功能 addTab()
    addTab(that) {
        that.clearClass(); // 每次创建元素先清掉所有人的选中状态类名
        // (3-1) 创建 li 元素跟 section 元素
        let li = '<li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>';
        let section = '<section class="conactive">测试1</section>';
        // (3-2) 把这两个元素追加到父元素里面
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init(); // 创建完毕后在给新创建的元素绑定事件
    }
    // (3) tab栏移除功能 removeTab()
    removeTab(that, e) {
        e.stopPropagation(); // 阻止冒泡 防止触发li 的切换点击事件
        let index = this.parentNode.index;
        // console.log(index);
        // 根据索引号删除对应的li 和section   remove()方法可以直接删除指定的元素
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当我们删除的不是选中状态的 li 就让选中状态的 li 保存选中状态
        if (document.querySelector('.liactive')) return;
        // 当我们删除了选中状态的这个li 的时候, 让它的前一个li 处于选定状态
        index--;
        // 手动调用我们的点击事件  不需要鼠标触发
        if (index < 0) {
            index = 0;
            that.lis[index] && that.lis[index].click();
        } else {
            that.lis[index] && that.lis[index].click();
        }

    }
    // (4) tab栏编辑功能 editTab()
    editTab() {
        let str = this.innerText;
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />';
        let input = this.children[0];
        input.value = str;
        input.select(); // 让文本框的文字默认处于选中状态
        input.onblur = function() {
            this.parentNode.innerHTML = input.value;
        }
        // 按下回车也可以把文本框里面的值给span
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                // 手动调用表单失去焦点事件  不需要鼠标离开操作
                this.blur();
            }
        }
    }
    // (5) 初始化操作让相关的元素绑定事件 init()
    init() {
        this.updateNode(); // 时刻刷新元素 获取动态创建的元素
        // 3. 点击加号可以实现添加新的选项卡和内容
        this.add.onclick = this.addTab.bind(this.add, this);
        for (let i = 0; i < this.lis.length; i++) {
            // 2. 页面刷新给操作元素绑定事件
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
            // 4. 点击 x 可以删除当前的 选项卡 跟 section
            this.remove[i].onclick = this.removeTab.bind(this.remove[i], this);
            // 5. 双击 li 或者 section 里面的内容 可以实现修改功能
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    // (6) 清除其他人的样式 clearClass()
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // (7) 因为我们动态添加元素 需要从新获取对应的元素 updateNode()
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }
}
new Tab('#tab');