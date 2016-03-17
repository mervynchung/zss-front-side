/**
 * Created by ming on 2016/3/9.
 */
const ReactRouter = require('react-router');
let { Router, Route, Link, hashHistory } = ReactRouter;
import { QueueAnim, Menu } from 'antd';
import React from 'react'
import ReactDOM from 'react-dom'
import '../common/lib.js'
import './style.css'


const App = React.createClass({
  render() {
    const key = this.props.location.pathname;
    const keys = key.replace('/', '') ? [key.replace('/', '')] : ['home'];
    return (
      <div>
        <Menu style={{ marginBottom: 10 }} mode="horizontal" selectedKeys={keys}>
          <Menu.Item key="home">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="page1">
            <Link to="/page1">Page 1</Link>
          </Menu.Item>
          <Menu.Item key="page2">
            <Link to="/page2">Page 2</Link>
          </Menu.Item>
        </Menu>
        <QueueAnim type={['right', 'left']} duration={5000}  className="demo-router-wrap">
          {React.cloneElement(this.props.children || <Home />, { key })}
        </QueueAnim>
      </div>
    );
  }
});

const Home = React.createClass({
  render() {
    return (
      <div className="demo-router-child">
        <QueueAnim className="demo-content">
          <div className="demo-kp" key="a">
            <QueueAnim component="ul">
              <li key="0">0</li>
              <li key="1">1</li>
              <li key="2">2</li>
            </QueueAnim>
          </div>
          <div className="demo-kp" key="b">
            <QueueAnim component="ul">
              <li key="0">12</li>
              <li key="1">13</li>
              <li key="2">14</li>
            </QueueAnim>
          </div>
          <div className="demo-kp" key="c">
            <QueueAnim component="ul">
              <li key="0">15</li>
              <li key="1">16</li>
              <li key="2">17</li>
            </QueueAnim>
          </div>
        </QueueAnim>
      </div>
    );
  }
});

const Page1 = React.createClass({
  render() {
    return (
      <div className="demo-router-child">
        <QueueAnim className="demo-content">
          <div className="demo-kp" key="b">
            <QueueAnim component="ul">
              <li key="0">111</li>
              <li key="1">222</li>
              <li key="2">333</li>
            </QueueAnim>
          </div>
          <div className="demo-listBox">
            <QueueAnim className="demo-list" delay={200}>
              <div className="title" key="title3"></div>
              <QueueAnim component="ul" animConfig={{ opacity: [1, 0], translateY: [0, 30], scale: [1, 0.9] }} key="ul">
                <li key="0">444</li>
                <li key="1">555</li>
                <li key="2">666</li>
              </QueueAnim>
            </QueueAnim>
          </div>
        </QueueAnim>
      </div>
    );
  }
});

const Page2 = React.createClass({
  render() {
    return (
      <div className="demo-router-child">
        <div className="demo-content">
          <div className="demo-listBox">
            <QueueAnim className="demo-list">
              <div className="title" key="title3"></div>
              <QueueAnim component="ul" animConfig={{ opacity: [1, 0], translateY: [0, 30], scale: [1, 0.9] }} key="li">
                <li key="0"></li>
                <li key="1"></li>
                <li key="2"></li>
                <li key="3"></li>
                <li key="4"></li>
                <li key="5"></li>
              </QueueAnim>
            </QueueAnim>
          </div>
        </div>
      </div>
    );
  }
});

const Demo = React.createClass({
    render(){
        return <Router history={hashHistory}>
    <Route path="/" component={App} ignoreScrollBehavior>
      <Route path="page1" component={Page1} />
      <Route path="page2" component={Page2} />
    </Route>
  </Router>
  }
})


ReactDOM.render(<Demo />,document.getElementById('react-content'));