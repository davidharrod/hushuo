// miniprogram/frontendPages/login/login.js
const DB = wx.cloud.database().collection("accounts")
var id
var pwd

Page({
  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    inputValue: '',
    id: '',
    pwd: ''
  },

  handelInput: function(e){
    let type = e.currentTarget.id
    console.log(type,e.detail.value)
    this.setData({
      [type]: e.detail.value
    })
  },

  login: function(e){
    let {id, pwd} = this.data
    //快捷跳转到开发页面
    if (pwd == 1){
      wx.switchTab({
        url: '../trending/trending',
      })
    }
    //验证学号非空
    if(!id){
      wx.showToast({
        title: '学号不能为空',
        icon: 'none'
      })
      return
    }
    //验证学号是否合法
    let idReg = /^2[0,1]\d{8}/
    if(!idReg.test(id)){
      wx.showToast({
        title: '学号输入错误',
        icon: 'none'
      })
      return
    }
    //验证密码非空
    if(!pwd){
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
      return
    }
  },
  

  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this
    // that.getId()
    // that.getPwd()

    // DB
    // .where({
    //   id:id
    // })
    // .get()
    // .then(res => {
    //   this.setData({
    //     account: res.data
    //   })
    // })
    // .catch(err => {
    //   console.log("出问题啦~~",err)
    // })
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