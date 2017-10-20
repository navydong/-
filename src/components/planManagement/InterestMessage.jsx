import React from 'react'
import Templ from '../template/index.jsx'


/**
 * 表单模板
 * ###参数为props Templ的属性
 * @param indexUrl: 表格url  String
 * @param tableColumns: 表格列表  Array
 * @param title: 导航信息和卡片标题  Array(2)
 */

const tableColumns = [
    { name: '机构名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '组织机构代码', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '统一社会信用代码', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '受托户利率', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '归集户利率', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '计息方式', key: 'Portfolioid', isInput: false, option:['单利','复利','其他'], isRequired: true },
    { name: '计息周期', key: 'Portfolioid', isInput: false, option:['年','半年','季','月','周','天'],isRequired: false },
    { name: '适用期间', key: 'Portfolioid', isInput: true, isDate: true, isRequired: false },
]

let props = {
    indexUrl: 'planManagement/interestMessageInfo',
    tableColumns,
    title: ['运作管理', '账户计息信息'],
}

class Funds extends React.Component {
    render() {
        return (
            <Templ {...props} />
        )
    }
}

export default Funds