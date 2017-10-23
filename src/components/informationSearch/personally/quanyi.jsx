import React from 'react'
import { Row, Col ,Card, Table } from 'antd'
import BreadcrumbCustom from '../../BreadcrumbCustom'
import img from '../../../style/imgs/1508492092(1).png'


class Jiben extends React.Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first="个人查询" second="个人基本信息查询" />
                <Card>
                    <Row gutter={40}>
                        <Col span={14}>
                            <img src={img} alt="" />
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default Jiben