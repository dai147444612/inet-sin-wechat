// pages/sinin/sinin.js
import util from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    MultiArray: [],
    time: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://dairenhao.xyz:9099/InetSin/searchListTime',
      header: {
        token: wx.getStorageSync('Token')
      },
      success: res => {
        // console.log(res.data.message)
        let time = res.data.message.records
        for(let i = 0; i < time.length; i++) {
          // console.log(time[i].startTime)
          time[i].startTime = util.formatDate((time[i].startTime), 'Y.M.D h:m:s')
          // console.log(time[i].startTime)
        }
        this.setData({
          MultiArray: res.data.message.records,
        })
      }
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

  },

})