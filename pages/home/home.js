// pages/home/home.js
Page({
  data: {
    name: 'cyz',
    age: 18,
    student: [
      {id: 110, name: 'kobe', age: 30},
      {id: 111, name: 'james', age: 28},
      {id: 112, name: 'curry', age: 32},
      {id: 113, name: 'cyz', age: 20}
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1.错误做法，界面不会刷新的
    // console.log('xxx')
    // this.data.counter++
    // console.log(this.data.counter)

    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    // console.log('zzz')
    this.setData({
      counter: this.data.counter - 1
    })
  }
})