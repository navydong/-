import React from 'react'
import { Row, Col ,Card, Table, Button } from 'antd'
import BreadcrumbCustom from '../../BreadcrumbCustom'
import imgTable from '../../../style/imgs/1508489656(1).png'
import imgTable1 from '../../../style/imgs/1508491540(1).png'

class Jiben extends React.Component {
    state = {
        s1: "show",
        s2: "hidden"
    }
    checkHandle = ()=>{
        this.setState({
            s1: "hidden",
            s2: "show"
        })
    }
    render() {
        return (
            <div>
                <BreadcrumbCustom first="个人查询" second="个人基本信息查询" />
                <Card>
                    <Row gutter={40} className={this.state.s1}>
                        <Col span={14}>
                            <img src={imgTable} alt="" />
                        </Col>
                        <Col span={12} push={6} className="mt-10">
                            <Button 
                                type="primary" 
                                icon="file-text" 
                                size="large"
                                onClick={this.checkHandle}
                            >查看待遇支付明细信息</Button>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Row gutter={40} className={this.state.s2}>
                        <Col span={14}>
                            <img src={imgTable1} alt="" />
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