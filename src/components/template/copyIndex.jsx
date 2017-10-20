import React from 'react'
import Templ from '../../template/index.jsx'


/**
 * 表单模板
 * ###参数为props Templ的属性
 * @param indexUrl: 表格url  String
 * @param tableColumns: 表格列表  Array
 * @param title: 导航信息和卡片标题  Array(2)
 */

const tableColumns = [
    { name: '单位编码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '组织机构代码', key: 'Portfolioid', isInput: true, option: [1, 2, 3, 4], isRequired: false },
    { name: '统一社会信用代码', key: 'Portfolioid', isInput: true, option: [1, 2, 3, 4], isRequired: false },
]

const props = {
    indexUrl: 'informationSearch/corporate/corporatePaySearchInfo',
    tableColumns,
    title: ['信息查询 / 单位信息', '单位缴费信息查询'],
}

class Funds extends React.Component {
    render() {
        return (
            <Templ {...props} />
        )
    }
}

export default Funds