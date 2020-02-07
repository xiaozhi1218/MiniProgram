// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShowToast() {
    wx.showToast({
      title: '加载中',
      duration: 3000,
      icon: 'loading',
      mask: true,
      success: function() {
        console.log('展示弹窗成功');
      },
      fail: function() {
        console.log('展示弹窗失败');
      },
      complete: function() {
        console.log('完成函数的调用');
      }
    })
  },
  handleShowModel() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: 'red',
      success: (res) => {
        console.log(res);
        if (res.cancel) {
          console.log("用户点击了取消");
        }
        if (res.confirm) {
          console.log('用户点击了确定');
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })

    setTimeout(() => {
      wx.hideLoading()
    }, 1000);
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: (res) => {
        console.log(res);
        // switch (res.tabIndex) {
        //   case 0:
            
        //     break;
        
        //   default:
        //     break;
        // }
      }
    })
  },
  onShareAppMessage: function(options) {
    return {
      title: '你好',
      path: '/pages/about/about',
      imageUrl: '' 
    }
  }
})