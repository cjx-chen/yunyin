// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperImgUrls: [
      {
        url: 'cloud://cloud1-6gk942om7bb5d9c0.636c-cloud1-6gk942om7bb5d9c0-1305421112/images/swiper/01.png'
      },{
        url: 'cloud://cloud1-6gk942om7bb5d9c0.636c-cloud1-6gk942om7bb5d9c0-1305421112/images/swiper/02.png'
      },{
        url: 'cloud://cloud1-6gk942om7bb5d9c0.636c-cloud1-6gk942om7bb5d9c0-1305421112/images/swiper/03.png'
      },{
        url: 'cloud://cloud1-6gk942om7bb5d9c0.636c-cloud1-6gk942om7bb5d9c0-1305421112/images/swiper/04.png'
      },
    ],
    banner_index: 0,
    EveryDaySentenceList: [],
    ArticleList: [],
  },

  /**
   * 把每日句子与轮播图进行数据动态绑定
   */
  swiperChange: function (e) {
    var banner_index = e.detail.current
    // console.log(e.detail.current)
    this.setData({
      banner_index: e.detail.current
    })
    // console.log(banner_index)
  },

  /**
   * 进入文章详情界面
   */
  gotoArticleDetail: function(event) {
    //当前要跳转到另一个界面，但是会保留现有界面
    wx.navigateTo({
      url: `../article-detail/article-detail?articleid=${event.currentTarget.dataset.articleid}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getEveryDaySentence()
    this._getArticleList()
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

  /**
   * 获取每日句子
   */
  _getEveryDaySentence(){
    // wx.showLoading({
    //   title: '加载中',
    // })
    wx.cloud.callFunction({
      name: 'getEveryDaySentence'
    }).then(res => {
      // console.log(res)
      this.setData({
        EveryDaySentenceList: this.data.EveryDaySentenceList.concat(JSON.parse(res.result).data),
      })
      wx.hideLoading()
    }).catch(err => {
      console.error(err)
    })
  },

  /**
   * 获取每日文章列表
   */
  _getArticleList(){
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'getArticleList'
    }).then(res => {
      // console.log(res)
      this.setData({
        ArticleList: this.data.ArticleList.concat((res.result).data),
      })
      wx.hideLoading()
    }).catch(err => {
      console.error(err)
    })
  }
})