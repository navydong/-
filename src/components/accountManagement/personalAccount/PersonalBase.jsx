import React, { Component } from 'react'
import BreadcrumbCustom from '../../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';
const FormItem = Form.Item;
const Option = Select.Option


let top = document.body.offsetHeight
console.log(top)
class PersonalBases extends Component {
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
                <BreadcrumbCustom first="账户管理 &nbsp; / &nbsp; 个人账户管理" second="个人基本信息" />
                <Affix offsetTop={top - 40} style={{ textAlign: 'center' }}>
                    <div style={{ backgroundColor: '#eee', height: 40, lineHeight: '40px' }}>
                        <Link to="/app/accountManagement/personalAccount/personalBaseInfo" style={{ marginRight:10 }}>
                            <Button type="primary">提交</Button>
                        </Link>
                        <Button type="primary">重置</Button>
                    </div>
                </Affix>
                <div>
                    <Form>
                        <Card title="个人基本信息">
                            <Row gutter={40}>
                                {
                                    [
                                        { name: '年金计划登记号', key: 'Appseriono', isInput: true, isRequired:true },
                                        { name: '年金计划名称', key: 'Transtype', isInput: false, option: [1,2,3,4], isRequired:true },
                                        { name: '单位名称', key: 'Planid', isInput: true, isRequired:false },
                                        { name: '职工编号', key: 'Accountplanid', isInput: true, isRequired:false },
                                        { name: '姓名', key: 'Planname', isInput: true, isRequired:false },
                                        { name: '性别', key: 'Planlicid', isInput: true , isRequired:true},
                                        { name: '出生日期', key: 'Year', isInput: true, isDate: true, isRequired:true },
                                        { name: '证件类型', key: 'Pricedate', isInput: true, isRequired:true },
                                        { name: '证件号码', key: 'Lastupddate', isInput: true, sRequired:true },
                                        { name: '参加计划日期', key: 'Status', isInput: true, isDate: true, isRequired:false },
                                        { name: '退出计划日期', key: 'Status', isInput: true, isDate: true, isRequired:false },
                                        { name: '缴费基数', key: 'Status', isInput: true, isRequired:false },
                                        { name: '通讯地址', key: 'Status', isInput: true, isRequired:false },
                                        { name: '联系电话', key: 'Status', isInput: true, isRequired:false },
                                        { name: '传真', key: 'Status', isInput: true, isRequired:false },
                                        { name: '参加工作日期', key: 'Status', isInput: true, isDate: true, isRequired:false },
                                        { name: '电子邮件', key: 'Status', isInput: true, isRequired:false },
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
const PersonalBase = Form.create()(PersonalBases);
export default PersonalBase