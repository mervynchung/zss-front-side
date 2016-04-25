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
    indexRoute:{component:home},
    ignoreScrollBehavior:true,
    breadcrumbName:'首页',
    childRoutes: [
        //模块预加载方式
        //{ path: '/gn1(/)', component: gn1 },
        //模块懒加载方式
        require('../module/gn1'),
        require('../module/gn2'),
        require('../module/gn3'),
        require('../module/hyhfgl/hfjlqk'),
        require('../module/hyhfgl/grhyhfgl'),
        require('../module/hyhfgl/fzyhyhfgl'),
        require('../module/cwbb/lrfpb'),
        require('../module/jggl/swscx'),
        require('../module/xtgnsz/zxdmkgl'),
        require('../module/ywgl/xygl')
    ]
}

ReactDOM.render(<Router history={hashHistory} routes={routes} />, document.getElementById('app'));



