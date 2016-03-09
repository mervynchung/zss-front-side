import React from 'react';
import LayoutHeader from './/LayoutHeader';
import LayoutSideNav from './/LayoutSideNav';
import LayoutFooter from './/LayoutFooter';

class LayoutMain extends React.Component {
    render(){
        return <div className="base-layout-main">
            <LayoutHeader/>
            <div className="base-layout-container">
                <LayoutSideNav/>
                <div className="wrap">
                    <div className="base-layout-content">内容区域</div>
                    <LayoutFooter/>
                </div>
            </div>
        </div>
    }
}

module.exports = LayoutMain;