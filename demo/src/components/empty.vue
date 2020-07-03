<template>
    <div class="empty">
        <div class="container" :style="{height: scrollerHeight}"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props:{
            emptyHeight:{
                type:Number,
            },
        },
        computed: {
            scrollerHeight: function() {
                    return (this.emptyHeight) + 'px';
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>