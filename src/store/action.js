// import axios from 'axios'
var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()

fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    request.headers["content-type"]="json";
      //打印出请求体
      console.log(request)
      //终止请求
      //var err=new Error("xxx")
      //err.request=request
      //return Promise.reject(new Error(""))

    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})


const baseUrl = 'https://douban.uieee.com/v2/movie/'

export default {
    getInitData ({state}) {
        // console.log(this)
        state.sorts.map(function (sort, index) {
            var sort = sort.key

            fly.get({
                baseURL: 'https://douban.uieee.com/v2/movie/',
                url: sort,
                timeout: 5000
            })
            .then((res) => {
                state.initData[sort] = res
                console.log(res)
            })
            .catch((err) => {console.log(err)})
        })
    }
}
