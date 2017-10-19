import React, { Component } from 'react'
import BreadcrumbCustom from '../../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';



const tableColumns = [
    { name: '年金计划名称', key: 'Appseriono', isInput: true, isRequired:true },
    { name: '年金计划登记号', key: 'Transtype', isInput: false, option: [1,2,3,4], isRequired:true },
    { name: '投资组合代码', key: 'Planid', isInput: true, isRequired:false },
    { name: '投资组合名称', key: 'Accountplanid', isInput: true, isRequired:false },
    { name: '估值日期', key: 'Planname', isInput: true, isRequired:false },
    { name: '单位净值', key: 'Planname', isInput: true, isRequired:false },
    { name: '成交前资产净值', key: 'Planname', isInput: true, isRequired:false },
    { name: '资产净值增长额', key: 'Planname', isInput: true, isRequired:false },
    { name: '期初份额', key: 'Planname', isInput: true, isRequired:false },
    { name: '总买入份额', key: 'Planname', isInput: true, isRequired:false },
    { name: '总买入金额', key: 'Planname', isInput: true, isRequired:false },
    { name: '缴费买入份额', key: 'Planname', isInput: true, isRequired:false },
    { name: '缴费买入金额', key: 'Planname', isInput: true, isRequired:false },
    { name: '未投资买入份额', key: 'Planname', isInput: true, isRequired:false },
    { name: '未投资买入金额', key: 'Planname', isInput: true, isRequired:false },
    { name: '转换买入份额', key: 'Planname', isInput: true, isRequired:false },
    { name: '转换买入金额', key: 'Planname', isInput: true, isRequired:false },
    { name: '其它买入份额', key: 'Planname', isInput: true, isRequired:false },
    { name: '其它买入金额', key: 'Planname', isInput: true, isRequired:false },
    { name: '总卖出份额', key: 'Planname', isInput: true, isRequired:false },
    { name: '总卖出金额', key: 'Planname', isInput: true, isRequired:false },
    { name: '支付卖出份额', key: 'Planname', isInput: true, isRequired:false },
    { name: '支付卖出金额', key: 'Planname', isInput: true, isRequired:false },
    { name: '转出卖出份额', key: 'Planname', isInput: true, isRequired:false },
    { name: '赎回暂不投资卖出份额', key: 'Planname', isInput: true, isRequired:false },
    { name: '赎回暂不投资卖出金额', key: 'Planname', isInput: true, isRequired:false },
    { name: '其它卖出份额', key: 'Planname', isInput: true, isRequired:false },
    { name: '其它卖出金额', key: 'Planname', isInput: true, isRequired:false },
    { name: '期间净交易份额', key: 'Planname', isInput: true, isRequired:false },
    { name: '期间净交易金额', key: 'Planname', isInput: true, isRequired:false },
    { name: '成交后份额', key: 'Planname', isInput: true, isRequired:false },
    { name: '成交后资产净值', key: 'Planname', isInput: true, isRequired:false },
    { name: '币种', key: 'Planname', isInput: true, isRequired:false },
    
].map((item)=>{
    return {title: item.name, dataIndex: item.key}
})

const tableData = []

class FixingDateInfo extends Component {

    componentDidMount(){

    }
    render() {
        return (
            <div>
                <BreadcrumbCustom first="账户管理 &nbsp; / &nbsp; 个人账户管理" second="个人权益信息" />
                <div>
                    <Card title="个人权益信息">
                        <Row gutter={40} style={{marginBottom:18}}>
                            <Col sm={{span:10, push:18}}>
                                <Link to="/app/planManagement/fixingDate" style={{marginRight: 10}}>
                                    <Button type="primary" disabled>增加</Button>
                                </Link>
                                <Link to="/app/planManagement/fixingDate" style={{marginRight: 10}}>
                                    <Button type="primary" disabled>修改</Button>
                                </Link>
                                <Button type="primary" disabled>删除</Button>
                                <Button type="primary">导入</Button>
                            </Col>
                        </Row>
                        <Table columns={tableColumns} dataSource={tableData} scroll={ {x: 3500} } />              
                    </Card>
                </div>
            </div>
        )
    }
}
export default FixingDateInfo