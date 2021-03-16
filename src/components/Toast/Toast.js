import JToast from "./JToast.vue"
let toast
export default {
    install(Vue, options) {
        Vue.prototype.$Toast = function (value) {
            if (toast) {
                toast.close()
            }
            let Constructor = Vue.extend(JToast)
            toast = new Constructor({
                propsData: value
            })

            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
