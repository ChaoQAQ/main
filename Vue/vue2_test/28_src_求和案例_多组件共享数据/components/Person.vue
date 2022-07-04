<template>
    <div>
        <h1>人员列表</h1>
        <h1 style="color: red">Count组件的求和为：{{sum}}</h1>
        <input type="text" placeholder="输入人名" v-model="name"><br><br>
        <button @click="addPerson">点击添加一个人员</button>
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
                return this.$store.state.personList;
            },
            sum() {
                // 读取数据
                return this.$store.state.sum;
            }
        },
        methods: {
            addPerson() {
                // 调用 store里面的commit执行mutation 载荷人员相关信息
                this.$store.commit('ADD_PERSON', {id: nanoid(), name: this.name});
                this.name = '';
            }   
        }
    };
</script>
