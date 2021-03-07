import Vue from 'vue'
import JhIcon from "./icon.vue";
import JHButton from "./button.vue"
import JHButtonGroup from "./button-group.vue"
Vue.component("jh-button", JHButton)
Vue.component("jh-icon", JhIcon)
Vue.component("jh-button-group", JHButtonGroup)
new Vue({
    el: "#app",
    data: {
        msg: "你好",
        loading: false
    }
})
