<template>
  <div >
    <transition>
      <div class="df-toast-content" v-if="isShow" :class="typeClass">
        <div class="df-toast-msg">
          <div class="df-toast-icon" v-if="type">
            <df-icon :df-icon-name="type" df-icon-size="small"></df-icon>
          </div>
          {{message}}
        </div>
        <div class="df-toast-close" v-if="!autoClose">
          <df-icon df-icon-name="close" df-icon-size="small" @click="closeToast"></df-icon>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from '../icon/icon'
export default {
  name: "Dftoast",
  components:{
    "df-icon":Icon
  },
  data(){
    return{
      msg:'',
      isShow:false
    }
  },
  props:{
    message:{
      type: String
    },
    autoClose:{
      type: Boolean,
      default: true
    },
    duration:{
      type: Number,
      default: 1500,
      validator(value){
        if(value<0){
          this.autoClose=false
        }
        return value>=0
      }
    },
    closeButton:{
      type:Object,
      default(){
        return{
          text:'',
          callback: undefined
        }
      }
    },
    type:{
      type:String,
      validator(value) {
        return ['success','warning','info','error'].indexOf(value)>-1;
      }
    },
  },
  computed:{
    typeClass(){
      return {
        [`df-toast-${this.type}`]:this.type
      }
    }
  },
  mounted(){
    this.isShow = true;
    this.execAutoClose();
  },
  methods:{
    closeToast(){
      if(typeof this.closeButton.callback==='function'){
        this.closeButton.callback()
      }
      this.$el.remove();
      this.$emit('close');
      this.$destroy();
    },
    execAutoClose(){
      if(this.autoClose){
        setTimeout(()=>{
          this.closeToast();
        }, this.duration)
      }
    },
  }
}
</script>

<style lang="scss">
.df-toast-content{
  $witdh : 280px;
  $height : 40px;
  font-size: 14px;
  width:$witdh;
  height: $height;
  padding: 0 1em;
  background: #f8d000;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 999999;
  left:50%;
  top:10px;
  margin-left: -$witdh/2 - 16;
  display: flex;
  border-radius: 3px;
  &.df-toast-success{
    color: #42b983;
    background: #eaf5ee;
  }
  &.df-toast-warning{
    background:#e6a23c;
  }
  &.df-toast-error{
    background: #e63c72;
  }
  &.df-toast-info{
    background: #b8b8b8;
  }
  .df-toast-msg{
    display: flex;
    align-items: center;
  }
  .df-toast-close,.df-toast-icon{
    font-size: 13px;
    height: 23px;
    .df-icon{
      opacity: 0.6;
      &:hover{
        opacity: 1;
      }
    }
  }
}
.v-enter{
  opacity: 0;
  transform: translateY(-80px);
}

.v-enter-active{
  transition: all 0.4s ease;
}

/*v-move 和 v-leave-active 配合使用，能够实现列表后续的元素，渐渐地漂上来的效果 */

.v-move{
  transition: all 0.6s ease;
}
.v-leave-active{
  position: absolute;
}
</style>
