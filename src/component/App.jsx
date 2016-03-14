import React from 'react';
import AppHeader from './AppHeader';
import AppSideNav from './AppSideNav';
import AppFooter from './AppFooter';
import './app.css'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.dataSource = this.props.route.dataSource;
    }

    render() {
        return <div className="app-main">
            <AppHeader/>
            <AppSideNav dataSource={this.dataSource.asideMenu}/>
            <div className="app-content">
                <div className="wrap">
                    {this.props.children || '内容区域' }
                </div>
            </div>
            <AppFooter/>
        </div>
    }
}

module.exports = App;