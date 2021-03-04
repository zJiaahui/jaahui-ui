import Vue from 'vue'
import JhIcon from "./icon.vue";
import JHButton from "./button.vue"
Vue.component("jh-button", JHButton)
Vue.component("jh-icon", JhIcon)
new Vue({
    el: "#app",
    data: {
        msg: "你好"
    }
})
