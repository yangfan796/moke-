<template>
    <div class="commodityGroup">
        <div class="header">
            <h4>所有分组</h4>
            <div class="headerRight">
                <div>更多</div><van-icon name="arrow" />
            </div>
        </div>
        <div class="goods">
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
.commodityGroup{
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 15px;
        .headerRight{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    .goods{
         .item{
            padding: 10px 15px;
            background-color: #fff;
            width: 100%;
            display: flex;
            flex-direction: column;
            text-align: left;
            border: 1px solid #ddd;
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
}
</style>