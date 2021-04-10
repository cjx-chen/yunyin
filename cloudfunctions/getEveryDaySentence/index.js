// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 初始化云数据库
// const db = cloud.database()

var rp = require('request-promise')

const URL = 'http://129.204.22.24:8888/S013'

// 云函数入口函数
exports.main = async (event, context) => {
  return rp(URL)
  .then(function(res){
      console.log(JSON.parse(res))
      return res
  })
  .catch(function(err){
    console.error(err)
  })

  // const EveryDaySentenceList = rp(URL)
  //   .then((res) => {
  //     // console.log(JSON.parse(res))
  //     return res
  //   })
  //   console.log(EveryDaySentenceList)
    // 遍历数组存入云数据库中
    // for(let i=0, len = EveryDaySentenceList.length; i<len; i++){
    //   await db.collection('EveryDaySentenceList').add({
    //     data: {
    //       //扩展运算符
    //       ...EveryDaySentenceList[i],
    //       //获取当前服务器时间作为创建时间
    //       createTime: db.serverDate(),
    //     }
    //   }).then((res) => {
    //     console.log('插入成功')
    //   }).catch((err) => {
    //     console.error('插入失败')
    //   })
    // }
}