import React, { Component } from 'react'
import BreadcrumbCustom from '../../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';



const tableColumns = [
    { name: '单位编码', key: 'Appseriono', isInput: true, isRequired:true },
    { name: '单位名称', key: 'Appseriono', isInput: true, isRequired:true },
    { name: '组织机构代码', key: 'Appseriono', isInput: true, isRequired:true },
    { name: '统一社会信用代码', key: 'Appseriono', isInput: true, isRequired:false },
    { name: '单位地址', key: 'Appseriono', isInput: true, isRequired:false },
    { name: '是否为财政全额供款', key: 'Appseriono', isInput: false,  option: ['财政全额公款','非财政全额公款'],isRequired:false },
    { name: '单位类型', key: 'Appseriono', isInput: false, option: [1,2,3], isRequired:true},
    { name: '行业类别', key: 'Appseriono', isInput: false, option: [1,2,3],isRequired:true },
    { name: '经费来源', key: 'Appseriono', isInput: false, option: [1,2,3], isRequired:true },
    { name: '工商注册号', key: 'Appseriono', isInput: true, isDate: true, isRequired:true },
    { name: '单位注册地代码', key: 'Status', isInput: true, isRequired:false },
    { name: '法定代表人', key: 'Status', isInput: true, isRequired:false },
    { name: '单位电子邮件', key: 'Status', isInput: true, isRequired:false },
    { name: '单位邮编', key: 'Status', isInput: true, isRequired:false },
    { name: '单位电话', key: 'Status', isInput: true, isRequired:false },
    { name: '单位传真', key: 'Status', isInput: true, isRequired:false },
    { name: '单位联系人', key: 'Status', isInput: true, isRequired:false },
    { name: '联系人电话', key: 'Status', isInput: true, isRequired:false },

    { name: '开户银行(归集)', key: 'Status', isInput: false, option: [1,2,3], isRequired:false },    
    { name: '开户银行(归集)行号', key: 'Status', isInput: true, isRequired:false },    
    { name: '开户银行(归集)所在市', key: 'Status', isInput: false, topion: [1,2,3], isRequired:false },    
    { name: '开户银行(归集)所在省', key: 'Status', isInput: false, option: [1,2,3], isRequired:false },    
    { name: '银行账户名称(归集)', key: 'Status', isInput: true, isRequired:false },    
    { name: '银行账号(归集)', key: 'Status', isInput: true, isRequired:false },    
].map((item)=>{
    return {title: item.name, dataIndex: item.key, }
})

const tableData = [{
    Appseriono: 1,
    Status:1,
}]

class FixingDateInfo extends Component {

    componentDidMount(){

    }
    render() {
        return (
            <div>
                <BreadcrumbCustom first="账户管理 &nbsp; / &nbsp; 单位账户管理" second="单位基本信息" />
                <div>
                    <Card title="单位基本信息">
                        <Row gutter={40} style={{marginBottom:18}}>
                            <Col sm={{span:10, push:18}}>
                                <Link to="/app/accountManagement/corporateAccount/corporateBase" style={{marginRight: 10}}>
                                    <Button type="primary">增加</Button>
                                </Link>
                                <Link to="/app/accountManagement/corporateAccount/corporateBase" style={{marginRight: 10}}>
                                    <Button type="primary">修改</Button>
                                </Link>
                                <Button type="primary">删除</Button>
                                <Button type="primary">导入</Button>
                            </Col>
                        </Row>
                        <Table columns={tableColumns} dataSource={tableData} scroll={{ x: 2500 }} />              
                    </Card>
                </div>
            </div>
        )
    }
}
export default FixingDateInfo