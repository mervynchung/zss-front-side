import React from 'react'
import {Table,Row,Col,Button,Icon,notification} from 'antd'
import CompPageHead from 'component/CompPageHead'
import Panel from 'component/compPanel'
import {columns,entityModel} from './model'
import req from 'reqwest';
import SearchForm from './searchForm'
import config from 'common/configuration'
import BaseTable from 'component/compBaseTable'
import {getObjBindModel} from 'common/utils.js'

const API_URL = config.HOST + config.URI_API_PROJECT + '/ywbb';
const ToolBar = Panel.ToolBar;
const ButtonGroup = Button.Group;

const list = React.createClass({
    render(){
        return  <Panel title="业务备案数据检索" toolbar={toolbar}>
            {this.state.searchToggle && <SearchForm
              onSubmit={this.handleSearchSubmit}/>}
            <div className="h-scroll-table">
                <Table columns={columns}
                       dataSource={this.state.data}
                       pagination={this.state.pagination}
                       loading={this.state.loading}
                       onChange={this.handleChange}
                       onRowClick={this.handleRowClick}/>
            </div>
        </Panel>
    }
})