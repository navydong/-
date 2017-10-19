import React, { Component } from 'react'
import BreadcrumbCustom from '../../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';
const FormItem = Form.Item;
const Option = Select.Option


let top = document.body.offsetHeight
console.log(top)
class Accounts extends Component {
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
                <BreadcrumbCustom first="账户管理 &nbsp; / &nbsp; 个人账户管理" second="支付账户信息" />
                <Affix offsetTop={top - 40} style={{ textAlign: 'center' }}>
                    <div style={{ backgroundColor: '#eee', height: 40, lineHeight: '40px' }}>
                        <Link to="/app/accountManagement/personalAccount/accountInfo" style={{ marginRight:10 }}>
                            <Button type="primary">提交</Button>
                        </Link>
                        <Button type="primary">重置</Button>
                    </div>
                </Affix>
                <div>
                    <Form>
                        <Card title="支付账户信息">
                            <Row gutter={40}>
                                {
                                    [
                                        { name: '银行账号(缴费)', key: 'Appseriono', isInput: true, isRequired:true },
                                        { name: '待遇支付银行所在省', key: 'Transtype', isInput: false, option: [1,2,3,4], isRequired:true },
                                        { name: '待遇支付银行所在市', key: 'Planid', isInput: true, isRequired:false },
                                        { name: '待遇支付银行名称', key: 'Accountplanid', isInput: true, isRequired:false },
                                        { name: '待遇支付银行行号', key: 'Planname', isInput: true, isRequired:false },
                                        { name: '待遇支付银行账户名称', key: 'Planlicid', isInput: true , isRequired:true},
                                        { name: '待遇支付银行账号', key: 'Year', isInput: true, isRequired:true },
                                        { name: '总金额', key: 'Pricedate', isInput: true, isRequired:true },
                                        { name: '投资收益', key: 'Lastupddate', isInput: true, isRequired:true },
                                        { name: '缴费总金额', key: 'Status', isInput: false, option: ['1','2'], isRequired:false },
                                        { name: '个人缴费', key: 'Planlicid', isInput: true , isRequired:true},
                                        { name: '单位缴费金额', key: 'Planlicid', isInput: true , isRequired:true},
                                        { name: '单位缴费记账金额', key: 'Planlicid', isInput: true , isRequired:true},
                                        { name: '支付笔数', key: 'Planlicid', isInput: true , isRequired:true},
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
const Account = Form.create()(Accounts);
export default Account