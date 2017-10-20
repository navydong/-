import React, { Component } from 'react'
import { Row, Col, Card, Upload, Input, Form, Select, Button, Icon, message } from 'antd'
import BreadcrumbCustom from '../BreadcrumbCustom';
const FormItem = Form.Item
const Option = Select.Option

class DataImports extends Component {
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
        const props = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                console.log(info)
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} 上传成功.`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} 上传失败.`);
                }
            },
        };
        return (
            <div>
                <BreadcrumbCustom first="接口管理" second="数据导入" />
                <Form>
                    <Card title="数据导入">
                        <Row gutter={40}>
                            <Col span={12}>
                                <FormItem label="文件类型" {...formItemLayout}>
                                    <Select>
                                        <Option value="TXT">TXT</Option>
                                        <Option value="XML">XML</Option>
                                        <Option value="XLS">XLS</Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem label="" {...formItemLayout}>
                                    <Upload {...props}>
                                        <Button type="primary">
                                            <Icon type="upload" /> 导入
                                        </Button>
                                        <span style={{marginLeft: 20}}>支持TXT、XML、XLS等数据文件</span>
                                    </Upload>
                                </FormItem>
                            </Col>
                        </Row>
                    </Card>
                </Form>
            </div>
        )
    }
}
const DataImport = Form.create()(DataImports)
export default DataImport