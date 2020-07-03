<template>
    <div class="seckill">
       <div class="header"><i class="iconfont icon-miaosha"></i> 限时秒杀</div>
       <div class="item" v-for="(e,i) in recommendList" :key="i">
            <div class="outTime">
                <div>距离开枪时间：</div>
                <van-count-down :time="time">
                    <template v-slot="timeData">
                        <span class="block">{{ timeData.hours }}</span>
                        <span class="colon">:</span>
                        <span class="block">{{ timeData.minutes }}</span>
                        <span class="colon">:</span>
                        <span class="block">{{ timeData.seconds }}</span>
                    </template>
                </van-count-down>
            </div>
            <div class="bottom">
                 <div class="img">
                    <img :src="e.imgUrl" alt="">
                </div>
                <div class="detail">
                    <div class="title">{{e.title}}</div>
                    <div class="price">￥{{e.price}}</div>
                    <div class="want">我要抢</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                time:30 * 60 * 60 * 1000,
            }
        },
        props:{
            recommendList:{
                type:Array,
            }
        }
    }
</script>

<style lang="scss" scoped>
.seckill{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .header{
        color: #ff8080;
        font-size: 16px;
        text-align: left;
        width: 100%;
        padding: 15px;
        border-top: 1px #ccc solid;
        border-bottom: 1px #ccc solid;
    }
    .item{
        background-color: #fff;
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 10px 10px 20px;
        margin-bottom: 15px;
        .bottom{
            background-color: #fff;
            width: 100%;
            display: flex;
            justify-content: start;
            text-align: left;
            padding-top: 10px;
             .img{
                    width: 40%;
                    background-color: #000;
                    margin-right: 10px;
                }
                .price{
                    color: crimson;
                }
                .want{
                    font-size: 16px;
                    background-color: crimson;
                    color: #fff;
                    padding: 5px 10px;
                    border-radius: 10px;
                }
        }
        .outTime{
            width: 100%;
            display: flex;
        }
         .colon {
            display: inline-block;
            margin: 0 4px;
            color: #ee0a24;
        }
        .block {
            display: inline-block;
            width: 22px;
            color: #fff;
            font-size: 12px;
            text-align: center;
            background-color: #ee0a24;
        }
    }
}
</style>