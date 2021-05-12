// import Toast from './toast'
// const obj = {}
// obj.install = function(Vue){
//   const toastContrustor = Vue.extend(Toast);
//   const toast = new toastContrustor();
//   toast.$mount(document.createElement('div'));
//   document.body.appendChild(toast.$el);
//   Vue.prototype.$toast = toast;
// }
// export default obj
import Toast from './toast.vue'
function createToast({Vue,propsData,closeCurrentToast}){
  let vueConstructor=Vue.extend(Toast)
  let toast=new vueConstructor({
    propsData
  })
  toast.$mount()
  toast.$on('close',closeCurrentToast)
  document.body.appendChild(toast.$el)
  return toast
}
let currentToast
export default {
  install(Vue,options){
    Vue.prototype.$toast=function(toastOptions){
      if(currentToast){
        currentToast.closeToast()
      }
      currentToast = createToast({
        Vue,
        propsData:toastOptions,
        closeCurrentToast:()=>{
          currentToast=null
        },
      })
    }
  }
}
