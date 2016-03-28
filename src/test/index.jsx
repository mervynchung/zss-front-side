/**
 * Created by ming on 2016/3/9.
 */
import '../common/lib.js'
import React from 'react'
import ReactDOM from 'react-dom'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

const Demo = React.createClass({
render(){
    return  <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
        <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
        <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
    </Tabs>
}
})



ReactDOM.render(<Demo />,document.getElementById('react-content'));