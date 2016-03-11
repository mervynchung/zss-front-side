import React from 'react';
import {Icon, Badge} from 'antd';
import ComUserPanel from '../ComUserPanel';
import './style.css';
const AppHeader = React.createClass({
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
            <header className="app-header box-shadow">
                <div className="app-logo"><span style={{fontWeight:'600',fontSize:'24px',color:'#fff'}}>cta.gd</span></div>
                <div className="user-panel">
                    <Badge  dot={this.state.show}><a href="#" onClick={this.handleClick}><Icon
                        type="notification" style={{fontSize:'18px'}}/></a></Badge>
                    <ComUserpanel />
                </div>
            </header>
        );
    }
});
module.exports = AppHeader;