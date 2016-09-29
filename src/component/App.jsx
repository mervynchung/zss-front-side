import './app.css'
import React from 'react';
import AppHeader from './AppHeader';
import AppSideNav from './AppSideNav';
import AppFooter from './AppFooter';
import {Breadcrumb, Alert, Icon, Spin} from 'antd'
import QueueAnim from 'rc-queue-anim'
import auth from 'common/auth'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: [],
            loading: true,
            accountInfo: {}
        };
    }

    getChildContext() {
        return {accountInfo: this.state.accountInfo};
    }

    componentDidMount() {
        let acInfo = auth.getAuthorization();
        if (acInfo) {
            this.setState({
                accountInfo: {names: acInfo.names, role: acInfo.role},
                menu: acInfo.menu,
                loading: false
            });
        } else {
            auth.getAccount()
                .then(resp=> {
                    this.setState({
                        accountInfo: {names: resp.names, newMsg: resp.newMsg, role: resp.lo},
                        menu: resp.menu,
                        loading: true
                    });
                }).fail(err=> {
            })
        }
    }

    render() {
        const loadScr = <div className="app-full-loading">
            <p><Icon type="loading"/></p>
            <p style={{fontSize: '14px', color: '#FCFCFC'}}>正在加载页面，请稍候...</p>
        </div>;
        let mainclass = this.state.loading ? 'app-main blur' : 'app-main';
        let spinHeight = document.body.clientHeight;
        return <div className={mainclass}>
            <div className="spin-nested enabled" style={{height:spinHeight}}>
                <Spin tip={loadScr}/>
            </div>

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
App.childContextTypes = {
    accountInfo: React.PropTypes.object
};

module.exports = App;