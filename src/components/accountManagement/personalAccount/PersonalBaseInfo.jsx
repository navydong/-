import React, { Component } from 'react'
import BreadcrumbCustom from '../../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';



const tableColumns = [
    { name: '姓名', key: 'Planname', isInput: true, isRequired:false },
    { name: '单位名称', key: 'Planid', isInput: true, isRequired:false },
    { name: '职工编号', key: 'Accountplanid', isInput: true, isRequired:false },
    { name: '性别', key: 'Planlicid', isInput: true , isRequired:true},
    { name: '出生日期', key: 'Year', isInput: true, isDate: true, isRequired:true },
    { name: '证件类型', key: 'Pricedate', isInput: true, isRequired:true },
    { name: '证件号码', key: 'Lastupddate', isInput: true, sRequired:true },
    { name: '参加计划日期', key: 'Status', isInput: true, isDate: true, isRequired:false },
    { name: '退出计划日期', key: 'Status', isInput: true, isDate: true, isRequired:false },
    { name: '缴费基数', key: 'Status', isInput: true, isRequired:false },
    { name: '通讯地址', key: 'Status', isInput: true, isRequired:false },
    { name: '联系电话', key: 'Status', isInput: true, isRequired:false },
    { name: '传真', key: 'Status', isInput: true, isRequired:false },
    { name: '参加工作日期', key: 'Status', isInput: true, isDate: true, isRequired:false },
    { name: '电子邮件', key: 'Status', isInput: true, isRequired:false },
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
                <BreadcrumbCustom first="账户管理 &nbsp; / &nbsp; 个人账户管理" second="个人基本信息" />
                <div>
                    <Card title="个人基本信息">
                        <Row gutter={40} style={{marginBottom:18}}>
                            <Col sm={{span:10, push:18}}>
                                <Link to="/app/accountManagement/personalAccount/personalBase" style={{marginRight: 10}}>
                                    <Button type="primary">增加</Button>
                                </Link>
                                <Link to="/app/accountManagement/personalAccount/personalBase" style={{marginRight: 10}}>
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