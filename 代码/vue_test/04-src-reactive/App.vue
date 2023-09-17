<template>
  <h1>我是App组件</h1>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄: {{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <h3>个人爱好:{{ hobby[0] }}</h3>
  <button @click="changeinfo">修改人的信息</button>
  <br />

  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄: {{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪水：{{ person.job.salary }}</h3>
  <h3>个人爱好:{{ person.hobby[0] }}</h3>
  <h3>嵌套:{{ person.job.a.b.c }}</h3>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "App",
  setup() {
    let name = ref("张三");
    let age = ref(18);
    // let job = ref({
    //   type: "前端工程师",
    //   salary: "30k",
    // });

    let job = reactive({
      type: "前端工程师",
      salary: "30k",
    });
    let hobby = reactive(["抽烟", "喝酒", "烫头"]);

    // reactive的方式访问数据更加简单不用写value
    // 而基本数据类型不能使用reactive
    // 所以可以定义一个普通对象类型存放很多内容
    // 同时setup 可以直接return一个对象出去,不用写那么多东西
    let person = reactive({
      name: "张三",
      age: 19,
      job: {
        type: "前端工程师",
        salary: "30k",
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby: ["抽烟", "喝酒", "烫头"],
    });

    function changeinfo() {
      name.value = "李四";
      age.value = 39;
      // ref定义的job的修改
      // job.value.type = "后端开发工程师";
      // job.value.salary = "32k";
      // reactive定义的job读取
      // reactive定义的job修改
      job.type = "ui设计";
      job.salary = "20k";
      hobby[0] = "打豆豆";
      console.log(job);
      console.log(hobby);
    }
    return {
      name,
      age,
      job,
      changeinfo,
      hobby,
      // 直接返回person
      person,
    };
  },
};
</script>

<style>
</style>
