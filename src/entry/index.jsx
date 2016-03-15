import '../common/lib';
import React from 'react';
import ReactDOM from 'react-dom';
import dataInit from '../model';
import App from '../component/App';
import {Router,Route, browserHistory,hashHistory,IndexRoute} from 'react-router'
import gn1 from '../module/gn1'

/*路由配置*/
const routes ={
    path: '/',
    component: App,
    dataSource:dataInit,
    childRoutes: [
        { path: '/gn1(1)', component: gn1 },
        require('../module/gn2')
    ]
}

ReactDOM.render(<Router history={hashHistory} routes={routes} />, document.getElementById('app'));



