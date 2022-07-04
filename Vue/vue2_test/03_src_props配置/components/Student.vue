<template>
    <div>
        <h1>学校：{{school}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{myAge + 1}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="updateAge">尝试修改学生的年龄</button>
    </div>

    <!-- 
        配置项props：
            功能：让组件接收外部传过来的数据
                (1) 传递数据：
                    <Student name="xxx" />
                (2) 接收数据：
                    第一种方式（只接收数据）：
                        props: ['name']
                    第二种方式（只限制类型）：
                        props: {name: Number}
                    第三种方式（限制类型、限制必要性、指定默认值）：
                        props: {
                            name: {
                                type: String, // 类型
                                required: true, // 必要性
                                default: '老王' // 默认值
                            }
                        }
            备注：props是只读的 Vue底层会监视你对props的修改 如果进行了修改 就会发出警告
                  若业务需求确实需要修改 那么请复制props的内容到data种一份 然后去修改data中的数据；
     -->
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                school: '尚硅谷',
                myAge: this.age
            }
        },

        // 1. props 可以是数组或对象 用于接收来自父组件的数据 对象形式允许配置 类型检测、自定义验证、设置默认值、必填项
        // 2. props接受的数据优先放在组件实例对象上 所以data的属性不能跟props接受的属性同名

        // 简单声明接受
        // props: ['name', 'age', 'sex']

        // 接受的同时对数据进行类型限制
        // props: {
        //     name: String,
        //     age: Number,
        //     sex: String
        // }

        // 接受的同时：对数据进行类型限制 + 必要性的限制 + 默认值的指定
        props: {
            name: {
                type: String, // 设置类型
                required: true // 设置required 必填项
            },
            age: {
                type: Number,
                default: 30 // 设置默认值
            },
            sex: {
                type: String,
                required: true
            }
        },
        methods: {
            updateAge() {
                this.myAge++
            }
        },
    }
</script>

