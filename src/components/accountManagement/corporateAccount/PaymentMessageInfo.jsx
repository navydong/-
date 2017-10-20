import React, { Component } from 'react'
import BreadcrumbCustom from '../../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';



const tableColumns = [
    { name: '总缴费金额', key: 'Appseriono', isInput: true, isRequired:false },
    { name: '总缴费人数', key: 'Transtype', isInput: false, option: [1,2,3,4], isRequired:false },
    { name: '缴费周期', key: 'Planid', isInput: true, isRequired:false },
    { name: '上期缴费金额', key: 'Accountplanid', isInput: true, isRequired:false },
    { name: '上期缴费人数', key: 'Planname', isInput: true, isRequired:false },
    { name: '上期缴费金额', key: 'Planlicid', isInput: true , isRequired:false},
    { name: '本期缴费人数', key: 'Year', isInput: true, isDate: true, isRequired:false },
    { name: '本期变动金额', key: 'Pricedate', isInput: true, isDate: true, isRequired:false },
    { name: '本期变动人数', key: 'Lastupddate', isInput: true, isDate: true, isRequired:false },
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
                <BreadcrumbCustom first="账户管理 &nbsp; / &nbsp; 单位账户管理" second="单位缴费信息" />
                <div>
                    <Card title="单位缴费信息">
                        <Row gutter={40} style={{marginBottom:18}}>
                            <Col sm={{span:10, push:18}}>
                                <Link to="/app/accountManagement/corporateAccount/paymentMessage" style={{marginRight: 10}}>
                                    <Button type="primary" disabled>增加</Button>
                                </Link>
                                <Link to="/app/planManagement/fixingDate" style={{marginRight: 10}}>
                                    <Button type="primary" disabled>修改</Button>
                                </Link>
                                <Button type="primary" disabled>删除</Button>
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