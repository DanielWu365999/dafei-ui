<template>
  <button class="df-button" :class=buttonClass :disabled="disabled" @click="handleClick($event)">
    <span class="df-button-wrapper" :class=wrapperClass>
      <span v-if="iconName" class="df-button-icon">
          <df-icon :dfIconName="iconName" :dfIconSize="iconSize"></df-icon>
      </span>
      <span class="df-button-content">
          <slot></slot>
      </span>
    </span>
  </button>
</template>

<script>
import Icon from '../icon/icon'
export default {
  name: "dfButton",
  components:{
    "df-icon":Icon
  },
  props:{
    type:{
      type:String,
      validator (value) {
        return [
          'primary',
          'success',
          'info',
          'warning',
          'danger'
        ].indexOf(value)>-1;
      }
    },
    iconName:{
      type:String
    },
    iconSize:{
      type:String,
      default:'small'
    },
    disabled:{
      type:Boolean
    },
    circle:{
      type:Boolean
    },
    iconPosition:{
      type: String,
      default: 'left',
      validator(value){
        return[
          'left',
          'right'
        ].indexOf(value)>-1
      }
    },
  },
  computed:{
    buttonClass(){
      return {
        [`df-button-${this.type}`]:this.type,
        [`df-button-disabled`]:this.disabled,
        [`df-button-circle`]:this.circle
      }
    },
    wrapperClass(){
      return {
        [`df-button-${this.iconPosition}`]:this.iconName&&this.iconPosition
      }
    }
  },
  methods:{
    handleClick($event){
      this.$emit('click',$event)
    }
  }
}
</script>

<style lang="scss" scoped>
.df-button{
  border: 1px solid transparent;  //自定义边框
  outline: none;
  font-family:  Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #e1e1e1;
  white-space: nowrap;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .df-button-wrapper{
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    .df-button-content{
      padding: 0.5em 0.8em;
    }
    .df-button-icon>*{
      vertical-align: middle;
    }
    &.df-button-right{
      .df-button-icon{
        order: 2;
      }
      .df-button-content{
        order: 1;
        padding-right: 0.3em;
        padding-left: 0.2em;
      }
    }
    &.df-button-left{
      .df-button-icon{
        order: 1;
      }
      .df-button-content{
        order: 2;
        padding-right: 0.2em;
        padding-left: 0.2em;
      }
    }
  }

  &.df-button-primary{
    background-color: #2d8cf0;
    border-color: #2d8cf0;
    color: #fff;
  }
  &.df-button-success{
    background-color: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
  &.df-button-info{
    background-color: #909399;
    border-color: #909399;
    color: #fff;
  }
  &.df-button-warning{
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
  &.df-button-danger{
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
  &:hover,&:focus{
    opacity: 0.8;
  }
  &:active{
    opacity: 1;
  }
  &.df-button-circle{
    padding: .4em;
    .df-button-wrapper{
      padding: 0;
      .df-button-content{
        padding: 0;
        display: none;
      }
    }
    display: inline-block;
    border-radius: 50%;
  }
  &.df-button-disabled{
    cursor: not-allowed;
  }
}
.df-button:disabled{
  cursor: not-allowed;
}
</style>
