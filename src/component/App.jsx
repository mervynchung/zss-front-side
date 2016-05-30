import './app.css'
import React from 'react';
import AppHeader from './AppHeader';
import AppSideNav from './AppSideNav';
import AppFooter from './AppFooter';
import {QueueAnim, Breadcrumb,Alert,Modal} from 'antd'
import {withRouter} from 'react-router'
import req from 'reqwest'
import config from 'common/configuration'
import auth from 'common/auth'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: [],
            accountInfo: {}
        };
    }

    componentDidMount() {
        auth.getAccount()
            .then(resp=> {
                auth.setJgid(resp.jgId);
                auth.setPermission(resp.permisssion);
                this.setState({
                    accountInfo: {names: resp.names, newMsg: resp.newMsg},
                    menu: resp.menu
                });
            }).fail(err=>{
            Modal.error({
                title: '数据获取错误',
                content: '无法获取所需数据，请稍后再尝试'
            });
        })
    }

    render() {
        return <div className="app-main">
            <AppHeader data={this.state.accountInfo}/>
            <AppSideNav data={this.state.menu}/>
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