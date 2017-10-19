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
    { name: '划款指令流水号', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '划款收账类型', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '受托人年金计划编码', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '代理人计划编码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '年金计划名称', key: 'Portfolioid', isInput: true, isDate: true, isRequired: true },
    { name: '年金计划登记号', key: 'Portfolioid', isInput: true, isDate: true, isRequired: true },
    { name: '代理人代码', key: 'Portfolioid', isInput: true, isDate: true, isRequired: true },
    { name: '代理人名称', key: 'Status', isInput: false, option: ['1', '2'], isRequired: false },
    { name: '划款日期', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '划款总金额', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '到账总金额', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '短溢缴处理方式', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '短溢缴处理金额', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '最后一笔到账日期', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '币种', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '摘要', key: 'Portfolioid', isInput: true, isRequired: true },
]

const props = {
    indexUrl: '/app/reportManagement/operational/confirm',
    tableColumns,
    title: ['报表管理 / 运营信息', '资金划款信息确认'],
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