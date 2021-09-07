Page({
  onShareAppMessage() {
    return {
      Time: ''
    }
  },
  data: {
    Time: ""
  },
  sinup() {
    wx.request({
      url: 'http://dairenhao.xyz:9099/InetSin/sinin',
      header: {
        token: wx.getStorageSync('Token')
      },
      success: res => {
        // console.log(res.data.message)
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  sinout() {
    wx.request({
      url: 'http://dairenhao.xyz:9099/InetSin/sinout',
      header: {
        token: wx.getStorageSync('Token')
      },
      success: res => {
        // console.log(res.data.message)
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  onLoad: function() {
    wx.request({
      url: 'http://dairenhao.xyz:9099/InetSin/sinOneTime',
      header: {
        token: wx.getStorageSync('Token')
      },
      success: res => {
        // console.log(res)
        this.setData({
          Time: res.data.message
        })
      }
    })
  }
})


