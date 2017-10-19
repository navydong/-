import React, { Component } from 'react'
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Card } from 'antd'
import { Form, Row, Col, Input, Button, Icon, Table, Select, Affix, DatePicker } from 'antd';
import { Link } from 'react-router';
const FormItem = Form.Item;
const Option = Select.Option


let top = document.body.offsetHeight
console.log(top)

/**
 * 表单模板
 * ###参数为props Templ的属性
 * @param indexUrl: 表格url  String
 * @param tableColumns: 表格列表  Array
 * @param title: 导航信息和卡片标题  Array(2)
 */
class TemplInfos extends Component {
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
                <BreadcrumbCustom first={this.props.title[0]} second={this.props.title[1]} />
                <Affix offsetTop={top - 40} style={{ textAlign: 'center' }}>
                    <div style={{ backgroundColor: '#eee', height: 40, lineHeight: '40px' }}>
                        <Link to={`/app/${this.props.indexUrl}`} style={{ marginRight:10 }}>
                            <Button type="primary">提交</Button>
                        </Link>
                        <Button type="primary">重置</Button>
                    </div>
                </Affix>
                <div>
                    <Form>
                        <Card title={this.props.title[1]}>
                            <Row gutter={40}>
                                {
                                    this.props.tableColumns.map((item,index) => {
                                        return (
                                            <Col span={12}>
                                                <FormItem label={item.name} {...formItemLayout}>
                                                    {getFieldDecorator(`s${index}`, {
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
const TemplInfo = Form.create()(TemplInfos);
export default TemplInfo