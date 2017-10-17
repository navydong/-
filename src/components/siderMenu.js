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
        "name": "企业账户管理",
        "submenu": [{
            "name": "企业基本信息",
            "url": "/app/accountManagement/corporateAccount/corporateBaseInfo"
          },
          {
            "name": "企业缴费规则",
            "url": "/app/accountManagement/corporateAccount/paymentRuleInfo"
          },
          {
            "name": "企业缴费信息",
            "url": "/app/accountManagement/corporateAccount/paymentMessageInfo"
          }
        ]
      }
    ]
  }, {
    "name": "机构管理",
    "icon": "scan",
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
    "icon": "scan",
    "submenu": [{
        "name": "计划基本信息",
        "url": "/app/planManagement/baseInfo"
      },
      {
        "name": "投资组合信息",
        "url": "/app/planManagement/portfolio"
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
      }
    ]
  }, {
    "name": "运作管理",
    "icon": "scan",
    "submenu": [{
        "name": "运作方案设置",
        "url": "/app/planManagement/baseInfo"
      },
      {
        "name": "估值信息管理",
        "url": "/app/planManagement/portfolio"
      },
      {
        "name": "利息计算",
        "url": "/app/planManagement/fixingDateInfo"
      }, {
        "name": "份额确认",
        "url": "/app/planManagement/ruleInformation"
      }, {
        "name": "权益计算",
        "url": "/app/planManagement/guideposts"
      }, {
        "name": "待遇支付",
        "url": "/app/planManagement/guideposts"
      }, {
        "name": "缴费管理",
        "url": "/app/planManagement/guideposts"
      }, {
        "name": "账户转移",
        "url": "/app/planManagement/guideposts"
      }, {
        "name": "支付管理",
        "url": "/app/planManagement/guideposts"
      }
    ]
  }, {
    "name": "工作流管理",
    "icon": "scan",
    "submenu": [{
      "name": "工作流程配置",
      "url": "/app/planManagement/baseInfo"
    }]
  }, {
    "name": "接口管理",
    "icon": "scan",
    "submenu": [{
      "name": "数据导入",
      "url": "/app/planManagement/baseInfo"
    }, {
      "name": "数据导出",
      "url": "/app/planManagement/baseInfo"
    }]
  },{
    "name": "系统管理",
    "icon": "scan",
    "submenu": [{
      "name": "用户管理",
      "url": "/app/planManagement/baseInfo"
    }, {
      "name": "角色管理",
      "url": "/app/planManagement/baseInfo"
    },{
      "name": "权限管理",
      "url": "/app/planManagement/baseInfo"
    },{
      "name": "日志管理 ",
      "url": "/app/planManagement/baseInfo"
    }]
  },{
    "name": "报表管理",
    "icon": "scan",
    "submenu": [{
      "name": "运营信息",
      "submenu": [{
        "name": "资金到账信息",
        "url": "/app/organization/slove"
      },
      {
        "name": "资金划款确认信息",
        "url": "/app/organization/service"
      },
      {
        "name": "支付指令反馈",
        "url": "/app/organization/merchant"
      }
    ]
    }, {
      "name": "信息披露",
      "url": "/app/planManagement/baseInfo"
    }]
  }]
}