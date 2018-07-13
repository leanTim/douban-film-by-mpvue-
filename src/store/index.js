import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
    initData : {}, //board页面轮播
    swiperImgList: [],
    sorts: [
            { key: 'in_theaters' },
            { key: 'coming_soon' },
            { key: 'weekly' },
            { key: 'new_movies' },
            { key: 'top250' },
            { key: 'us_box' }
        ],// 分类 用作请求接口的url
        
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})