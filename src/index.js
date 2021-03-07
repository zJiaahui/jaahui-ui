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

//单元测试
import chai from "chai"
const expect = chai.expect

{
    /***当使用jh-button组件时设置icon为set我断言 xlink:href属性值为 #i-set 相符即测试通过***/

    //动态添加
    const Constructor = Vue.extend(JHButton) //把jh-button组件构建成构造函数
    const button = new Constructor({
        propsData: {
            icon: "set"
        }
    })//创建示例
    button.$mount("#test")//挂载到#test

    let useElement = button.$el.querySelector("use")

    expect(useElement.getAttribute("xlink:href")).to.eq('#i-set')
    //测试通过才会执行以下代码
    button.$el.remove()
    button.$destroy()
}

{    /***当使用jh-button组件时设置icon为set，loading为true时我断言 xlink:href属性值为 #i-loading 相符即测试通过***/

    const Constructor = Vue.extend(JHButton) //把jh-button组件构建成构造函数
    const button = new Constructor({
        propsData: {
            icon: "set",
            loading: true
        }
    })//创建示例
    button.$mount()//不挂载即不在页面显示

    let useElement = button.$el.querySelector("use")

    expect(useElement.getAttribute("xlink:href")).to.eq('#i-loading')
    //测试通过才会执行以下代码
    button.$el.remove()
    button.$destroy()
}

{
    /***当使用jh-button组件时设置iconPosition: "right"时我断言svg的order属性值为2 相符即测试通过***/
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(JHButton) //把jh-button组件构建成构造函数
    const button = new Constructor({
        propsData: {
            icon: "set",
            loading: true,
            iconPosition: "right"
        }
    })//创建示例
    button.$mount(div)//不挂载即不在页面显示

    let svg = button.$el.querySelector("svg")
    let { order } = window.getComputedStyle(svg)

    expect(order).to.eq('2')
    //测试通过才会执行以下代码
    button.$el.remove()
    button.$destroy()
}
