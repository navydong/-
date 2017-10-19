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
    { name: '总缴费金额', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '总缴费人数', key: 'Portfolioid', isInput: false, option: [1, 2, 3, 4], isRequired: true },
    { name: '上期缴费金额', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '上期缴费人数', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '上期缴费金额', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '本期缴费人数', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '本期变动金额', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '本期变动人数', key: 'Portfolioid', isInput: true, isRequired: true },
]

const props = {
    indexUrl: 'informationSearch/corporate/corporatePaySearch',
    tableColumns,
    title: ['信息查询 / 企业信息', '企业缴费信息查询'],
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