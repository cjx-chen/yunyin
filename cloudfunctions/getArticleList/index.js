// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise')

var options = {
  method: 'POST',
  url: "http://129.204.22.24:8888/S017",
  body:{
    offset: 0,
  },
  json: true
}

const URL = 'http://129.204.22.24:8888/S017'

// 云函数入口函数
exports.main = async (event, context) => {
  return rp(options)
    .then(function(res){
      console.log(res)
      return res
    })
    .catch(function(err){
      console.error(err)
    })
}