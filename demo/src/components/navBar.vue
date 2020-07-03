<template>
    <div class="navBar">
        <div class="item" v-for="(e,i) in navList" :key="i"> 
            <div class="img">
                <img :src="e.imgUrl" alt="">
            </div>
            <div class="typeName">{{e.typeName}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props:{
            navList:{
                type:Array,
            }
        }
    }
</script>

<style lang="scss" scoped>
.navBar{
    padding-top: 15px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        .img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            background-color: #000;
        }
    }
}
</style>