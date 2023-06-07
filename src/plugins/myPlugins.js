//vue插件一定暴露一个对象
let myPlugins = {}

myPlugins.install = function(Vue,options){
    //Vue.prototype.$bus:任何组件都可以使用
    //Vue.directive
    //Vue.component
    //Vue.filter
    Vue.directive(options.name,(element,params)=>{
        //全局指令
        element.innerHTML = params.value.toUpperCase();
    })
}
export default myPlugins;