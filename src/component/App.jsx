import './app.css'
import React from 'react';
import AppHeader from './AppHeader';
import AppSideNav from './AppSideNav';
import AppFooter from './AppFooter';
import {QueueAnim, Breadcrumb,Alert,Modal} from 'antd'
import req from 'reqwest'
import config from 'common/configuration'
import store from 'store2'



const url  = config.HOST + config.URI_API_FRAMEWORK + '/asidemenu';
const API_URL = config.URI_API_FRAMEWORK + '/account';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            asideMenu : []
        };
    }

/*    componentDidMount(){
        req({
            url:url + '?l=A', //获取中心端模块菜单
            type:'json',
            method:'get'
        }).then(resp=>{
            this.setState({
                asideMenu:resp
            })
        }).fail(err=>{
            Modal.error({
                title: '数据获取错误',
                content: '无法获取所需数据，请检查应用服务工作情况'
            });
        })
    }*/

    componentDidMount(){
        let userId = store.get("userId");
        req({
            url:API_URL +'/'+ userId,
            type:'json',
            method:'get'
        }).then(resp=>{
            console.log(resp)
            this.setState({
                asideMenu:resp.menu
            })
        }).fail(err=>{
            Modal.error({
                title: '数据获取错误',
                content: '无法获取所需数据，请稍后再尝试'
            });
        })
    }

    render() {
        return <div className="app-main">
            <AppHeader/>
            <AppSideNav data={this.state.asideMenu}/>
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