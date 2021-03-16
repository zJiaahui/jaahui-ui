import Vue from "vue"
import JButton from "./components/Button/JButton.vue"
import JIcon from "./components/Icon/JIcon.vue"
import JButtonGroup from "./components/ButtonGroup/JButtonGroup.vue"
import JSwitch from "./components/Switch/JSwitch.vue"
import JInput from "./components/Input/JInput.vue"
Vue.component("j-button", JButton)
Vue.component("j-icon", JIcon)
Vue.component("j-button-group", JButtonGroup)
Vue.component("j-switch", JSwitch)
Vue.component("j-input", JInput)
new Vue({
    el: "#app",
    data: {
        msg: "你好",
        isLoading: false
        , ischecked: true
    }
})