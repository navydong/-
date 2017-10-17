import React, { Component } from 'react'
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';
const FormItem = Form.Item;
const Option = Select.Option


let top = document.body.offsetHeight
console.log(top)
class Bases extends Component {
    state = {
       
    }
    componentDidMount(){

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 16
            }
        }
        return (
            <div>
                <BreadcrumbCustom first="计划管理" second="单位基本信息" />
                <Affix offsetTop={top - 40} style={{ textAlign: 'center' }}>
                    <div style={{ backgroundColor: '#eee', height: 40, lineHeight: '40px' }}>
                        <Link to="/app/organizationManagement/baseInfo1" style={{ marginRight:10 }}>
                            <Button type="primary">提交</Button>
                        </Link>
                        <Button type="primary">重置</Button>
                    </div>
                </Affix>
                <div>
                    <Form>
                        <Card title="单位基本信息">
                            <Row gutter={40}>
                                {
                                    [
                                        { name: '交易序列号', key: 'Portfolioid', isInput: true, isRequired:true },
                                        { name: '交易类别', key: 'Portfolioid', isInput: false, option: [1,2,3,4], isRequired:true },
                                        { name: '单位编码', key: 'Portfolioid', isInput: true, isRequired:true },
                                        { name: '单位名称', key: 'Portfolioid', isInput: true, isRequired:true },
                                        { name: '组织机构代码', key: 'Portfolioid', isInput: true, isRequired:true },
                                        { name: '统一社会信用代码', key: 'Portfolioid', isInput: true , isRequired:false},
                                        { name: '单位地址', key: 'Portfolioid', isInput: true, isRequired:true },
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
                                    ].map((item) => {
                                        return (
                                            <Col span={12}>
                                                <FormItem label={item.name} {...formItemLayout}>
                                                    {getFieldDecorator(item.key, {
                                                        rules: [{ required: item.isRequired, message: 'require' }],
                                                    })(
                                                        item.isInput ? (item.isDate ? <DatePicker /> : <Input />) : (<Select>
                                                            { item.option.map((val)=>{
                                                                return <Option value={val}>{val}</Option>
                                                            })}
                                                        </Select>)
                                                        )}
                                                </FormItem>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Card>
                        <Card title="单位年金信息">
                            <Row gutter={40}>
                                {
                                    [
                                        { name: '受托人年金计划编码', key: 'Portfolioid', isInput: true, isRequired:false },
                                        { name: '代理人计划编码', key: 'Portfolioid', isInput: false, option: [1,2,3,4], isRequired:false },
                                        { name: '年金计划名称', key: 'Portfolioid', isInput: true, isRequired:false },
                                        { name: '年金计划登记号', key: 'Portfolioid', isInput: true, isRequired:true },
                                        { name: '参加计划日期', key: 'Portfolioid', isInput: true, isDate: true, isRequired:true },
                                        { name: '退出计划日期', key: 'Portfolioid', isInput: true, isDate: true, isRequired:false},
                                        { name: '开户银行(缴费)', key: 'Portfolioid', isInput: true, isRequired:false },
                                        { name: '开户银行(缴费)行号', key: 'Portfolioid', isInput: false, option: [1,2,3], isRequired:false },
                                        { name: '银行账户名称(缴费)', key: 'Portfolioid', isInput: false, option: [1,2,3], isRequired:false },
                                        { name: '银行账号(缴费)', key: 'Status', isInput: false, option: ['1','2'], isRequired:false },
                                        { name: '开户银行(缴费)所在省', key: 'Status', isInput: false, option:['北京', '河北', '河南'],isRequired:false },
                                        { name: '开户银行(缴费)所在市', key: 'Status', isInput: false,option:[1,2,3], isRequired:false },
                                        { name: '最后更新日期', key: 'Status', isInput: true, isDate: true, isRequired:false },
                                        { name: '摘要', key: 'Status', isInput: true, isRequired:false },
                                        { name: '代理人单位计划编码', key: 'Status', isInput: true, isRequired:false },
                                    ].map((item) => {
                                        return (
                                            <Col span={12}>
                                                <FormItem label={item.name} {...formItemLayout}>
                                                    {getFieldDecorator(item.key, {
                                                        rules: [{ required: item.isRequired, message: 'require' }],
                                                    })(
                                                        item.isInput ? (item.isDate ? <DatePicker /> : <Input />) : (<Select>
                                                            { item.option.map((val)=>{
                                                                return <Option value={val}>{val}</Option>
                                                            })}
                                                        </Select>)
                                                        )}
                                                </FormItem>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Card>
                    </Form>
                </div>
            </div>
        )
    }
}
const Base = Form.create()(Bases);
export default Base