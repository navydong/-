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
                        <Link to="/app/accountManagement/corporateAccount/paymentMessageInfo" style={{ marginRight:10 }}>
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
                                        { name: '总缴费金额', key: 'Appseriono', isInput: true, isRequired:false },
                                        { name: '总缴费人数', key: 'Transtype', isInput: false, option: [1,2,3,4], isRequired:false },
                                        { name: '缴费周期', key: 'Planid', isInput: true, isRequired:false },
                                        { name: '上期缴费金额', key: 'Accountplanid', isInput: true, isRequired:false },
                                        { name: '上期缴费人数', key: 'Planname', isInput: true, isRequired:false },
                                        { name: '上期缴费金额', key: 'Planlicid', isInput: true , isRequired:false},
                                        { name: '本期缴费人数', key: 'Year', isInput: true, isDate: true, isRequired:false },
                                        { name: '本期变动金额', key: 'Pricedate', isInput: true, isDate: true, isRequired:false },
                                        { name: '本期变动人数', key: 'Lastupddate', isInput: true, isDate: true, isRequired:false },
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