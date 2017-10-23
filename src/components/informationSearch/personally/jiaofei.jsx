import React from 'react'
import { Row, Col ,Card, Table, Form, Button, Select } from 'antd'
import BreadcrumbCustom from '../../BreadcrumbCustom'
import imgTable from '../../../style/imgs/1508482132(1).png'
const Option = Select.Option

class Jiben extends React.Component {
    state={
        show: "hidden"
    }
    search = ()=>{
        this.setState({
            show: "show"
        })
    }
    render() {
        return (
            <div>
                <BreadcrumbCustom first="个人查询" second="个人基本信息查询" />
                <Card>
                    <Row gutter={40}>
                    <Form>
                        <Col span={6}>
                            <Select defaultValue="2017">
                                <Option value="2017">2017</Option>
                            </Select>    
                        </Col>
                        <Col>
                        <Button type="primary" onClick={this.search}>查询</Button>
                        </Col>
                        </Form>
                        <Col span={14} className={this.state.show}>
                            <img src={imgTable} alt="" />
                        </Col>
                    </Row>
                </Card>
                <style>
                    {`
                        .hidden{
                            display: none;
                        }
                        .show{
                            display: block;
                        }
                        .mt-10{
                            margin-top:10px;
                        }

                    `}
                    </style>
            </div>
        )
    }
}

export default Jiben