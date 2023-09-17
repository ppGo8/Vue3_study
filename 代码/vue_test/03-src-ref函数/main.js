// 引入的不再是Vue的构造函数
// 引入的是一个名为createApp的工厂函数 特点：无需使用new构造
import { createApp } from 'vue'
import App from './App.vue'

// vue3的写法
// 创建应用实例对象——app(类似vue2中的vm,但app比vm更'轻')
const app = createApp(App)
app.mount('#app') // 挂载
// createApp(App).mount('#app') // 该行代码和他上面两行等价


// vue2写法
// const vm = new Vue({
//     render:h=>h(app)
// })
// vm.$mount('#app') // 挂载

