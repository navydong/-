import React, { Component } from 'react'
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';



const tableColumns = [
    { name: '交易序列号', key: 'Appseriono', isInput: true, isRequired:true },
    { name: '交易类别', key: 'Transtype', isInput: false, option: [1,2,3,4], isRequired:true },
    { name: '受托人年金计划编码', key: 'Planid', isInput: true, isRequired:false },
    { name: '代理人计划编码', key: 'Accountplanid', isInput: true, isRequired:false },
    { name: '年金计划名称', key: 'Planname', isInput: true, isRequired:false },
    { name: '年金计划登记号', key: 'Planlicid', isInput: true , isRequired:true},
    { name: '年度', key: 'Year', isInput: true, isDate: true, isRequired:true },
    { name: '定价日期', key: 'Pricedate', isInput: true, isDate: true, isRequired:true },
    { name: '最后更新日期', key: 'Lastupddate', isInput: true, isDate: true, isRequired:true },
    { name: '是否有效', key: 'Status', isInput: false, option: ['1','2'], isRequired:false }
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
                <BreadcrumbCustom first="计划管理" second="投资组合信息" />
                <div>
                    <Card title="投资组合信息">
                        <Row gutter={40} style={{marginBottom:18}}>
                            <Col sm={{span:10, push:18}}>
                                <Link to="/app/planManagement/portfolio" style={{marginRight: 10}}>
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
export default FixingDateInfo