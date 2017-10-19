import React from 'react'
import Templ from '../../template/indexInfo.jsx'


/**
 * 表格模板
 * ###参数为props Templ的属性
 * @param indexUrl: 表单url  String
 * @param tableColumns: 表格列  Array
 * @param tableData: 表格数据  Array
 * @param title: 导航信息和卡片标题  Array(2)
 */

const tableColumns = [
    { name: '交易序列号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '交易类别', key: 'Portfolioid', isInput: false, option: [1, 2, 3, 4], isRequired: true },
    { name: '受托人年金计划编码', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '年金计划名称', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '年金计划登记号', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '项目代码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '项目名称', key: 'Portfolioid', isInput: true, isDate: true, isRequired: true },
    { name: '本期数', key: 'Portfolioid', isInput: true, isDate: true, isRequired: true },
    { name: '本年数', key: 'Portfolioid', isInput: true, isDate: true, isRequired: true },
    { name: '报告日期', key: 'Status', isInput: false, option: ['1', '2'], isRequired: false },
    { name: '报告期起始日期', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '报告期终止日期', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '币种', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '摘要', key: 'Portfolioid', isInput: true, isRequired: true },
]

const props = {
    indexUrl: '/app/reportManagement/operational/fundsInfo',
    tableColumns,
    title: ['报表管理 / 信息披露', '受托户净资产变动表'],
    tableData: [],
}

class Funds extends React.Component {
    render() {
        return (
            <Templ {...props} />
        )
    }
}

export default Funds