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
                <BreadcrumbCustom first="账户管理 &nbsp; / &nbsp; 单位账户管理" second="单位基本信息" />
                <Affix offsetTop={top - 40} style={{ textAlign: 'center' }}>
                    <div style={{ backgroundColor: '#eee', height: 40, lineHeight: '40px' }}>
                        <Link to="/app/accountManagement/corporateAccount/corporateBaseInfo" style={{ marginRight:10 }}>
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
                                        { name: '单位编码', key: 'Appseriono', isInput: true, isRequired:true },
                                        { name: '单位名称', key: 'Transtype', isInput: true, isRequired:true },
                                        { name: '组织机构代码', key: 'Planid', isInput: true, isRequired:true },
                                        { name: '统一社会信用代码', key: 'Accountplanid', isInput: true, isRequired:false },
                                        { name: '单位地址', key: 'Planname', isInput: true, isRequired:false },
                                        { name: '是否为财政全额供款', key: 'Sfssd', isInput: false,  option: ['财政全额公款','非财政全额公款'],isRequired:false },
                                        { name: '单位类型', key: 'Planlicid', isInput: false, option: [1,2,3], isRequired:true},
                                        { name: '行业类别', key: 'Year', isInput: false, option: [1,2,3],isRequired:true },
                                        { name: '经费来源', key: 'Pricedate', isInput: false, option: [1,2,3], isRequired:true },
                                        { name: '工商注册号', key: 'Lastupddate', isInput: true, isRequired:true },
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
                                        { name: '开户银行(归集)所在市', key: 'Status', isInput: false, option: [1,2,3], isRequired:false },    
                                        { name: '开户银行(归集)所在省', key: 'Status', isInput: false, option: [1,2,3], isRequired:false },    
                                        { name: '银行账户名称(归集)', key: 'Status', isInput: true, isRequired:false },    
                                        { name: '银行账号(归集)', key: 'Status', isInput: true, isRequired:false },   
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