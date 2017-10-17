import React, { Component } from 'react'
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';



const tableColumns = [
    { name: '交易序列号', key: 'Portfolioid', isInput: true, isRequired:true },
    { name: '交易类别', key: 'Portfolioid', isInput: false, option: [1,2,3,4], isRequired:true },
    { name: '单位编码', key: 'Portfolioid', isInput: true, isRequired:true },
    { name: '单位名称', key: 'Portfolioid', isInput: true, isRequired:true },
    { name: '组织机构代码', key: 'Portfolioid', isInput: true, isRequired:true },
    { name: '统一社会信用代码', key: 'Portfolioid', isInput: true , isRequired:false},
    { name: '单位地址', key: 'Portfolioid', isInput: true, isDate: true, isRequired:true },
    { name: '单位类型', key: 'Portfolioid', isInput: false, option: [1,2,3], isRequired:true },
    { name: '行业类别', key: 'Portfolioid', isInput: false, option: [1,2,3], isRequired:true },
    { name: '经费来源', key: 'Status', isInput: false, option: ['1','2'], isRequired:true },
    { name: '工商注册号', key: 'Status', isInput: true, isRequired:false },
    { name: '单位注册地代码', key: 'Status', isInput: true, isRequired:false },
    { name: '法定代表人', key: 'Status', isInput: true, isRequired:false },
    { name: '单位电子邮件', key: 'Status', isInput: true, isRequired:false },
    { name: '单位邮编', key: 'Status', isInput: true, isRequired:false },
    { name: '单位电话', key: 'Status', isInput: true, isRequired:false },
    { name: '单位传真', key: 'Status', isInput: true, isRequired:false },
    { name: '单位联系人', key: 'Status', isInput: true, isRequired:false },
    { name: '联系人电话', key: 'Status', isInput: true, isRequired:false },
    { name: '联系人传真', key: 'Status', isInput: true, isRequired:false },
    { name: '联系人邮编', key: 'Status', isInput: true, isRequired:false },
    { name: '联系人电子邮件', key: 'Status', isInput: true, isRequired:false },
    { name: '上级单位编码', key: 'Status', isInput: true, isRequired:false },
    { name: '上级单位名称', key: 'Status', isInput: true, isRequired:false },
].map((item)=>{
    return {title: item.name, dataIndex: item.key}
})

const tableData = []

class BaseInfo extends Component {

    componentDidMount(){

    }
    render() {
        return (
            <div>
                <BreadcrumbCustom first="计划管理" second="单位基本信息" />
                <div>
                    <Card title="定价日信息">
                        <Row gutter={40} style={{marginBottom:18}}>
                            <Col sm={{span:10, push:18}}>
                                <Link to="/app/organizationManagement/base" style={{marginRight: 10}}>
                                    <Button type="primary">增加</Button>
                                </Link>
                                <Link to="/app/planManagement/fixingDate" style={{marginRight: 10}}>
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
export default BaseInfo