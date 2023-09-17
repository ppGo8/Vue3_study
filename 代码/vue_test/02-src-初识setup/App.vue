<template>
  <h1>我是App组件</h1>

  <h2>姓名:{{ name }}</h2>
  <h2>年龄: {{ age }}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
import { h } from "vue";
export default {
  name: "App",
  // setup是一个新配置项,值是一个函数
  // 组件中用的数据、方法等均要配置到setup中
  // 此处只是测试setup不考虑响应式
  setup() {
    // 数据
    let name = "张三";
    let age = 18;

    // 方法
    function sayHello() {
      console.log(name + "在说话");
    }

    // 1.可以返回一个对象
    // return {
    //   name,
    //   age,
    //   sayHello,
    // };

    // 2.可以返回一个渲染函数,但是用的较少
    return () => h("h1", "尚硅谷");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
