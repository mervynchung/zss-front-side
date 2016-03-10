import React from 'react';
import {Row, Col, Icon, Badge} from 'antd';
import ComUserPanel from './../ComUserPanel';
import './style.css';
const LayoutHeader = React.createClass({
    getInitialState() {
        return {
            show: true
        };
    },
    handleClick() {
        this.setState({
            show: !this.state.show
        });
    },
    render() {
        return (
            <div className="base-layout-header">
                <Row type="flex" align="bottom">
                    <Col span="2"></Col>
                    <Col span="4">logo</Col>
                    <Col span="14"></Col>
                    <Col span="1"><Badge dot={this.state.show}><a href="#" onClick={this.handleClick}><Icon
                        type="notification" style={{fontSize:'18px'}}/></a></Badge></Col>
                    <Col span="3"><ComUserPanel /></Col>
                </Row>
            </div>
        );
    }
});
module.exports = LayoutHeader;