<template>
  <div>
    <div class="mask" v-if="isShow"></div>
    <transition>
      <div class="df-confirm-container" v-if="isShow">
        <div class="df-confirm-header" :class="typeClass">
          <div class="df-confirm-msg">
            <div class="df-confirm-icon" v-if="type">
              <df-icon :df-icon-name="type" df-icon-size="small"></df-icon>
            </div>
            {{message}}
          </div>
          <div class="df-toast-close" v-if="!autoClose">
            <df-icon df-icon-name="close" df-icon-size="small" @click="closeConfirm"></df-icon>
          </div>
        </div>
        <div class="df-confirm-content">
          {{content}}
        </div>
        <div class="df-confirm-footer">
          <df-button @click="cancelConfirm">{{ cancelButton.text? cancelButton.text:'取消'}}</df-button>
          <df-button type="primary" @click="closeConfirm">{{ closeButton.text?closeButton.text:'关闭'}}</df-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from '../icon/icon'
import Button from "../button/button";
export default {
  name: "confirm",
  components:{
    "df-icon":Icon,
    "df-button":Button
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
    content:{
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
          text:'关闭',
          callback: undefined
        }
      }
    },
    cancelButton:{
      type:Object,
      default(){
        return{
          text:'取消',
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
        [`df-confirm-${this.type}`]:this.type
      }
    }
  },
  mounted(){
    this.isShow = true;
    this.execAutoClose();
  },
  methods:{
    closeConfirm(){
      if(typeof this.closeButton.callback==='function'){
        this.closeButton.callback()
      }
      this.$el.remove();
      this.$emit('close');
      this.$destroy();
    },
    cancelConfirm(){
      if(typeof this.cancelButton.callback==='function'){
        this.cancelButton.callback()
      }
      this.$el.remove();
      this.$emit('close');
      this.$destroy();
    },
    execAutoClose(){
      if(this.autoClose){
        setTimeout(()=>{
          this.closeConfirm();
        }, this.duration)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.df-confirm-container{
  $witdh : 380px;
  font-size: 14px;
  width:$witdh;
  padding: 1em;
  padding-top:.2em;
  background: #fff;
  color: #000;
  position: fixed;
  z-index: 999999;
  left:50%;
  top:35%;
  margin-left: -$witdh/2 - 16;
  border-radius: 3px;
}
.df-confirm-header{
  width: 100%;
  border-bottom: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .4em;
  &.df-confirm-success{
     color: #42b983;
   }
  &.df-confirm-warning{
    color:#e6a23c;
   }
  &.df-confirm-error{
    color: #e63c72;
   }
  &.df-confirm-info{
    color: #b8b8b8;
   }
  .df-confirm-msg{
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  .df-confirm-close,.df-confirm-icon{
    font-size: 15px;
    height: 23px;
    .df-icon{
      opacity: 0.6;
    &:hover{
       opacity: 1;
     }
    }
  }
}
.df-confirm-content{
  min-height: 60px;
  padding: 1em;
  color: #666;
}
.df-confirm-footer{
  display: flex;
  justify-content: flex-end;
  >button{
    margin: 0 5px;
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
.mask{
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left: 0;
  background: rgba(0,0,0,.6);
  z-index: 999;
}
</style>
