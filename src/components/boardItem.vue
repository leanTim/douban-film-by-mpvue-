<template>
    <div v-if="!initData.subject" class="movie-item">   
        <img  :src="initData.images.large" alt="">
        <p>{{ initData.title }}</p>
    </div>
    <div v-else class="movie-item">   
        <img  :src="initData.subject.images.large" alt="">
        <p>{{ initData.subject.title }}</p>
    </div>
</template>

<script>
    export default {
        props: ['initData']
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