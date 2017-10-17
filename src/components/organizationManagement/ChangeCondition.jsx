import React, { Component } from 'react'
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';
const FormItem = Form.Item;
const Option = Select.Option


let top = document.body.offsetHeight
console.log(top)
class ChangeConditions extends Component {
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
                <BreadcrumbCustom first="计划管理" second="管理机构变动情况" />
                <Affix offsetTop={top - 40} style={{ textAlign: 'center' }}>
                    <div style={{ backgroundColor: '#eee', height: 40, lineHeight: '40px' }}>
                        <Link to="/app/organizationManagement/ChangeConditionInfo" style={{ marginRight:10 }}>
                            <Button type="primary">提交</Button>
                        </Link>
                        <Button type="primary">重置</Button>
                    </div>
                </Affix>
                <div>
                    <Form>
                        <Card title="定价日信息">
                            <Row gutter={40}>
                                {
                                    [
                                        { name: '交易序列号', key: 'Appseriono', isInput: true, isRequired:true },
                                        { name: '交易类别', key: 'Transtype', isInput: false, option: [1,2,3,4], isRequired:true },
                                        { name: '受托人年金计划编码', key: 'Planid', isInput: true, isRequired:false },
                                        { name: '代理人计划编码', key: 'Accountplanid', isInput: true, isRequired:false },
                                        { name: '年金计划名称', key: 'Planname', isInput: true, isRequired:true },
                                        { name: '年金计划登记号', key: 'Planlicid', isInput: true , isRequired:true},
                                        { name: '报告起始日期', key: 'Year', isInput: true, isDate: true, isRequired:true },
                                        { name: '报告终止日期', key: 'Pricedate', isInput: true, isDate: true, isRequired:true },
                                        { name: '管理机构类型', key: 'Lastupddate', isInput: false, option: [1,2,3], isRequired:true },
                                        { name: '更换前管理人代码', key: 'Status', isInput: true, isRequired:true },
                                        { name: '更换后管理人代码', key: 'Status', isInput: true, isRequired:true },
                                        { name: '更换原因', key: 'Status', isInput: true, isRequired:true },
                                        { name: '转移定价日', key: 'Status', isInput: true, isDate: true, isRequired:false }
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
const ChangeCondition = Form.create()(ChangeConditions);
export default ChangeCondition