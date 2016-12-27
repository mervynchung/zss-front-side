import React from 'react'
import {Modal, Tabs, Radio} from 'antd'
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
const c = React.createClass({
    getDefaultProps(){
        return {
            group: {
                '3': '省内事务所',
                '114': '外省事务所（无省内分所）',
                '0':'全部事务所'
            },
            special:{
                '211':'未缴清会费事务所',
                '212': '未上传财务报表事务所',
                '213': '未上传行业报表事务所'
            }
        }
    },
    getInitialState(){
        return {
            value: '3'
        }
    },
    handleChange(e){
        this.setState({value: e.target.value})
    },
    handleOk(){
        const {onOk, data} = this.props;
        onOk({key: this.state.value, label: data[this.state.value]})
    },

    getGroupRadios(){
        const {group} = this.props;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px'
        };
        let result = [];
        for (let prop in group) {
            result.push(<Radio style={radioStyle} key={prop} value={prop}>{group[prop]}</Radio>)
        }
        return result
    },
    getSpecialRadios(){
        const {special} = this.props;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px'
        };
        let result = [];
        for (let prop in special) {
            result.push(<Radio style={radioStyle} key={prop} value={prop}>{special[prop]}</Radio>)
        }
        return result
    },

    render(){

        return <Modal {...this.props} onOk={this.handleOk}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="群组" key="1">
                    <RadioGroup onChange={this.handleChange} value={this.state.value}>
                        {this.getGroupRadios()}
                    </RadioGroup>
                </TabPane>
                <TabPane tab="特殊群组" key="2">
                    <RadioGroup onChange={this.handleChange} value={this.state.value}>
                        {this.getSpecialRadios()}
                    </RadioGroup>
                </TabPane>
            </Tabs>
        </Modal>
    }
});

module.exports = c;