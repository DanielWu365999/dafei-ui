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

    <div class="scroll">
      <ul class="infinite-list" v-infinite-scroll="load">
        <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
      </ul>
    </div>
    <div class="recordTime" v-if="false">
      <df-recordTime-picker :data="data"></df-recordTime-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      aaa:'',
      count:10,
      data:[
        {Week:0,
          name:'星期一',
          time:[{show:false,time:0},{show:false,time:1},{show:false,time:2},{show:false,time:3},{show:false,time:4},{show:false,time:5},{show:false,time:6},{show:false,time:7},{show:false,time:8},{show:false,time:9},{show:false,time:10},{show:false,time:11},{show:false,time:12},{show:false,time:13},{show:false,time:14},{show:false,time:15},{show:false,time:16},{show:false,time:17},{show:false,time:18},{show:false,time:19},{show:false,time:20},{show:false,time:21},{show:false,time:22},{show:false,time:23},{show:false,time:24},{show:false,time:25},{show:false,time:26},{show:false,time:27},{show:false,time:28},{show:false,time:29},{show:false,time:30},{show:false,time:31},{show:false,time:32},{show:false,time:33},{show:false,time:34},{show:false,time:35},{show:false,time:36},{show:false,time:37},{show:false,time:38},{show:false,time:39},{show:false,time:40},{show:false,time:41},{show:false,time:42},{show:false,time:43},{show:false,time:44},{show:false,time:45},{show:false,time:46},{show:false,time:47}]
        },
        {Week:1,
          name:'星期二',
          time:[{show:false,time:0},{show:false,time:1},{show:false,time:2},{show:false,time:3},{show:false,time:4},{show:false,time:5},{show:false,time:6},{show:false,time:7},{show:false,time:8},{show:false,time:9},{show:false,time:10},{show:false,time:11},{show:false,time:12},{show:false,time:13},{show:false,time:14},{show:false,time:15},{show:false,time:16},{show:false,time:17},{show:false,time:18},{show:false,time:19},{show:false,time:20},{show:false,time:21},{show:false,time:22},{show:false,time:23},{show:false,time:24},{show:false,time:25},{show:false,time:26},{show:false,time:27},{show:false,time:28},{show:false,time:29},{show:false,time:30},{show:false,time:31},{show:false,time:32},{show:false,time:33},{show:false,time:34},{show:false,time:35},{show:false,time:36},{show:false,time:37},{show:false,time:38},{show:false,time:39},{show:false,time:40},{show:false,time:41},{show:false,time:42},{show:false,time:43},{show:false,time:44},{show:false,time:45},{show:false,time:46},{show:false,time:47}]
        },
        {Week:2,
          name:'星期三',
          time:[{show:false,time:0},{show:false,time:1},{show:false,time:2},{show:false,time:3},{show:false,time:4},{show:false,time:5},{show:false,time:6},{show:false,time:7},{show:false,time:8},{show:false,time:9},{show:false,time:10},{show:false,time:11},{show:false,time:12},{show:false,time:13},{show:false,time:14},{show:false,time:15},{show:false,time:16},{show:false,time:17},{show:false,time:18},{show:false,time:19},{show:false,time:20},{show:false,time:21},{show:false,time:22},{show:false,time:23},{show:false,time:24},{show:false,time:25},{show:false,time:26},{show:false,time:27},{show:false,time:28},{show:false,time:29},{show:false,time:30},{show:false,time:31},{show:false,time:32},{show:false,time:33},{show:false,time:34},{show:false,time:35},{show:false,time:36},{show:false,time:37},{show:false,time:38},{show:false,time:39},{show:false,time:40},{show:false,time:41},{show:false,time:42},{show:false,time:43},{show:false,time:44},{show:false,time:45},{show:false,time:46},{show:false,time:47}]
        },
        {Week:3,
          name:'星期四',
          time:[{show:false,time:0},{show:false,time:1},{show:false,time:2},{show:false,time:3},{show:false,time:4},{show:false,time:5},{show:false,time:6},{show:false,time:7},{show:false,time:8},{show:false,time:9},{show:false,time:10},{show:false,time:11},{show:false,time:12},{show:false,time:13},{show:false,time:14},{show:false,time:15},{show:false,time:16},{show:false,time:17},{show:false,time:18},{show:false,time:19},{show:false,time:20},{show:false,time:21},{show:false,time:22},{show:false,time:23},{show:false,time:24},{show:false,time:25},{show:false,time:26},{show:false,time:27},{show:false,time:28},{show:false,time:29},{show:false,time:30},{show:false,time:31},{show:false,time:32},{show:false,time:33},{show:false,time:34},{show:false,time:35},{show:false,time:36},{show:false,time:37},{show:false,time:38},{show:false,time:39},{show:false,time:40},{show:false,time:41},{show:false,time:42},{show:false,time:43},{show:false,time:44},{show:false,time:45},{show:false,time:46},{show:false,time:47}]
        },
        {Week:4,
          name:'星期五',
          time:[{show:false,time:0},{show:false,time:1},{show:false,time:2},{show:false,time:3},{show:false,time:4},{show:false,time:5},{show:false,time:6},{show:false,time:7},{show:false,time:8},{show:false,time:9},{show:false,time:10},{show:false,time:11},{show:false,time:12},{show:false,time:13},{show:false,time:14},{show:false,time:15},{show:false,time:16},{show:false,time:17},{show:false,time:18},{show:false,time:19},{show:false,time:20},{show:false,time:21},{show:false,time:22},{show:false,time:23},{show:false,time:24},{show:false,time:25},{show:false,time:26},{show:false,time:27},{show:false,time:28},{show:false,time:29},{show:false,time:30},{show:false,time:31},{show:false,time:32},{show:false,time:33},{show:false,time:34},{show:false,time:35},{show:false,time:36},{show:false,time:37},{show:false,time:38},{show:false,time:39},{show:false,time:40},{show:false,time:41},{show:false,time:42},{show:false,time:43},{show:false,time:44},{show:false,time:45},{show:false,time:46},{show:false,time:47}]
        },
        {Week:5,
          name:'星期六',
          time:[{show:false,time:0},{show:false,time:1},{show:false,time:2},{show:false,time:3},{show:false,time:4},{show:false,time:5},{show:false,time:6},{show:false,time:7},{show:false,time:8},{show:false,time:9},{show:false,time:10},{show:false,time:11},{show:false,time:12},{show:false,time:13},{show:false,time:14},{show:false,time:15},{show:false,time:16},{show:false,time:17},{show:false,time:18},{show:false,time:19},{show:false,time:20},{show:false,time:21},{show:false,time:22},{show:false,time:23},{show:false,time:24},{show:false,time:25},{show:false,time:26},{show:false,time:27},{show:false,time:28},{show:false,time:29},{show:false,time:30},{show:false,time:31},{show:false,time:32},{show:false,time:33},{show:false,time:34},{show:false,time:35},{show:false,time:36},{show:false,time:37},{show:false,time:38},{show:false,time:39},{show:false,time:40},{show:false,time:41},{show:false,time:42},{show:false,time:43},{show:false,time:44},{show:false,time:45},{show:false,time:46},{show:false,time:47}]
        },
        {Week:6,
          name:'星期日',
          time:[{show:false,time:0},{show:false,time:1},{show:false,time:2},{show:false,time:3},{show:false,time:4},{show:false,time:5},{show:false,time:6},{show:false,time:7},{show:false,time:8},{show:false,time:9},{show:false,time:10},{show:false,time:11},{show:false,time:12},{show:false,time:13},{show:false,time:14},{show:false,time:15},{show:false,time:16},{show:false,time:17},{show:false,time:18},{show:false,time:19},{show:false,time:20},{show:false,time:21},{show:false,time:22},{show:false,time:23},{show:false,time:24},{show:false,time:25},{show:false,time:26},{show:false,time:27},{show:false,time:28},{show:false,time:29},{show:false,time:30},{show:false,time:31},{show:false,time:32},{show:false,time:33},{show:false,time:34},{show:false,time:35},{show:false,time:36},{show:false,time:37},{show:false,time:38},{show:false,time:39},{show:false,time:40},{show:false,time:41},{show:false,time:42},{show:false,time:43},{show:false,time:44},{show:false,time:45},{show:false,time:46},{show:false,time:47}]
        }
      ]
    }
  },
  mounted(){
    // let _this = this;
    // let oScrollEl = document.getElementsByClassName('infinite-list')[0];
    // oScrollEl.onscroll = function(){
    //   console.log(this.scrollTop);
    //   if(this.scrollTop + this.offsetHeight +20 >= this.scrollHeight){
    //     _this.count += 2;
    //   }
    // }
  },
  methods:{
    load(){
      this.count += 2;
    },
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
<style lang="scss" scoped>
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
.infinite-list{
  width: 210px;
  height: 100px;
  margin: 0 auto;
  overflow: auto;
  border: 1px solid #3eaf7c;
  padding: 0 30px;
  li{
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #3eaf7c;
    border-radius: 3px;
    margin: 5px 0;
    display: block;
  }
}
</style>
