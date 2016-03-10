import React from 'react';
import AppHeader from './AppHeader';
import AppSideNav from './AppSideNav';
import AppFooter from './AppFooter';
import './app.css'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
    }

    render() {
        return <div className="app-main">
            <AppHeader/>
            <div className="app-container clearfix">
                <AppSideNav dataSource={this.dataSource.asideMenu}/>
                <div className="app-content">
                    <div className="wrap"> 内容区域</div>
                </div>
                <AppFooter/>
            </div>
        </div>
    }
}

module.exports = App;