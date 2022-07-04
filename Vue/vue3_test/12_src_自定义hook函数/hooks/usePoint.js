// hooks钩 自定义钩 函数 谁用谁就引入 实现代码复用
import {reactive, onMounted, onBeforeUnmount} from 'vue';
export default function savePoint() {
    let point = reactive({
        x: 0,
        y: 0
    })

    function savePoint(event) {
        point.x = event.pageX;
        point.y = event.pageY;
        console.log(event.pageX, event.pageY);
    }

    onMounted(() => {
        window.addEventListener('click', savePoint);
    })

    onBeforeUnmount(() => {
        // 删除使用 EventTarget.addEventListener() 方法添加的事件
        window.removeEventListener('click', savePoint); // 事件类型 事件回调函数
    })

    return point; // 将结果返回出去
}