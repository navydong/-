import React, { Component } from 'react'
import BreadcrumbCustom from '../../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';



const tableColumns = [
    { name: '银行账号(缴费)', key: 'Appseriono', isInput: true, isRequired:true },
    { name: '待遇支付银行所在省', key: 'Transtype', isInput: false, option: [1,2,3,4], isRequired:true },
    { name: '待遇支付银行所在市', key: 'Planid', isInput: true, isRequired:false },
    { name: '待遇支付银行名称', key: 'Accountplanid', isInput: true, isRequired:false },
    { name: '待遇支付银行行号', key: 'Planname', isInput: true, isRequired:false },
    { name: '待遇支付银行账户名称', key: 'Planlicid', isInput: true , isRequired:true},
    { name: '待遇支付银行账号', key: 'Year', isInput: true, isRequired:true },
    { name: '总金额', key: 'Pricedate', isInput: true, isRequired:true },
    { name: '投资收益', key: 'Lastupddate', isInput: true, isRequired:true },
    { name: '缴费总金额', key: 'Status', isInput: false, option: ['1','2'], isRequired:false },
    { name: '个人缴费', key: 'Planlicid', isInput: true , isRequired:true},
    { name: '单位缴费金额', key: 'Planlicid', isInput: true , isRequired:true},
    { name: '单位缴费记账金额', key: 'Planlicid', isInput: true , isRequired:true},
    { name: '支付笔数', key: 'Planlicid', isInput: true , isRequired:true},
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
                <BreadcrumbCustom first="账户管理 &nbsp; / &nbsp; 个人账户管理" second="支付账户信息" />
                <div>
                    <Card title="支付账户信息">
                        <Row gutter={40} style={{marginBottom:18}}>
                            <Col sm={{span:10, push:18}}>
                                <Link to="/app/accountManagement/personalAccount/account" style={{marginRight: 10}}>
                                    <Button type="primary">增加</Button>
                                </Link>
                                <Link to="/app/accountManagement/personalAccount/account" style={{marginRight: 10}}>
                                    <Button type="primary">修改</Button>
                                </Link>
                                <Button type="primary">删除</Button>
                                <Button type="primary">导入</Button>
                            </Col>
                        </Row>
                        <Table columns={tableColumns} dataSource={tableData} />              
                    </Card>
                </div>
            </div>
        )
    }
}
export default FixingDateInfo