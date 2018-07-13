<template>
    <div class="slide">
        <swiper interval="2000" autoplay="true" indicator-dots="true">
            <swiper-item v-for="(imgUrl, index) in swiperImgList" :key="index">
                <image mode="aspectFill" :src="imgUrl.images.small" />
            </swiper-item>
        </swiper>
        <div class="board">
            <scrollList></scrollList>
        </div>
    </div>
  
</template>

<script>
    // import store from '../../store'
    import scrollList from '@/components/scrollList'
    import card from '@/components/card'
    import { mapMutations, mapState, mapActions } from 'vuex'
    export default {
        computed: mapState({
            initData: 'initData',
            swiperImgList: 'swiperImgList'
        }),
        beforeMount () {
            this.getInitData()
        },
        methods: {
            ...mapActions(['getInitData'])
        },
        components: {
            scrollList,
            card
        }
    }
</script>

<style scoped>
    .slide swiper {
        width: 100%;
        height: 480rpx;
        /* height: auto; */
    }
    .slide swiper image {
        width: 100%;
        height: 100%;
    }
</style>