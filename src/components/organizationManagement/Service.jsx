import React, { Component } from 'react'
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';
const FormItem = Form.Item;
const Option = Select.Option


let top = document.body.offsetHeight
console.log(top)
class Services extends Component {
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
                <BreadcrumbCustom first="机构管理" second="服务机构信息" />
                <Affix offsetTop={top - 40} style={{ textAlign: 'center' }}>
                    <div style={{ backgroundColor: '#eee', height: 40, lineHeight: '40px' }}>
                        <Link to="/app/organizationManagement/ServiceInfo" style={{ marginRight:10 }}>
                            <Button type="primary">提交</Button>
                        </Link>
                        <Button type="primary">重置</Button>
                    </div>
                </Affix>
                <div>
                    <Form>
                        <Card title="服务机构信息">
                            <Row gutter={40}>
                                {
                                    [
                                        { name: '交易序列号', key: 'Appseriono', isInput: true, isRequired:true },
                                        { name: '交易类别', key: 'Transtype', isInput: false, option: [1,2,3,4], isRequired:true },
                                        { name: '受托人年金计划编码', key: 'Planid', isInput: true, isRequired:false },
                                        { name: '代理人计划编码', key: 'Accountplanid', isInput: true, isRequired:false },
                                        { name: '年金计划名称', key: 'Planname', isInput: true, isRequired:false },
                                        { name: '年金计划登记号', key: 'Planlicid', isInput: true , isRequired:true},
                                        { name: '机构代码', key: 'Year', isInput: true, isRequired:true },
                                        { name: '机构名称', key: 'Pricedate', isInput: true, isRequired:true },
                                        { name: '组织机构代码', key: 'Lastupddate', isInput: true, isRequired:false },
                                        { name: '统一社会信用代码', key: 'Status', isInput: true, isRequired:false }
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
const Service = Form.create()(Services);
export default Service