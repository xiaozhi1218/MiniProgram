// pages/home/home.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.原生的方式发送网络请求
    // 发送网络请求
    // 1.发送最简单的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/hy/recommend',
    //   success: (result)=>{
    //     console.log(result);
    //   }
    // })
    // 2.get请求，但是携带参数
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/hy/home/data',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: (res) => {
    //     console.log(res);
        
    //   }
    // })
    // 3.post请求，并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: 'cyz',
    //     age: 18
    //   },
    //   success: (res) => {
    //     console.log(res);
    //   },
    //   fail: (err) => {
    //     console.log(err);
    //   }
    // })

    // 2.使用封装的request发送网络请求
    // Promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://123.207.32.32:8000/api/hy/recommend',
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
})