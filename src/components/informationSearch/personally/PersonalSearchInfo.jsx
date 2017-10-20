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
`个人编码、姓名、证件类型、证件号码、单位缴费、
个人缴费、投资收益、投资份额、投资总额、税收情况、
个人累计缴费、单位累计缴费（实）、单位累计缴费（虚）、
固定收益、改革前缴费、应交税费、账户总额、账户状态`
const tableColumns = [
    
    { name: '个人编码', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '姓名', key: 'Portfolioid', isInput: false, option: [1, 2, 3, 4], isRequired: true },
    { name: '证件类型', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '证件类型', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '单位缴费', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '个人缴费', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '投资份额', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '投资总额', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '个人累计缴费', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '单位累计缴费（实）', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '单位累计缴费（虚）', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '固定收益', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '改革前缴费', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '应交税费', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '账户总额', key: 'Portfolioid', isInput: true, isRequired: true },
    { name: '账户状态', key: 'Portfolioid', isInput: true, isRequired: true },
]

const props = {
    indexUrl: 'informationSearch/personally/personalSearch',
    tableColumns,
    title: ['信息查询 / 个人信息', '个人权益信息查询'],
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