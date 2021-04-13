// miniprogram/pages/writePost/writePost.js
const DB = wx.cloud.database().collection("posts")
let title = ''
let topic = ''
let content = ''

Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts:[],
    topic:'',
    buttonContent:'来添加个话题吧',
    isPickerHidden:true
  },

  //显示picker
  showPicker: function(){
    this.setData({
      isPickerHidden:false
    })
  },

  //读取title
  getTitle(e){
    title = e.detail.value
  },

  //读取选择topic
  bindChange: function(e){
    this.setData({
      topic: this.data.posts[e.detail.value[0]].topic,
      buttonContent: this.data.posts[e.detail.value[0]].topic
    })
    topic = this.data.posts[e.detail.value[0]].topic
  },

  //滚动结束选择话题
  closePicker(){
    this.setData({isPickerHidden:true})
  },

  confirmTopic: function(e){
    setTimeout(this.closePicker,500)
  },

  //读取content
  getContent(e){
    content =  e.detail.value
  },

  /**
   * 生命周期函数--监听页面加载
   */

  //将动态存储至数据库并发布动态
  submit(e){
    //帖子完整，发布并跳转回上一个页面
    if((title&&content)){
      DB.add({
        data:{
          title: title,
          topic: topic,
          content: content
        }
        })
        console.log('ok')
    }
  },

  onLoad: function (options) {
    DB.get()
    .then(res => {
      this.setData({
        posts: res.data
      })
    })
    .catch(err => {
      console.log("出问题啦~~",err)
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
    this.showPicker()
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