import React from 'react'
import Templ from '../../components/template/indexInfo'


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
    { name: '交易类别', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托人年金计划编码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '代理人计划编码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '年金计划名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '年金计划登记号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '年金计划备案批复日期', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '计划属性', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '计划类别', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '年金计划生效日期', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '年金计划终止日期', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '最后更新日期', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '计划所在地代码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '摘要', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托合同号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托人代码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '托管人代码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '代理人代码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托管理标准费率', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '托管标准费率', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托财产托管账户开户行名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托财产托管账户开户行行号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托财产托管账户名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托财产托管账户账号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '统一计划代码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '统一计划名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '统一计划收益率审核人代码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '统一计划收益率计算人代码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '开户银行(归集)', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '开户银行(归集)行号', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '开户银行(归集)所在市', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '开户银行(归集)所在省', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '银行账户名称(归集)', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '银行账号(归集)', key: 'Portfolioid', isInput: true, isRequired: true },
]

const props = {
    indexUrl: 'planManagement/baseInfo',
    tableColumns,
    title: ['计划管理', '计划基本信息'],
    tableData: [],
    scroll: { x: tableColumns.length*100 }
}

class BaseInfoInfo extends React.Component {
    render() {
        return (
            <Templ {...props} />
        )
    }
}

export default BaseInfoInfo