<template>
    <div class="movie-list">
        <p class="classify-title">正在上映的电影-北京</p>
        <scroll-view :scroll-x="true">
            <div class="scroll-wrap">
                <boardItem v-for="(movie, index) in movieList" :key="index" :initData="movie"></boardItem>
            </div>
        </scroll-view>
    </div>
</template>

<script>
    import boardItem from '@/components/boardItem'
    export default {
        components: {
            boardItem
        },
        data () {
            return {
                init: 'initData'
            }
        },
        methods: {
            // initData (index) {
            //     if (index == 2 || index == 5) {
            //         return this.$props[index].subject
            //     } else {
            //         return this.$props[index]
            //     }
            // }
        },
        props: ['movieList'],
        computed: {
            
        }
    }
</script>

<style scoped>
    .classify-title {
        font-size: 28rpx;
    }
    .movie-list {
        background: #f8f9fb;
        margin: 40rpx 0;
        padding: 20rpx;
        display: flex;
        flex-direction: column;

    }
    .scroll-wrap {
        width: 1800rpx;
        /* overflow: hidden; */
        background: #fff;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

</style>