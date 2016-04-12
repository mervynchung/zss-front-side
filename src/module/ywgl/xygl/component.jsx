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
            <CompPageHead heading="协议管理"/>
            <div className="wrap">
                <Panel>
                    <div className="h-scroll-table table-border">
                        <Table columns={model} dataSource={this.state.data}/>
                    </div>
                </Panel>
            </div>
        </div>
    }
});

module.exports = xygl;