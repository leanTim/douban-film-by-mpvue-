// import axios from 'axios'
var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()

fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    request.headers["content-type"]="json";
      //打印出请求体
    //   console.log(request)
      //终止请求
      //var err=new Error("xxx")
      //err.request=request
      //return Promise.reject(new Error(""))

    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})


export default {
    getInitData ({state}) {
        
        var in_theaters = function () {
            return fly.get('in_theaters', {start:0,count: 10}, {
                baseURL: 'https://douban.uieee.com/v2/movie/',
                timeout: 5000
            })
        }
        var coming_soon = function () {
            return fly.get('coming_soon', {start:0,count: 10}, {
                baseURL: 'https://douban.uieee.com/v2/movie/',
                timeout: 5000
            })
        }
        var weekly = function () {
            return fly.get('weekly', {start:0,count: 10}, {
                baseURL: 'https://douban.uieee.com/v2/movie/',
                timeout: 5000
            })
        }
        var new_movies = function () {
            return fly.get('new_movies', {start:0,count: 10}, {
                baseURL: 'https://douban.uieee.com/v2/movie/',
                timeout: 5000
            })
        }
        var top250 = function () {
            return fly.get('top250', {start:0,count: 10}, {
                baseURL: 'https://douban.uieee.com/v2/movie/',
                timeout: 5000
            })
        }
        var us_box = function () {
            return fly.get('us_box', {start:0,count: 10}, {
                baseURL: 'https://douban.uieee.com/v2/movie/',
                timeout: 5000
            })
        }
        // var requestList = ;
   
        fly.all([in_theaters(), coming_soon(), weekly(), new_movies(), top250(), us_box()])
        .then(fly.spread(function (in_theaters, coming_soon, weekly, new_movies, top250, us_box) {
            Array.prototype.map.call(arguments, function (data, index) {
               
                    state.initData[state.sorts[index].key] = data.data.subjects
                
                if (index === 0) {
                    state.swiperImgList = data.data.subjects.slice(0, 6)
                }


                // state.swiperImgList = 
                console.log(state.initData)
                // console.log(state.sorts[index].key)   
            })

        }))
        .catch((err) => {
            console.log(err)
        })
    },
}
