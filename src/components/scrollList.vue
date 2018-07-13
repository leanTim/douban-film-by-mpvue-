<template>
    <div class="movie-list">
        <p class="classify-title">正在上映的电影-北京</p>
        <scroll-view :scroll-x="true">
            <boardItem></boardItem>
            <boardItem></boardItem>
            <boardItem></boardItem>
            <boardItem></boardItem>
            <boardItem></boardItem>
            <boardItem></boardItem>
            <boardItem></boardItem>
            <boardItem></boardItem>
            <boardItem></boardItem>
        </scroll-view>
    </div>
</template>

<script>
    import boardItem from '@/components/boardItem'
    export default {
        components: {
            boardItem
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
        background: #fff;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

</style>