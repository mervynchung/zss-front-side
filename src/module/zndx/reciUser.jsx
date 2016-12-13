import React from 'react'
import {Modal,Tabs} from 'antd'
const TabPane = Tabs.TabPane;
const c = React.createClass({
    render(){
        return <Modal>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="事务所" key="1">

                </TabPane>
                <TabPane tab="群组" key="2">选项卡二内容</TabPane>
            </Tabs>
        </Modal>
    }
});

module.exports = c;