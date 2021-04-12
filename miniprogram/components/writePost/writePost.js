// components/writePost/writePost.js
Component({
  methods: {
    writePost: function(e){
      wx.navigateTo({
        url: '../../pages/writePost/writePost',
      })
    }
  }
})
