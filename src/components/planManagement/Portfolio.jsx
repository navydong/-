import React, { Component } from 'react'
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router'
const FormItem = Form.Item;
const Option = Select.Option


const tableColumns = []
let top = document.body.offsetHeight
class Portfolios extends Component {
    componentDidMount() {

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
                <BreadcrumbCustom first="计划管理" second="投资组合信息" />
                <Affix offsetTop={top - 40} style={{ textAlign: 'center' }}>
                    <div style={{ backgroundColor: '#eee', height: 40, lineHeight: '40px' }}>
                        <Link to="/app/planManagement/RiskManagementInfo" style={{ marginRight: 10 }}>
                            <Button type="primary">提交</Button>
                        </Link>
                        <Button type="primary">重置</Button>
                    </div>
                </Affix>
                <div>
                    <Form>
                        <Card title="年金基本信息">
                            <Row gutter={40}>
                                {
                                    [
                                        { name: '交易序列号', key: 'Portfolioid', isInput: true, isRequired: true },
                                        { name: '交易类别', key: 'Portfolioid', isInput: false, option: ['1', '2'], isRequired: true },
                                        { name: '受托人年金计划编码', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '代理人计划编码', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '年金计划名称', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '年金计划登记号', key: 'Portfolioid', isInput: true, isRequired: true },
                                    ].map((item) => {
                                        return (
                                            <Col span={12}>
                                                <FormItem label={item.name} {...formItemLayout}>
                                                    {getFieldDecorator(item.key, {
                                                        rules: [{ required: item.isRequired, message: 'require' }],
                                                    })(
                                                        item.isInput ? <Input /> : (<Select>
                                                            {item.option.map((val) => {
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
                        <Card title="投资组合基本信息" style={{ marginTop: 10 }}>
                            <Row gutter={40}>
                                {
                                    [
                                        { name: '投资组合代码', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '投资组合名称', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '投资管理人代码', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '托管人代码', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '投资资产托管账户开户行名称', key: 'Portfolioid', isInput: false, option: [1, 2, 3, 4, 5, 6], isRequired: false },
                                        { name: '投资资产托管账户开户行行号', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '投资资产托管账户账号', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '投资资产托管账户名称', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '风险准备金账户开户行名称', key: 'Portfolioid', isInput: false, option: [1, 2, 3, 4, 5], isRequired: false },
                                        { name: '风险准备金账户开户行行号', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '风险准备金托管账户账号', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '风险准备金托管账户名称', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '币种', key: 'Portfolioid', isInput: false, option: [1, 2, 3], isRequired: false },
                                        { name: '基金经理', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '建立日期', key: 'Portfolioid', isInput: true, isDate: true, isRequired: false },
                                        { name: '清盘日期', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '尾数处理方式', key: 'Portfolioid', isInput: false, option: [1, 2, 3], isRequired: false },
                                        { name: '交易周期', key: 'Portfolioid', isInput: false, option: [1, 2, 3], isRequired: false },
                                        { name: '投资管理费率', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '投资管理费率描述', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '受托管理费率', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '受托管理费率描述', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '托管费率', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '托管费率描述', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '初始投资组合单位净值', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '投资组合状态', key: 'Portfolioid', isInput: true, isRequired: true },
                                        { name: '初次定价日期', key: 'Portfolioid', isInput: true, isDate: true, isRequired: false },
                                        { name: '最后更新日期', key: 'Portfolioid', isInput: true, isDate: true, isRequired: false },
                                        { name: '摘要', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '权益投资经理', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '固定收益投资经理', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '组合类型', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '投资比例', key: 'Portfolioid', isInput: true, isRequired: false },
                                        { name: '赎回比例', key: 'Portfolioid', isInput: true, isRequired: false },
                                    ].map((item, index) => {
                                        return (
                                            <Col span={12}>
                                                <FormItem label={item.name} {...formItemLayout}>
                                                    {getFieldDecorator(item.key + index, {
                                                        rules: [{ required: item.isRequired, message: 'require' }],
                                                    })(
                                                        item.isInput ? (item.isDate ? <DatePicker /> : <Input />) : (<Select>
                                                            {item.option.map((val) => {
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
const Portfolio = Form.create()(Portfolios);
export default Portfolio