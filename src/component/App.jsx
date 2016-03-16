import React from 'react';
import AppHeader from './AppHeader';
import AppSideNav from './AppSideNav';
import AppFooter from './AppFooter';
import {QueueAnim} from 'antd'
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
            <div  className="app-content">
                <QueueAnim type={['right', 'left']}  className="wrap">
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </QueueAnim>
            </div>
            <AppFooter/>
        </div>
    }
}

module.exports = App;