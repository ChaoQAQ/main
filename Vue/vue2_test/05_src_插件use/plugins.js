/*
插件：
    功能：用于增强Vue；
    本质：包含install方法的一个对象 install的第一个参数是Vue构造器 所以可以写Vue的配置 第二个以后的参数是插件使用者传递的数据；
    定义插件：
        对象.install = function (Vue, options) {
            1. 添加全局过滤器
                Vue.filter(...)
            2. 添加全局自定义指令
                Vue.directive(...)
            3. 配置全局混入
                Vue.mixin(...)
            4. 添加实例方法
                Vue.prototype.myMethod = dunction () {...}
        }
    使用插件：Vue.use();
    备注：Vue.use 会自动阻止多次注册相同插件 届时即使多次调用也只会注册一次该插件
*/ 
export default {
    // install方法 安装
    install(Vue, options) {
        console.log(Vue, options);
        // 全局过滤器 必须设在 new Vue之前 new Vue在解析模板时会用到全局过滤器 没有就会报错 
        Vue.filter('mySlice', function (value) {
            // slice() 方法浅拷贝过后返回一个新的数组对象 第一个参数为起始位置 第二个参数为结束位置(不包括结束位置)
            return value.slice(0, 4);
        }),
        // 定义全局自定义指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时（一上来 还未放入到页面）
            bind(element, binding) {
                element.value = binding.value;
            },
            // 指令所在的元素被插入页面时
            inserted(element, binding) {
                element.focus();
            },
            // 指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value;
                // element.focus();
            }
        }),
        // 定义全局混入对象
        Vue.mixin({
            data() {
                return {
                    x: 110,
                    y: 220
                }
            }
        }),
        // 在Vue原型上添加一个方法 vm和组件实例对象都能用这个方法 因为 VueComponent.prototype.__proto__ === Vue.prototype
        Vue.prototype.hello = () => {alert('你好插件use')}
    }
}