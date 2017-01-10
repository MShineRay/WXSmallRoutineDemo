//index.js
//获取应用实例
console.log('pages/index/index.js');
var app = getApp();
Page({
  data: {
    loginName: "",
    loginPwd: "",
    loginInfo: {

    },
    tip: ""
  },
  //事件处理函数
  bindViewTap: function () {
    console.log('pages/index/index.js bindViewTap()');
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    console.log('pages/index/index.js onLoad()');
    // console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })

  },
  loginNameInput: function (e) {
    this.setData({
      loginName: e.detail.value
    });
   console.log(this.data.loginName);
  },
  loginPwdInput: function (event) {
    this.setData({
      loginPwd: event.detail.value
    });
     console.log(this.data.loginPwd);
  },
  login: function (event) {//不支持alert
    console.log(event)
 console.log(this.data);
  }
})
