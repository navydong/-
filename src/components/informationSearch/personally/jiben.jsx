import React from 'react'
import { Row, Col ,Card, Table, Button, DatePicker } from 'antd'
import BreadcrumbCustom from '../../BreadcrumbCustom'
import imgTable from '../../../style/imgs/1508482132(1).png'


class Jiben extends React.Component {
    state={
        show: "hidden"
    }
    searchHandle = ()=>{
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
                        <Col span={14}>
                            <img src={imgTable} alt="" className={this.state.show} />
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default Jiben