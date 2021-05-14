import Confirm from './confirm.vue'
function createConfirm({Vue,propsData,closeCurrentConfirm}){
  let vueConstructor=Vue.extend(Confirm)
  let confirm=new vueConstructor({
    propsData
  })
  confirm.$mount()
  confirm.$on('close',closeCurrentConfirm)
  document.body.appendChild(confirm.$el)
  return confirm
}
let currentConfirm
export default {
  install(Vue,options){
    Vue.prototype.$confirm=function(confirmOptions){
      if(currentConfirm){
        currentConfirm.closeConfirm()
      }
      currentConfirm = createConfirm({
        Vue,
        propsData:confirmOptions,
        closeCurrentConfirm:()=>{
          currentConfirm=null
        },
      })
    }
  }
}
