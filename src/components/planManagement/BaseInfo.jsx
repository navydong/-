import React, { Component } from 'react'
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option


const tableColumns = []
class BaseInfos extends Component {
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
        let top = document.body.offsetHeight
        return (
            <div>
                <BreadcrumbCustom first="计划管理" second="计划基本信息" />
                <Affix offsetTop={top - 40} style={{ textAlign: 'center' }}>
                    <div style={{ backgroundColor: '#eee', height: 40, lineHeight: '40px' }}>
                        <Button type="primary">提交</Button>
                        <Button type="primary">重置</Button>
                    </div>
                </Affix>
                <div>
                    <Form>
                        <Card title="年金计划基本信息">
                            <Row gutter={40}>
                                <Col span={12}>
                                    <FormItem label="交易序列号" {...formItemLayout}>
                                        {getFieldDecorator('Appseriono', {
                                            rules: [{ required: true, message: 'require' }],
                                        })(
                                            <Input />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="交易类别" {...formItemLayout}>
                                        {getFieldDecorator('Transtype', {
                                            rules: [{ required: true, message: 'require' }],
                                        })(
                                            <Select>
                                                <Option value="新增">新增</Option>
                                                <Option value="修改">修改</Option>
                                                <Option value="删除">删除</Option>
                                            </Select>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="受托人年金计划编码" {...formItemLayout}>
                                        {getFieldDecorator('Planid', {
                                            rules: [{ required: false, message: 'require' }],
                                        })(
                                            <Input />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="代理人计划编码" {...formItemLayout}>
                                        {getFieldDecorator('Accountplanid', {
                                            rules: [{ required: false, message: 'require' }],
                                        })(
                                            <Input />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="年金计划名称" {...formItemLayout}>
                                        {getFieldDecorator('Planname', {
                                            rules: [{ required: true, message: 'require' }],
                                        })(
                                            <Input />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="年金计划登记号" {...formItemLayout}>
                                        {getFieldDecorator('Planlicid', {
                                            rules: [{ required: true, message: 'require' }],
                                        })(
                                            <Input />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="年金计划备案批复日期" {...formItemLayout}>
                                        {getFieldDecorator('Planlicdate', {
                                            rules: [{ required: false, message: 'require' }],
                                        })(
                                            <DatePicker />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="计划属性" {...formItemLayout}>
                                        {getFieldDecorator('Planlicid', {
                                            rules: [{ required: false, message: 'require' }],
                                        })(
                                            <Input />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="计划类别" {...formItemLayout}>
                                        {getFieldDecorator('Planlicid', {
                                            rules: [{ required: false, message: 'require' }],
                                        })(
                                            <Select>
                                                <Option value="1">1</Option>
                                                <Option value="2">2</Option>
                                            </Select>
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="年金计划生效日期" {...formItemLayout}>
                                        {getFieldDecorator('Planbegdate', {
                                            rules: [{ required: false, message: 'require' }],
                                        })(
                                            <DatePicker />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="年金计划终止日期" {...formItemLayout}>
                                        {getFieldDecorator('Planenddate', {
                                            rules: [{ required: false, message: 'require' }],
                                        })(
                                            <DatePicker />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="最后更新日期" {...formItemLayout}>
                                        {getFieldDecorator('Lastupddate', {
                                            rules: [{ required: false, message: 'require' }],
                                        })(
                                            <DatePicker />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="计划所在地代码" {...formItemLayout}>
                                        {getFieldDecorator('Planlicid', {
                                            rules: [{ required: false, message: 'require' }],
                                        })(
                                            <Input />
                                            )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem label="摘要 " {...formItemLayout}>
                                        {getFieldDecorator('Planlicid', {
                                            rules: [{ required: false, message: 'require' }],
                                        })(
                                            <Input />
                                            )}
                                    </FormItem>
                                </Col>
                            </Row>

                        </Card>
                        <Card title="受托信息" style={{ marginTop: 10 }}>
                            <Row gutter={40}>
                            {
                                    [
                                        { name: '受托合同号', key: 'Portfolioid', isInput: true, isRequired:false },
                                        { name: '受托人代码', key: 'Portfolioid', isInput: true,isRequired:true },
                                        { name: '托管人代码', key: 'Portfolioid', isInput: true,isRequired:true },
                                        { name: '代理人代码', key: 'Portfolioid', isInput: true,isRequired:true },
                                        { name: '受托管理标准费率', key: 'Portfolioid', isInput: true,isRequired:false },
                                        { name: '托管标准费率', key: 'Portfolioid', isInput: true,isRequired:false },
                                        { name: '受托财产托管账户开户行名称', key: 'Portfolioid', isInput: true,isRequired:false },
                                        { name: '受托财产托管账户开户行行号', key: 'Portfolioid', isInput: true,isRequired:false },
                                        { name: '受托财产托管账户名称', key: 'Portfolioid', isInput: true,isRequired:false },
                                        { name: '受托财产托管账户账号', key: 'Portfolioid', isInput: true,isRequired:false },
                                    ].map((item) => {
                                        return (
                                            <Col span={12}>
                                                <FormItem label={item.name} {...formItemLayout}>
                                                    {getFieldDecorator(item.key, {
                                                        rules: [{ required: item.isRequired, message: 'require' }],
                                                    })(
                                                        item.isInput ? <Input /> : <Select>
                                                            <Option>123</Option>
                                                        </Select>
                                                        )}
                                                </FormItem>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Card>
                        <Card title="统一计划信息" style={{ marginTop: 10 }}>
                            <Row gutter={40}>
                            {
                                    [
                                        { name: '统一计划代码', key: 'Portfolioid', isInput: true },
                                        { name: '统一计划名称', key: 'Portfolioid', isInput: true },
                                        { name: '统一计划收益率审核人代码', key: 'Portfolioid', isInput: true },
                                        { name: '统一计划收益率计算人代码', key: 'Portfolioid', isInput: true },
                                    ].map((item) => {
                                        return (
                                            <Col span={12}>
                                                <FormItem label={item.name} {...formItemLayout}>
                                                    {getFieldDecorator(item.key, {
                                                        rules: [{ required: false, message: 'require' }],
                                                    })(
                                                        item.isInput ? <Input /> : <Select>
                                                            <Option>123</Option>
                                                        </Select>
                                                        )}
                                                </FormItem>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Card>
                        <Card title="归集账户信息" style={{ marginTop: 10 }}>
                            <Row gutter={40}>
                            {
                                    [
                                        { name: '开户银行(归集)', key: 'Portfolioid', isInput: true },
                                        { name: '开户银行(归集)行号', key: 'Portfolioid', isInput: true },
                                        { name: '开户银行(归集)所在市', key: 'Portfolioid', isInput: true },
                                        { name: '开户银行(归集)所在省', key: 'Portfolioid', isInput: true },
                                        { name: '银行账户名称(归集)', key: 'Portfolioid', isInput: true },
                                        { name: '银行账号(归集)', key: 'Portfolioid', isInput: true },
                                    ].map((item) => {
                                        return (
                                            <Col span={12}>
                                                <FormItem label={item.name} {...formItemLayout}>
                                                    {getFieldDecorator(item.key, {
                                                        rules: [{ required: false, message: 'require' }],
                                                    })(
                                                        item.isInput ? <Input /> : <Select>
                                                            <Option>123</Option>
                                                        </Select>
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
const BaseInfo = Form.create()(BaseInfos);
export default BaseInfo