//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'cloud1-0g6bqdd60ca01347',
      traceUser: true,
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
    }
    this.globalData = {}
  }
})
