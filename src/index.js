import Vue from "vue"
import JButton from "./components/Button/j-button.vue"
Vue.component("j-button", JButton)
new Vue({
    el: "#app",
    data: {
        msg: "你好"
    }
})