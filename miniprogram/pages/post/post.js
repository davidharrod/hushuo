// miniprogram/frontendPages/post/post.js
const DB = wx.cloud.database().collection("posts")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
    DB
    .doc(id)
    .get()
    .then(res => {
      this.setData({
        post: res.data
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
//底部栏的html代码
{/* <view class="commentOrSubscribe">
    <image mode="aspectFit" src="/../../static/images/writePost/comment.png"></image>
    <image mode="aspectFit" src="/../../static/images/writePost/subscribe.png"></image>
  </view> */}