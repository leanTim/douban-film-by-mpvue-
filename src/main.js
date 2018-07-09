import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    store,
    App
    })
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/search/main', 'pages/profile/main', '^pages/board/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
     tabBar: {
        list: [
            {
                text: "榜单",
                pagePath: "pages/board/main",
                iconPath: "static/images/board.png",
                selectedIconPath: "static/images/board-actived.png"
            },
            {
                text: "搜索",
                pagePath: "pages/search/main",
                iconPath: "static/images/search.png",
                selectedIconPath: "static/images/search-actived.png"
            },
            {
                text: "关于我",
                pagePath: "pages/profile/main",
                iconPath: "static/images/profile.png",
                selectedIconPath: "static/images/profile-actived.png"
            }
        ],
        color: "#666666",
        selectedColor: "#000000",
        borderStyle: "white",
        backgroundColor: "#f8f9fb"
    },
  }
}
