import '../common/lib';
import React from 'react';
import ReactDOM from 'react-dom';
import dataInit from '../model';
import App from '../component/App';
import {Router,Route, browserHistory} from 'react-router'

const Routers = React.createClass({
    render(){
        return <Router history={browserHistory}>
            <Route path="/" component={App dataSource={dataInit}}>
                <Route path="/GN/" component={GN}/>
            </Route>
        </Router>
    }
})

ReactDOM.render(<Routers/>, document.getElementById('app'));



