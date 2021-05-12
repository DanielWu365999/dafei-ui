<template>
  <div class="main">
    <div class="icon">
      <df-icon df-icon-name="info" df-icon-size="small"></df-icon>
      <df-icon df-icon-name="search" df-icon-size=small></df-icon>
      <df-icon df-icon-name="error" df-icon-size=small></df-icon>
      <df-icon df-icon-name="info" df-icon-size=small></df-icon>
    </div>
    <div class="layout">
      <df-row>
        <df-col :span="12">
          <div class="layout-content bg-purple-dark"></div>
        </df-col>
      </df-row>
      <df-row>
        <df-col :span="12">
          <div class="layout-content bg-purple-dark"></div>
        </df-col>
      </df-row>
    </div>
    <div class="button">
      <df-button icon-name="upload" circle>登录</df-button>
      <df-button type="primary" icon-name="upload" >注册</df-button>
      <df-button type="success" icon-name="upload">登录</df-button>
    </div>

    <div class="input">
      <df-input icon="search" v-model="aaa" placeholder="苏尼斯"></df-input>
    </div>

    <div class="toast">
      <df-button type="primary" @click="showToast">点击</df-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      aaa:''
    }
  },
  methods:{
    showToast(){
      this.$toast({
        message:'恭喜你这是一条成功信息',
        autoClose:false,
        type:'warning',
        closeButton:{
          callback(){
            alert('关闭')
          }
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
