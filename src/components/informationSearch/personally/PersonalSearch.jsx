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
    { name: '证件类型', key: 'Portfolioid', isInput: false, option: [1, 2, 3, 4], isRequired: true },
    { name: '证件号码', key: 'Portfolioid', isInput: true, isRequired: true },
]

const props = {
    indexUrl: 'informationSearch/personally/personalSearchInfo',
    tableColumns,
    title: ['信息查询 / 个人信息', '个人权益信息查询'],
}

class Funds extends React.Component {
    render() {
        console.log(1111)
        return (
            <Templ {...props} />
        )
    }
}

export default Funds