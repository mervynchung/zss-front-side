import React from 'react';
import LayoutHeader from './/LayoutHeader';
import LayoutSideNav from './/LayoutSideNav';
import LayoutFooter from './/LayoutFooter';
import './app.css'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
    }

    render(){
        return <div className="base-layout-main">
            <LayoutHeader/>
            <div className="base-layout-container">
                <LayoutSideNav dataSource={this.dataSource.asideMenu}/>
                <div className="wrap">
                    <div className="base-layout-content">内容区域</div>
                    <LayoutFooter/>
                </div>
            </div>
        </div>
    }
}

module.exports = App;