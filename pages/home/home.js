// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home'

const types = ['pop', 'new', 'sell']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      "pop": {
        page: 0,
        list: []
      },
      "new": {
        page: 0,
        list: []
      },
      "sell": {
        page: 0,
        list: []
      }
    },
    currentType: 'pop'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.请求轮播图和推荐数据
    this._getMultiData()

    // 2.请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },
  // ---------网络请求相关-----------
  _getMultiData() {
    getMultiData().then(res => {
      // console.log(res)
      // 取出轮播图以及推荐数据
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list

      // 将banners和recommends放到data中
      this.setData({
        banners,
        recommends
      })
    })
  },
  _getGoodsData(type) {
    // 1.获取页码
    const page = this.data.goods[type].page + 1

    // 2.发送网络请求
    getGoodsData(type, page).then(res => {
      // 2.1 取出数据
      const list = res.data.data.list

      // 2.2 将数据保存到对应type的list中
      // const oldList = this.data.goods[type].list
      // oldList.push(...list)
      const goods = this.data.goods
      goods[type].list.push(...list)
      goods[type].page += 1

      // 2.3 将数据设置到data中的goods中
      // const typeKey = 'goods.${type}.list'
      // const pageKey = 'goods.${type}.page'

      this.setData({
        // [typeKey]: oldList,
        // [pageKey]: page
        goods: goods
      })
    })
  },
  // ------------事件监听相关--------------
  handleTabClick(event) {
    // console.log(event);
    // 取出index
    const index = event.detail.index

    // 2.设置currentType
    this.setData({
      currentType: types[index]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})