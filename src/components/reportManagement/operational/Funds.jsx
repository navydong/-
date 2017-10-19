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
    { name: '代理人计划编码', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '年金计划名称', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '年金计划登记号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '代理人代码', key: 'Portfolioid', isInput: true, isDate: true, isRequired: true },
    { name: '代理人名称', key: 'Portfolioid', isInput: true, isDate: true, isRequired: true },
    { name: '划款指令流水号', key: 'Portfolioid', isInput: true, isDate: true, isRequired: true },
    { name: '划款收账类型', key: 'Status', isInput: false, option: ['1', '2'], isRequired: false },
    { name: '划款总金额', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '币种', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托财产托管账户开户行名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托财产托管账户开户行行号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托财产托管账户名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托财产托管账户账号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '划款明细序号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '付款银行名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '付款银行行号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '付款银行账户名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '付款银行账号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '付款银行所在省', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '付款银行所在市', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '划款金额', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '到账金额', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '到账日期时间', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '收款到账标志', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '到账单编号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '摘要', key: 'Portfolioid', isInput: true, isRequired: true },
]

const props = {
    indexUrl: '/app/reportManagement/operational/funds',
    tableColumns,
    title: ['报表管理 / 运营信息', '资金到账信息'],
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