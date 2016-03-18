/**
 * Created by ming on 2016/3/9.
 */
    import '../common/lib.js'
const ReactRouter = require('react-router');
let { Router, Route, Link, hashHistory } = ReactRouter;
import React from 'react';
import ReactDOM from 'react-dom'
import { Breadcrumb } from 'antd';

const Apps = React.createClass({
  render() {
    return (
        <ul className="app-list">
          <li>
            <Link to="/apps/1">应用1</Link>：<Link to="/apps/1/detail">详情</Link>
          </li>
          <li>
            <Link to="/apps/2">应用2</Link>：<Link to="/apps/2/detail">详情</Link>
          </li>
        </ul>
    );
  }
});

const Home = React.createClass({
  render() {
    return (
        <div>
          <div className="demo-nav">
            <Link to="/">首页</Link>
            <Link to="/apps">应用列表</Link>
          </div>
          {this.props.children || 'Home'}
          <div style={{
          marginBottom: 15,
          marginTop: 15,
          paddingBottom: 15,
          borderBottom: '1px dashed #ccc'
        }}>
            点击上面的导航切换页面，面包屑在下面：
          </div>
          <Breadcrumb {...this.props} />
        </div>
    );
  }
});

const Demo = React.createClass({
  render(){
    return <Router history={hashHistory}>
      <Route name="home" breadcrumbName="首页" path="/" component={Home}>
        <Route name="apps" breadcrumbName="应用列表" path="apps" component={Apps}>
          <Route name="app" breadcrumbName="应用:id" path=":id">
            <Route name="detail" breadcrumbName="详情" path="detail" />
          </Route>
        </Route>
      </Route>
    </Router>
  }
})



ReactDOM.render(<Demo />,document.getElementById('react-content'));