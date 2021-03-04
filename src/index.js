import Vue from 'vue'
import JHButton from "./button.vue"
Vue.component("jh-button", JHButton)
new Vue({
    el: "#app",
    data: {
        msg: "你好"
    }
})
