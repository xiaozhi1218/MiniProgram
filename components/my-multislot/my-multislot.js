// components/my-multislot/my-multislot.js
Component({
  // 让使用者传入数据
  properties: {
    title: {
      type: String,
      value: '',
      observer: function(newVal, oldVal) {
        
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  // 定义组件的配置选项
  // multipleSlots：在使用多插槽时需要设置true
  // styleIsolation： 设置样式的隔离方式
  options: {
    multipleSlots: true
  },

  // 外界给组件传入额外样式
  externaClasses: [''],

  // 监听properties/data的改变
  observers: {
    counter: function(newVal) {
      console.log(newVal);
    }
  },

  // 组件中监听生命周期函数
  // 1.监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示出来的');
    },
    hide() {
      console.log('监听组件所在页面隐藏起来时');
    },
    resize() {
      console.log('监听页面尺寸的改变');
    }
  },
  
  // 2.监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log('组件创建');
    },
    attached() {
      console.log('组件被添加到页面');
    },
    ready() {
      console.log('组件被渲染出来');
    },
    moved() {
      console.log('组件被移动到另一个节点');
    },
    detached() {
      console.log('组件被移除掉');
    }
  }
})
