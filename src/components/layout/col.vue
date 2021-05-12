<template>
    <div class="df-col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'DfCol',
    data(){
        return{
            gutter:0
        }
    },
    props:{
        span:{
            type:[Number],
            default: 24
        },
        offset:{
            type:[Number],
            default: 0
        }
    },
    computed:{
        colClass(){
            let{span,offset} = this;
            return[
                span&&`df-col-${span}`,
                offset&&`df-col-offset-${offset}`
            ]
        },
        colStyle(){
            return{
                paddingLeft:this.gutter/2 + 'px',
                paddingRight:this.gutter/2 + 'px'
            }
        }
    },

}
</script>

<style lang="scss">
    $class-prefix: df-col-;
    $class-offset: df-col-offset-;
    .df-col{
        height: 40px;
        >div.layout-content{
          padding: 1em;
          border-radius: 5px;
        }
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n/24) * 100%;
            }
        }
        @for $n from 1 through 24{
            &.#{$class-offset}#{$n}{
                margin-left: ($n/24) * 100%;
            }
        }

    }
    .bg-purple-dark{
      background: #3eaf7c;
    }
    .bg-purple-light{
      background: #9be3bf;
    }
</style>
