<template>
  <svg class="df-icon" :class="`df-icon-${dfIconSize}`" @click="iconClick">
    <use :xlink:href="`#df-${dfIconName}`"></use>
  </svg>
</template>

<script>
import '../common/svg'
export default {
  name:'DfIcon',
  props:{
    dfIconName:{
      type: String
    },
    dfIconSize:{
      type: String,
      default:'small',
      validator(value){
        return[
          'small',
          'medium',
          'large'
        ].indexOf(value)>-1
      }
    }
  },
  methods:{
    iconClick(event){
      this.$emit('click',event)
    }
  }
  // mounted(){
  //     console.log(this.$props.name)
  // }
}
</script>

<style lang="scss">
.df-icon{
  cursor: pointer;
  &.df-icon-small{
    width: 1.8em;
    height: 1.8em;
  }
  &.df-icon-medium{
    width: 2.8em;
    height: 2.8em;
  }
  &.df-icon-large{
    width: 3.8em;
    height: 3.8em;
  }
}
</style>
