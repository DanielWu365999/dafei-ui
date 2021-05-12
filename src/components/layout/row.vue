<template>
    <div class="df-row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'DfRow',
    props:{
        gutter:{
            type:[Number],
            default: 0
        },
        justify:{
            type:[String],
            validator(value){
                return ['end','center','around','between'].indexOf(value)>-1
            }
        }
    },
    computed:{
        rowStyle(){
            let{gutter}=this
            return {
                marginLeft:-gutter/2+'px',
                marginRight:-gutter/2+'px'
            }
        },
        rowClass(){
            let{justify} = this;
            return[justify&&`df-row-${justify}`]
        }
    },
    mounted(){
        this.$children.forEach((vm)=>{
            vm.gutter=this.gutter
        })
    }
}
</script>

<style lang="scss">
    .df-row{
        display: flex;
        &.df-row-end{
            justify-content: flex-end;
        }
        &.df-row-center{
            justify-content: center;
        }
        &.df-row-around{
            justify-content: space-around;
        }
        &.df-row-between{
            justify-content: space-between;
        }
    }
</style>
