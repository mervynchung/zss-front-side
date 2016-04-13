import React from 'react'
import {Table} from 'antd'
import CompPageHead from 'component/CompPageHead'
import Panel from 'component/compPanel'
import model from './model'
import req from 'reqwest';
import CompToolBar from 'component/compToolBar'
import SearchForm from 'component/compSearch'

const xygl = React.createClass({
    getInitialState(){
        return {
            data: []
        }
    },
    handleClick(){
        this.setState({
            visible: true
        })
    },
    handleCancel(){
        this.setState({
            visible: false
        })
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
                <CompToolBar
                    tip="检索所有协议记录，可按条件查询"
                    onClick={this.handleClick}/>
                <SearchForm
                    visible={this.state.visible}
                    title="协议搜索"
                    width="800"
                    onCancel={this.handleCancel}/>
                <Panel>
                    <div className="h-scroll-table table-border ">
                        <Table columns={model} dataSource={this.state.data}/>
                    </div>
                </Panel>
            </div>
        </div>
    }
});

module.exports = xygl;