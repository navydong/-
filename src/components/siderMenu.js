export const siderMenu = {
  "status": 200,
  "data": [{
    "name": "个人查询",
    "icon": "select",
    "submenu": [{
      "name": "个人基本信息查询",
      "url": "/app/informationSearch/personally/jiben"
    }, {
      "name": "个人权益信息查询",
      "url": "/app/informationSearch/personally/quanyi"
    }, {
      "name": "个人缴费信息查询",
      "url": "/app/informationSearch/personally/jiaofei"
    }, {
      "name": "个人待遇支付信息查询",
      "url": "/app/informationSearch/personally/daiyuzhifu"
    }]
  },{
    "name": "单位查询",
    "icon": "select",
    "submenu": [{
      "name": "单位缴费信息查询",
      "url": "/app/informationSearch/corporate/danweijiaofei"
    }]
  }]
}