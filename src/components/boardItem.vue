<template>
    <div class="movie-item">
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519070834.jpg" alt="">
        <p>我不是药神</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .movie-item {
        margin: 10rpx;
        width: 180rpx;
        display: flex;
        flex-direction: column;
        /* height: 250rpx; */
    }
    .movie-item img {
        width: 100%;
        height: 250rpx;

        vertical-align: middle;
    }
    .movie-item p {
        font-size: 24rpx;
        text-align: center;
    }
</style>