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
    { name: '账户管理费', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托人', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托人年金计划编码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '年金计划名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '年金计划登记号', key: 'Portfolioid', isInput: true, isRequired: true },
]

const props = {
    indexUrl: 'planManagement/zhanghuguanlifeiInfo',
    tableColumns,
    title: ['计划管理', '账户管理费信息'],
}

class Funds extends React.Component {
    render() {
        return (
            <Templ {...props} />
        )
    }
}

export default Funds