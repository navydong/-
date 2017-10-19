import React, { Component } from 'react'
import BreadcrumbCustom from '../../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';



const tableColumns = [
    { name: '缴费计算方法', key: 'Appseriono', isInput: false, option: [1,2,3], isRequired:true },
    { name: '缴费周期', key: 'Transtype', isInput: false, option: [1,2,3,4], isRequired:true },
    { name: '缴费比例（企业）', key: 'Planid', isInput: true, isRequired:false },
    { name: '缴费比例（个人）', key: 'Accountplanid', isInput: true, isRequired:false },
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
                <BreadcrumbCustom first="账户管理 &nbsp; / &nbsp; 企业账户管理" second="企业缴费规则" />
                <div>
                    <Card title="企业缴费规则">
                        <Row gutter={40} style={{marginBottom:18}}>
                            <Col sm={{span:10, push:18}}>
                                <Link to="/app/accountManagement/corporateAccount/paymentRule" style={{marginRight: 10}}>
                                    <Button type="primary">增加</Button>
                                </Link>
                                <Link to="/app/accountManagement/corporateAccount/paymentRule" style={{marginRight: 10}}>
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