<template>
    <div class="search">
        <van-search  v-if="radioStyle=='1'" v-model="value" shape="round"  placeholder="请输入搜索关键词" />
        <van-search  v-else-if="radioStyle=='2'" v-model="value" shape="round" :background="color" placeholder="请输入" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props:{
            value:{
                type:String,
            },
            color:{
                type:String,
                default:'#fff'
            },
            interColor:{
                type:String,
            },
            radioStyle:{
                type:String,
                default:'1'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>