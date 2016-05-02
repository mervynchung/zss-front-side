import '../common/lib';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route, browserHistory,hashHistory,IndexRoute} from 'react-router'
import App from '../component/App';
import home from '../module/home'

/*路由配置*/
const routes = {
    path: '/',
    component: App,
    indexRoute: {component: home},
    ignoreScrollBehavior: true,
    breadcrumbName: '首页',
    childRoutes: [
        /* 模块预加载方式 */
        //{ path: '/gn1(/)', component: gn1 },

        /* 模块懒加载方式 */
        //机构管理
/*        require('../module/jggl/swscx'),

        //人员管理
       require('../module/rygl/rycx/zyswscx'),

        //系统功能设置
        require('../module/xtgnsz/mkgl'),

        //业务管理
        require('../module/ywgl/ywbbgl'),
        require('../module/ywgl/ywzlgl/sfjeyjgl'),
        require('../module/ywgl/ywzlgl/ndbtyjgl'),
        require('../module/ywgl/ywzlgl/ywwtyjgl'),
        require('../module/ywgl/ywzlgl/cxbgyjgl'),

        //会员会费管理
        require('../module/hyhfgl/hfjlqk'),
        require('../module/hyhfgl/grhyhfgl'),
        require('../module/hyhfgl/fzyhyhfgl'),

        //财务报表
        require('../module/cwbb/lrfpb'),
        require('../module/cwbb/zcmxb'),*/
        require('../module/cwbb/lrb'),
        require('../module/cwbb/zcfzb')
    ]
};

ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById('app'));



