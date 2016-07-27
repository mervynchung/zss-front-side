import React from 'react'
import {Steps,Col,Row } from 'antd'
import Panel from 'component/compPanel'

const Step = Steps.Step;
const newYwbb = React.createClass({
    render(){
        return <Panel>
            <Steps current={1}>
                <Step title="填写协议" description="这里是多信息的描述" />
                <Step title="填写业务详细信息" description="这里是多信息的描述" />
                <Step title="确认事务所基本信息" description="这里是多信息的描述" />
            </Steps>
        </Panel>
    }
});

module.exports = newYwbb;