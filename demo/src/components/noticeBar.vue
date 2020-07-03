<template>
    <div class="noticeBar">
        <van-notice-bar
            :background="noticeBgColor"
            left-icon="volume-o"
            scrollable 
            :text="text"
        />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
         props:{
            text:{
                type:String,
            },
            noticeBgColor:{
                type:String
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>