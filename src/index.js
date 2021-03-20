import Vue from "vue"
import JButton from "./components/Button/JButton.vue"
import JIcon from "./components/Icon/JIcon.vue"
import JButtonGroup from "./components/ButtonGroup/JButtonGroup.vue"
import JSwitch from "./components/Switch/JSwitch.vue"
import JInput from "./components/Input/JInput.vue"
import JDialog from "./components/Dialog/JDialog.vue"
import JToast from "./components/Toast/Toast.js"
import JPager from "./components/Pager/JPager.vue"
import JCarousel from "./components/Carousel/JCarousel.vue"
import JCarouselItem from "./components/Carousel/JCarouselItem.vue"
Vue.component("j-button", JButton)
Vue.component("j-icon", JIcon)
Vue.component("j-button-group", JButtonGroup)
Vue.component("j-switch", JSwitch)
Vue.component("j-input", JInput)
Vue.component("j-dialog", JDialog)
Vue.component("j-pager", JPager)
Vue.component("j-carousel", JCarousel)
Vue.component("j-carousel-item", JCarouselItem)
Vue.use(JToast)
new Vue({
    el: "#app",
    data: {
        msg: "你好",
        isLoading: false
        , ischecked: true
        , visible: false
        , visible2: false
        , current: 5
        , show: true
    },
    mounted() {
        setInterval(() => {

        }, 3000);
    }
    , methods: {
        infoToast() {
            this.$Toast({ type: "info", delay: 5, msg: "提示信息" })
        },
        errorToast() {
            this.$Toast({ type: "error", delay: 5, msg: "错误" })
        }
        , successToast() {
            this.$Toast({ type: "success", delay: 5, msg: "成功" })
        },
        pangechange(value) {
            // console.log(value);
        }
    }
})