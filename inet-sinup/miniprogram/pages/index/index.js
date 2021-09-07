// pages/index/index.js
Page({

  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/index'
    }
  },

  data: {
    pickerHidden: true,
    chosen: '',
    account: false,
    canIUseGetUserProfile: true,
    avatarUrl: '',
    nickName: ''
  },

  onLoad: function (options) {
    let Info = wx.getStorageSync('Info')
    this.setData({
      avatarUrl: Info.avatarUrl,
      nickName: Info.nickName
    })
    var token = wx.getStorageSync('Token')
    if (!token) {
      this.setData({
        canIUseGetUserProfile: true,
        account: false
      })
    } else {
      this.setData({
        canIUseGetUserProfile: false,
        account: true
      })
      this.onReady()
    }
  },

  getUserProfile() {
    wx.navigateTo({
      url: '../login/login',
    })
  },

  formSubmit(e) {
    // console.log(e.detail)
    wx.request({
      url: 'http://dairenhao.xyz:9099/InetSin/login',
      data: {
        username: e.detail.value.user,
        password: e.detail.value.pass
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success: res => {
        // console.log(res.data.message.token)
        wx.setStorageSync('Token', res.data.message.token)
      }
    })
    wx.switchTab({
      url: '../Home/Home',
    })
  },

  formReset(e) {
    wx.navigateTo({
      url: 'page/Home/Home',
    })
  },

  toReg() {
    wx.navigateTo({
      url: 'page/register/register',
    })
  },

  exit() {
    wx.clearStorageSync()
    wx.reLaunch({
      url: '../index/index',
    })
  },
  onShow: function () {
    if (wx.getStorageSync('Token')) {
      this.onLoad()
    }
  }
})