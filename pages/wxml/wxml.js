// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'hahah',
    firstName: 'kobe',
    lastName: 'brant',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies: ['星际穿越', '盗梦空间', '大话西游'],
    nums: [
      [109,12,123,45],
      [78,12,123,45],
      [109,23,34,2],
      [56,12,123,45]
    ],
    letters: ['a', 'b', 'c']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },
  changeColor() {
    // console.log('======')
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  changeScore() {
    this.setData({
      score: this.data.score + 6
    })
  },
  numberToFixed(value) {
    return value.toFixed(2)
  }
})