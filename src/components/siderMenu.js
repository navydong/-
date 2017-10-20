export const siderMenu = {
  "status": 200,
  "data": [{
    "name": "账户管理",
    "icon": "scan",
    "submenu": [{
        "name": "个人账户管理",
        "submenu": [{
          "name": "个人基本信息",
          "url": "/app/accountManagement/personalAccount/personalBaseInfo"
        }, {
          "name": "个人权益信息",
          "url": "/app/accountManagement/personalAccount/personalInterestsInfo"
        }, {
          "name": "支付账户信息",
          "url": "/app/accountManagement/personalAccount/accountInfo"
        }]
      },
      {
        "name": "单位账户管理",
        "submenu": [{
            "name": "单位基本信息",
            "url": "/app/accountManagement/corporateAccount/corporateBaseInfo"
          },
          {
            "name": "单位缴费规则",
            "url": "/app/accountManagement/corporateAccount/paymentRuleInfo"
          },
          {
            "name": "单位缴费信息",
            "url": "/app/accountManagement/corporateAccount/paymentMessageInfo"
          }
        ]
      }
    ]
  }, {
    "name": "机构管理",
    "icon": "coffee",
    "submenu": [{
        "name": "服务机构信息",
        "url": "/app/organizationManagement/serviceInfo"
      },
      {
        "name": "单位基本信息",
        "url": "/app/organizationManagement/baseInfo1"
      },
      {
        "name": "管理机构变动情况",
        "url": "/app/organizationManagement/changeConditionInfo"
      }
    ]
  }, {
    "name": "计划管理",
    "icon": "shop",
    "submenu": [{
        "name": "计划基本信息",
        "url": "/app/planManagement/baseInfoInfo"
      },
      {
        "name": "投资组合信息",
        "url": "/app/planManagement/portfolioInfo"
      },
      {
        "name": "定价日信息",
        "url": "/app/planManagement/fixingDateInfo"
      }, {
        "name": "年金计划投资规则信息",
        "url": "/app/planManagement/guidepostsInfo"
      }, {
        "name": "投资组合风险控制指标",
        "url": "/app/planManagement/riskManagementInfo"
      },{
        "name": "账户管理费信息",
        "url": "/app/planManagement/zhanghuguanlifeiInfo"
      },{
        "name": "账户计息信息",
        "url": "/app/planManagement/interestMessageInfo"
      },{
        "name": "待遇支付信息",
        "url": "/app/planManagement/daiyuzhifuInfo"
      }
    ]
  }, 
  /* {
    "name": "运作管理",
    "icon": "gift",
    "submenu": [{
        "name": "运作方案设置",
        "url": "/app/operation/baseInfo1"
      },
      {
        "name": "估值信息管理",
        "url": "/app/operation/portfolio1"
      },
      {
        "name": "利息计算",
        "url": "/app/operation/fixingDateInfo1"
      }, {
        "name": "份额确认",
        "url": "/app/operation/ruleInformation1"
      }, {
        "name": "权益计算",
        "url": "/app/operation/guideposts1"
      }, {
        "name": "待遇支付",
        "url": "/app/operation/guideposts1"
      }, {
        "name": "缴费管理",
        "url": "/app/operation/guideposts1"
      }, {
        "name": "账户转移",
        "url": "/app/operation/guideposts1"
      }, {
        "name": "支付管理",
        "url": "/app/operation/guideposts1"
      },{
        "name": "账户计息信息",
        "url": "/app/operation/interestMessageInfo"
      }
    ]
  }, */
   {
    "name": "工作流管理",
    "icon": "car",
    "submenu": [{
      "name": "工作流程配置",
      "url": "/app/planManagement/baseInfo1"
    }]
  }, {
    "name": "接口管理",
    "icon": "compass",
    "submenu": [{
      "name": "数据导入",
      "url": "/app/interface/dataImport"
    }]
  }, {
    "name": "系统管理",
    "icon": "exception",
    "submenu": [{
      "name": "用户管理",
      "url": "/app/planManagement/baseInfo1"
    }, {
      "name": "角色管理",
      "url": "/app/planManagement/baseInfo2"
    }, {
      "name": "权限管理",
      "url": "/app/planManagement/baseInfo3"
    }, {
      "name": "日志管理 ",
      "url": "/app/planManagement/baseInfo4"
    }]
  }, {
    "name": "报表管理",
    "icon": "solution",
    "submenu": [{
      "name": "运营信息",
      "submenu": [{
          "name": "资金到账信息",
          "url": "/app/reportManagement/operational/funds"
        },
        {
          "name": "资金划款确认信息",
          "url": "/app/reportManagement/operational/confirm"
        },
        {
          "name": "支付指令反馈",
          "url": "/app/reportManagement/operational/directive"
        }
      ]
    }, {
      "name": "信息披露",
      "submenu": [{
        "name": "受托户资产负债表",
        "url": "/app/reportManagement/publish/fuzhai"
      }, {
        "name": "受托户净资产变动表",
        "url": "/app/reportManagement/publish/biandong"
      }]
    }]
  }, {
    "name": "信息查询",
    "icon": "select",
    "submenu": [{
      "name": "个人信息",
      "submenu": [{
        "name": "个人权益信息查询",
        "url": "/app/informationSearch/personally/personalSearch"
      }]
    }, {
      "name": "单位信息",
      "submenu": [{
        "name": "单位缴费信息查询",
        "url": "/app/informationSearch/corporate/corporatePaySearch"
      }]
    }]
  }]
}