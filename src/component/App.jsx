import './app.css'
import React from 'react';
import AppHeader from './AppHeader';
import AppSideNav from './AppSideNav';
import AppFooter from './AppFooter';
import {QueueAnim, Breadcrumb} from 'antd'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.dataSource = this.props.route.dataSource;
    }

    render() {
        return <div className="app-main">
            <AppHeader/>
            <AppSideNav dataSource={this.dataSource.asideMenu}/>
            <div className="app-breadcrumb"><Breadcrumb  {...this.props} /></div>

            <QueueAnim type={['bottom', 'top']} duration={450} className="app-content">
            {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
            })}
            </QueueAnim>
            <AppFooter/>
        </div>
    }
}

module.exports = App;