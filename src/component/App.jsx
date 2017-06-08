import './app.css'
import React from 'react';
import AppHeader from './AppHeader';
import AppSideNav from './AppSideNav';
import AppFooter from './AppFooter';
import {Breadcrumb, Icon, Spin} from 'antd'
import config from 'common/configuration'
import QueueAnim from 'rc-queue-anim'
import auth from 'common/auth'
import req from 'common/request'

const AUTH_URL = config.HOST + config.URI_API_FRAMEWORK + '/account';
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
        if (false) {
            this.setState({
                accountInfo: {names: acInfo.names, role: acInfo.role},
                menu: acInfo.menu,
                loading: false
            });
        } else {
            req({
                url: AUTH_URL,
                method: 'get',
                type: 'json'
            }).then(resp => {
                this.setState({
                    accountInfo: {names: resp.names, newMsg: resp.unread, role: resp.lo},
                    menu: resp.menu,
                    loading: false
                });
            }).catch(e=>{
                this.setState({loading:false});
                auth.logout();
                if(e.status == 401){
                    //账户信息api非法访问时跳转到登录页面，利用context方式做路由跳转
                    this.context.router.push('/signin')
                }
            })
        }
    }

    render() {
        const loadScr = <div className="app-loading-text">
            <p><Icon type="loading"/></p>
            <p style={{fontSize: '16px'}}>页面加载中...</p>
        </div>;
        // let spinClass = 'app-loading' + (this.state.loading ? ' enabled' : '');
        //let contentClass = 'content' + (this.state.loading ? ' blur' : '');
        const {accountInfo,loading,menu} = this.state;
        return <div className="app-main">
            {/*<div className={spinClass}>*/}
                {/*<div className="spin-bg"></div>*/}
                {/*<Spin tip={loadScr}/>*/}
            {/*</div>*/}
            <div>
                <AppHeader data={accountInfo}/>
                <Spin spinning={loading}>
                <AppSideNav data={menu}/>
                <div className="app-breadcrumb"><Breadcrumb  {...this.props} /></div>

                <QueueAnim type={['bottom', 'top']} duration={450} className="app-content">
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </QueueAnim>
                <AppFooter/>
                </Spin>
            </div>
        </div>
    }
}

App.childContextTypes = {
    //利用context把role信息传给home组件，令home组件可以根据不同role显示不同内容
    accountInfo: React.PropTypes.object,

};
App.contextTypes ={
    //用于本组件内的路由跳转
    router: React.PropTypes.object
};


module.exports = App;