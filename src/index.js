import Vue from "vue"
import JButton from "./components/Button/j-button.vue"
import JIcon from "./components/Icon/j-icon.vue"
Vue.component("j-button", JButton)
Vue.component("j-icon", JIcon)
new Vue({
    el: "#app",
    data: {
        msg: "你好"
    }
})