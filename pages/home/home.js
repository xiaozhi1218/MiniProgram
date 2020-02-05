// pages/home/home.js
// getApp()获取App()产生的示例对象
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

const name = app.globalData.name
const age = app.globalData.age

// 注册一个页面
Page({
  // 2. 初始化数据
  data: {
    message: 'hhhhaha',
    list: []
  },
  
  // 1. 监听页面的生命周期函数
  // 页面被加载出来
  onLoad() {
    console.log('onLoad')
    wx.request({
      url: 'http://106.54.54.237:8000/api/hy/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })
  },
  // 页面显示出来时
  onShow() {
    console.log('onShow')
  },
  // 页面初次渲染完成时
  onReady() {
    console.log('onReady')
  },
  // 当页面隐藏起来时
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnload')
  },
  // 3. 监听wxml中相关的一些事件
  handleGetUserInfo(event) {
    console.log(event)
  },
  viewClick() {
    console.log('hahha点击事件')
  },

  // 4. 其他事件
  // 监听页面的滚动
  onPageScroll(obj) {
    // console.log(obj);
  },
  // 监听滚动到底部
  onReachBottom() {
    console.log('滚动到底部')
  },
  onPullDownRefresh() {
    console.log('下拉刷新的事件')
  }
})