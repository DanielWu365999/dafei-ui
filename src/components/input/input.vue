<template>
  <div class="df-input-content">
    <div class="df-input-wrapper">
      <span class="df-input-icon" v-if="icon">
        <df-icon :df-icon-name="icon" dfIconSize="small"></df-icon>
      </span>
      <input class="df-input" type="text" :value="currentValue" @input="handleInput($event)"
             :disabled="disabled" :readonly="readonly" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
import Icon from '../icon/icon'
export default {
  name: "Dfinput",
  components:{
    "df-icon":Icon
  },
  data(){
    return{
      currentValue:this.value
    }
  },
  props:{
    value:{
      type:String
    },
    icon:{
      type:String
    },
    disabled:{
      type:Boolean
    },
    readonly:{
      type:Boolean
    },
    placeholder:{
      type:String
    }
  },
  methods:{
    handleInput($event) {
      this.currentValue = $event.target.value;
      this.$emit('input',this.currentValue);
    }
  },
  watch:{
    currentValue(val,oldVal){
      console.log(val);
    }
  }
}
</script>

<style lang="scss">
.df-input-icon{
  display: inline-block;
  font-size: 13px;
  height: 22px;
}
.df-input-wrapper{
  border:1px solid #eee;
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  input{
    border: none;
    outline: none;
    padding: 0.7em 0.2em;
    cursor: pointer;
    &:disabled{
      cursor: not-allowed;
    }
  }
}
</style>
