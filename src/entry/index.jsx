import '../common/lib';
import React from 'react';
import ReactDOM from 'react-dom';
import dataInit from '../model';
import App from '../component/App';
import {Router,Route, browserHistory,hashHistory,IndexRoute} from 'react-router'
import GN from '../module/GN'

const Routers = React.createClass({
    render(){
        return <Router history={hashHistory}>
            <Route path="/" dataSource={dataInit} component={App}>
                <Route path="/gn/" component={GN}/>
            </Route>
        </Router>
    }
})

ReactDOM.render(<Routers/>, document.getElementById('app'));



