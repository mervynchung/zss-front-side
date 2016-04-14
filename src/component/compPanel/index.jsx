import React from 'react'
import {Row,Col,Button,Icon} from 'antd'
import './style.css'

const panel = React.createClass({

  render(){
    let {title,toobar} = this.props;
    let pt = <div className="panel-title">
      <Row>
        <Col span="8"><h3>{this.props.title}</h3></Col>
        <Col span="8" offset="8">{this.props.toolbar}</Col>
      </Row>
    </div>

    return <div className="panel">
      {title||toobar?pt:null}
      <div className="panel-body">
        {this.props.children}
      </div>
    </div>
  }
})

module.exports = panel;