import React from 'react';
import LayoutHeader from './component/LayoutHeader';
import LayoutSideNav from './component/LayoutSideNav';
import LayoutFooter from './component/LayoutFooter';

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
