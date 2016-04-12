import React from 'react'
import {Table} from 'antd'
import CompPageHead from 'component/CompPageHead'
import Panel from 'component/compPanel'
import model from './model'
import req from 'reqwest';

const xygl = React.createClass({
    getInitialState(){
        return {
            data: []
        }
    },
    componentDidMount(){
        req({
            url: 'api/zs/ywxy',
            type: 'json',
            method: 'get'
        }).then(resp=> {
            this.setState({data: resp})
        })
    },
    render(){
        return <div className="xygl">
            <div className="wrap">
                <Panel title="协议管理">
                    <div className="h-scroll-table table-border ">
                        <Table columns={model} dataSource={this.state.data} size="middle" />
                    </div>
                </Panel>
            </div>
        </div>
    }
});

module.exports = xygl;