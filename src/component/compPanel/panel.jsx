import React from 'react'
import {Row,Col,Button,Icon} from 'antd'

const panel = React.createClass({

    render(){
        let {title,toolbar} = this.props;
        let pt = <div className="panel-title">
            <Row>
                <Col span="8"><h3>{title}</h3></Col>
                <Col span="16">{toolbar}</Col>
            </Row>
        </div>

        return <div className="panel">
            {title||toolbar?pt:null}
            <div className="panel-body">
                {this.props.children}
            </div>
        </div>
    }
})

module.exports = panel;