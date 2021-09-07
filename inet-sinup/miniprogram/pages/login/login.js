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
    user: '',
    pass: '',
    userNameInput: null,
    nickName: "",
    avatarUrl: "",
    gender: "",
    province: "",
    city: "",
    country: ""
  },
  clearInput() {
    this.setData({
      user: '',
      pass: ''
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
        if (wx.getStorageSync('Token')) {
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
              wx.setStorageSync('Info', res.userInfo)
            }
          })
          wx.switchTab({
            url: '../index/index',
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '账号或密码错误'
          })
        }
      }
    })
  },
  saveData() {
    this.onReady()
  },
  toReg() {
    wx.navigateTo({
      url: '../register/register',
    })
  },

  showUserInfoTap: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res);

        var userInfo = res.userInfo
        console.log(userInfo);
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender  //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        if (gender == 1) {
          gender = '男'
        } else if (gender == 2) {
          gender = '女'
        } else {
          gender = '未知'
        }
        that.setData({
          nickName: nickName,
          avatarUrl: avatarUrl,
          gender: gender,
          country: country,
          province: province
        })
      }
    })
  },



  formReset(e) {
    wx.navigateTo({
      url: 'page/Home/Home',
    })
  },

  toReg() {
    wx.redirectTo({
      url: '/pages/register/register',
    })
  }
})