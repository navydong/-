import React from 'react'
import Templ from '../template/indexInfo'


/**
 * 表格模板
 * ###参数为props Templ的属性
 * @param indexUrl: 表单url  String
 * @param tableColumns: 表格列  Array
 * @param tableData: 表格数据  Array
 * @param title: 导航信息和卡片标题  Array(2)
 */

const tableColumns = [
    { name: '年金计划名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '受托人名称', key: 'Portfolioid', isInput: true, isRequired: false },
    { name: '单位名称', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '领取人姓名', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '支付类型', key: 'Portfolioid', isInput: false, option:['退休支付', '身故支付', '出国（境）支付', '退个人多缴款', '退单位多缴款', '其它'], isRequired: false },
    { name: '支付方式', key: 'Portfolioid', isInput: false, option:['一次性支付', '分期支付-定期不定额', '分期支付-定额不定期', '其它'], isRequired: false },
    { name: '支付周期', key: 'Portfolioid', isInput: false, option:['周', '月', '季', '半年', '年', '不定期', '其他'], isRequired: false },
]
const props = {
    indexUrl: 'planManagement/daiyuzhifu',
    tableColumns,
    title: ['计划管理', '待遇支付信息'],
    tableData: [],
    scroll: { x: tableColumns.length*100 }
}

class Funds extends React.Component {
    render() {
        return (
            <Templ {...props} />
        )
    }
}

export default Funds