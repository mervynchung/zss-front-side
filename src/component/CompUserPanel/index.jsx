import React from 'react';
import {Menu, Dropdown, Icon,Badge}from 'antd';
import {withRouter} from 'react-router'
import auth from 'common/auth'
import './style.css'

const ComUserPanel = withRouter(React.createClass({
    getInitialState() {
        return {
            show: false
        };
    },
    handleClick() {
        this.setState({
            show: false
        });
    },
    handleLogout(e){
        e.preventDefault();
        auth.logout();
        this.props.router.replace('/signin')
    },
    render() {
        const menu = <Menu>
            <Menu.Item key="1"><a href="/" onClick={this.handleLogout}>退出帐号</a></Menu.Item>
        </Menu>;
        const accountInfo = this.props.data;
        return (
            <div className="user-panel">
                <ul>
                    <li><Badge dot={this.state.newMsg}><a href="#" onClick={this.handleClick}><Icon
                        type="mail"/></a></Badge></li>
                    <li><Dropdown overlay={menu} trigger={['click']}>
                        <a href="/"> {accountInfo.names} <Icon className="toggle-icon" type="down"/></a>
                    </Dropdown></li>
                </ul>
            </div >
        );
    }
}))

module.exports = ComUserPanel;