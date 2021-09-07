// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    username: '',
    password: '',
    classes: '',
    number: '',
    phonenumber: ''
  },
  accountInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  userNameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  academyInput: function (e) {
    this.setData({
      classes: e.detail.value
    })
  },

  phoneInput: function (e) {
    this.setData({
      phonenumber: e.detail.value
    })
  },

  emailInput: function (e) {
    this.setData({
      number: e.detail.value
    })
  },

  register: function (e) {
    var that = this;
    if (that.data.username == "") {
      wx.showModal({
        title: "错误",
        content: "账号不能为空"
      });
    }
    if (that.data.password == "") {
      wx.showModal({
        title: "错误",
        content: "密码不能为空"
      });
    }
    if (that.data.name == "") {
      wx.showModal({
        title: "错误",
        content: "姓名不能为空"
      });
    }
    if (that.data.classes == "") {
      wx.showModal({
        title: "错误",
        content: "学院不能为空"
      });
    }
    // if (that.data.phone.length != 11) {
    //   wx.showModal({
    //     title: "错误",
    //     content: "手机格式有误"
    //   });
    // }
    if(that.data.username && that.data.password && that.data.name && that.data.classes) {
      wx.request({
        url: 'http://dairenhao.xyz:9099/InetSin/register',
        data: {
          username: that.data.username,
          password: that.data.password,
          name: that.data.name,
          classes: that.data.classes,
          number: that.data.number,
          phonenumber: that.data.phonenumber
        },
        method: 'POST',
        header: {
          "content-type": "application/json"
        },
        success: res => {
          console.log(res)
          wx.navigateTo({
            url: '../login/login',
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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