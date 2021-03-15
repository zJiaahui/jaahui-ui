import Vue from "vue"
import JButton from "./components/Button/JButton.vue"
import JIcon from "./components/Icon/JIcon.vue"
import JButtonGroup from "./components/ButtonGroup/JButtonGroup.vue"
Vue.component("j-button", JButton)
Vue.component("j-icon", JIcon)
Vue.component("j-button-group", JButtonGroup)
new Vue({
    el: "#app",
    data: {
        msg: "你好",
        isLoading: false
    }
})