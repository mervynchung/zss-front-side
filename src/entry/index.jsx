import '../common/lib';
import React from 'react';
import ReactDOM from 'react-dom';
import dataInit from '../model';
import {Router,Route, browserHistory,hashHistory,IndexRoute} from 'react-router'
import App from '../component/App';
import gn1 from '../module/gn1'

/*路由配置*/
const routes ={
    path: '/',
    component: App,
    dataSource:dataInit,
    childRoutes: [
        { path: '/gn1(/)', component: gn1 }, //模块预加载方式
        require('../module/gn2') //模块懒加载方式
    ]
}

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));



