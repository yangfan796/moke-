<template>
    <div class="recommendList">
        <div class="item" v-for="(e,i) in recommendList" :key="i">
            <div class="img">
                <img :src="e.imgUrl" alt="">
            </div>
            <div class="detail">
                <div class="title">{{e.title}}</div>
                <div class="price">￥{{e.price}}</div>
                <div class="num">销量：{{e.num}}件</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            recommendList:{
                type:Array,
            }
        }
    }
</script>

<style lang="scss" scoped>
.recommendList{
    margin: 15px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item{
        background-color: #fff;
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 10px 10px 20px;
        margin-bottom: 15px;
        .img{
            width: 100%;
            height: 280px;
            background-color: #000;
        }
        .price{
            color: crimson;
        }
    }
}
</style>