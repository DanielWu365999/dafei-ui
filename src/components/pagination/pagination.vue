<template>
<div class="df-pagination">
  <df-button icon-name="left" :disabled="currentPage==1" @click="handlePre"></df-button>
  <ul class="df-pagination-content">
    <li v-for="i in totalPages" :class="currentPage == i?'active':''" @click="handleClick(i)">{{i}}</li>
  </ul>
  <df-button icon-name="right" :disabled="currentPage == totalPages" @click="handleNext"></df-button>
  <div class="df-pagination-total">
    共{{total}}条
  </div>
</div>
</template>

<script>
import Button from '../button/button'
import Icon from "../icon/icon";
export default {
  name: "pagination",
  components:{
    'df-button':Button,
    'df-icon': Icon
  },
  props:{
    pageSize:{
      type:Number,
      default:10
    },
    total:{
      type:Number
    }
  },
  data(){
    return{
      currentPage:1,
      totalPages:Math.round(this.total/this.pageSize)
    }
  },
  methods:{
    handleClick(i){
      this.currentPage = i;
      this.$emit('current-change',i);
    },
    handlePre(){
      if(this.currentPage == 1){
        return;
      }
      this.currentPage --;
      this.$emit('current-change',this.currentPage);
    },
    handleNext(){
      if(this.currentPage == this.totalPages){
        return;
      }
      this.currentPage ++;
      this.$emit('current-change',this.currentPage);
    }
  }
}
</script>

<style lang="scss">
.df-pagination{
  display: flex;
  justify-content: center;
  margin: 5px 0;
  align-items: center;
  .df-pagination-content{
    display: inline-block;
    padding: 0;
    margin: 0;
    li{
      display: inline-block;
      width: 28px;
      height: 28px;
      line-height: 28px;
      background: #eee;
      list-style-type: none;
      font-size: 13px;
      margin: 0 3px;
      border-radius: 3px;
      cursor: pointer;
      text-align: center;
      &:hover,&.active{
        background: #3eaf7c;
        color: #fff;
      }
    }
  }
  .df-pagination-total{
    font-size: 13px;
    letter-spacing: 1px;
    margin: 0 5px;
  }
}
</style>
