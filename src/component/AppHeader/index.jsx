import React from 'react';
import {Icon} from 'antd';
import CompUserPanel from '../CompUserPanel';
import './style.css';
const AppHeader = React.createClass({
    render() {
        return (
            <header className="app-header box-shadow">
                <div className="app-logo"><span style={{fontWeight:'600',fontSize:'24px',color:'#fff'}}>cta.gd</span>
                </div>
                <CompUserPanel />
            </header>
        );
    }
});
module.exports = AppHeader;