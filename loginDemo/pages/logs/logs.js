//logs.js
var util = require('../../utils/util.js')
console.log('pages/logs/logs.js');
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    console.log('pages/logs/logs.js onLoad()');
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
