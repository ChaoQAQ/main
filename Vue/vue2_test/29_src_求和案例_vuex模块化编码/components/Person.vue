<template>
    <div>
        <h1>人员列表</h1>
        <h1 style="color: red">Count组件的求和为：{{sum}}</h1>
        <h1 style="color: red">列表中第一个人的名字：{{firstPersonName}}</h1>
        <input type="text" placeholder="输入人名" v-model="name"><br><br>
        <button @click="addPerson">点击添加一个人员</button>
        <button @click="addWang">点击添加一个姓王的人员</button>
        <button @click="addPersonServer">添加一个人员，名字随机</button>
        <ul>
            <li v-for="person in personList" :key="person.id">{{person.name}}</li>
        </ul>
    </div>
</template>

<script>
    // 引入nonaid 采用分别暴露
    import {nanoid} from 'nanoid';
    export default {
        name: 'Person',
        data() {
            return {
                name: ''
            }
        },
        computed: {
            personList() {
                // 正常读取数据读取state状态
                // return this.$store.state.personList;

                // 读取vuex中Store中指定模块中的state的状态
                return this.$store.state.personOptions.personList;
            },
            sum() {
                // 正常读取数据读取state状态
                // return this.$store.state.sum;

                // 读取vuex中Store中指定模块中的state的状态
                return this.$store.state.countOptions.sum;
            },
            firstPersonName() {
                // 使用对象的属性方法两种写法 obj.xxx不允许xxx中出现/  obj['xxx']因为中括号里面是字符串所以可以写/
                // 读取指定模块里的getter 
                return this.$store.getters['personOptions/firstPersonName']; // personOptions模块getters里的firstPersonName
            }
        },
        methods: {
            addPerson() {
                // 正常调用 store里面的commit执行mutation 载荷人员相关信息
                // this.$store.commit('ADD_PERSON', {id: nanoid(), name: this.name});

                // 调用personOptions模块mutations里的ADD_PERSON方法
                this.$store.commit('personOptions/ADD_PERSON', {id: nanoid(), name: this.name}); 
                this.name = '';
            },
            addWang() {
                const personObj = {id: nanoid(), name: this.name}
                // 调用personOptions模块actions里的addPersonWang方法
                this.$store.dispatch('personOptions/addPersonWang', personObj);
                this.name = '';
            },
            addPersonServer() {
                this.$store.dispatch('personOptions/addPersonServer');
            }
        }
    };
</script>
