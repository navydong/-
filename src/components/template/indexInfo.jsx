import React, { Component } from 'react'
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router'




/**
 * 表格模板
 * ###参数为props Templ的属性
 * @param indexUrl: 表单url  String
 * @param tableColumns: 表格列  Array
 * @param tableData: 表格数据  Array
 * @param title: 导航信息和卡片标题  Array(2)
 */
class TemplInfo extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <BreadcrumbCustom first={this.props.title[0]} second={this.props.title[1]} />
                <div>
                    <Card title={this.props.title[1]}>
                        <Row gutter={40} style={{ marginBottom: 18 }}>
                            <Col sm={{ span: 10, push: 14 }} lg={{ span:8, push:18 }}>
                                <Link to={`/app/${this.props.indexUrl}`} style={{ marginRight: 10 }}>
                                    <Button type="primary">增加</Button>
                                </Link>
                                <Link to="/app/planManagement/fixingDate" style={{ marginRight: 10 }}>
                                    <Button type="primary">修改</Button>
                                </Link>
                                <Button type="primary">删除</Button>
                                <Button type="primary">导入</Button>
                            </Col>
                        </Row>
                        <Table columns={this.props.tableColumns.map((item, index) => {
                            return { title: item.name, dataIndex: index }
                        }) || [{ name: '没有传入columns', key: 'Appseriono', isInput: true, isRequired: true },]}
                            dataSource={this.props.tableData || []}
                            scroll={this.props.scroll || { x: this.props.tableColumns.length * 120 }}
                        />
                    </Card>
                </div>
            </div>
        )
    }
}
export default TemplInfo