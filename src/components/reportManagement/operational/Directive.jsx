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
    { name: '支付通知单编号', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '受托人年金计划编码', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '代理人计划编码', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '年金计划名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '年金计划登记号', key: 'Portfolioid', isInput: true, isDate: true, isRequired: true },
    { name: '单位编码', key: 'Portfolioid', isInput: true, isDate: true, isRequired: true },
    { name: '单位名称', key: 'Portfolioid', isInput: true, isDate: true, isRequired: true },
    { name: '组织机构代码', key: 'Status', isInput: false, option: ['1', '2'], isRequired: false },
    { name: '统一社会信用代码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '社保发放流水号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '个人编码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '员工姓名', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '员工证件类型', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '员工证件号码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '社会保障号码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '币种', key: 'Portfolioid', isInput: true, isRequired: true },
]

const props = {
    indexUrl: '/app/reportManagement/operational/directive',
    tableColumns,
    title: ['报表管理 / 运营信息', '支付指令反馈'],
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