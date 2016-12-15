import React from 'react'
import {Modal, Tabs, Radio} from 'antd'
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
const c = React.createClass({
    getInitialState(){
        return {
            value:1
        }
    },
    handleChange(e){
      this.setState({value:e.target.value})
    },
    handleOk(){
        this.props.onGet(this.state.value)
    },
    render(){
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px'
        };
        return <Modal {...this.props} onOk={this.handleOk}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="群组" key="1">
                    <RadioGroup onChange={this.handleChange} value={this.state.value}>
                        <Radio style={radioStyle} key="1" value={1}>省内事务所</Radio>
                        <Radio style={radioStyle} key="2" value={2}>外省事务所（无省内分所）</Radio>
                    </RadioGroup>
                </TabPane>
            </Tabs>
        </Modal>
    }
});

module.exports = c;