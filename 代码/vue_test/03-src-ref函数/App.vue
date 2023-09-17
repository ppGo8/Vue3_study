<template>
  <h1>我是App组件</h1>
  <!-- 模板会自动解析得到引用对象的.value -->
  <h2>姓名:{{ name }}</h2>
  <h2>年龄: {{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <button @click="changeinfo">修改人的信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // ref加工数据,得到响应式数据
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type: "前端工程师",
      salary: "30k",
    });

    function changeinfo() {
      // ref加工得到的数据变成一个 引用实现对象（refimpl）简称引用对象
      // 不能通过下面的这种方式直接改
      // name = "李四";
      // age = "26";

      // 正确的更改方式(响应式更改)
      name.value = "李四";
      age.value = 39;
      job.value.type = "后端开发工程师";
      job.value.salary = "32k";
      
    }
    return {
      name,
      age,
      job,
      changeinfo,
    };
  },
};
</script>

<style>
</style>
