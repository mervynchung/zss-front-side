import React from 'react'
import {Table,Modal,Button,Spin,notification,Icon,Tab} from 'antd'
import Panel from 'component/compPanel'
import model from './model.jsx'
import {jsonCopy} from 'common/utils.js'

const PanelBar = Panel.ToolBar;
const ButtonGroup = Button.Group;

const list = React.createClass({
    getInitialState(){
        return {
            searchToggle: false,
            helper: false
        }
    },
    handleHelper(){
        this.setState({helper: !this.state.helper})
    },
    handleRefresh(){
        this.props.onRefresh()
    },
    handleSearchtoggle(){
        this.setState({searchToggle: !this.state.searchToggle})
    },
    handlePageChange(pager){
        this.props.onPageChange(pager)
    },

    render(){
        const {spinning,data,pagination} = this.props;
        const panelBar = <PanelBar>
            <Button onClick={this.handleSearchToggle}>
                <Icon type="search"/>查询
                { this.state.searchToggle ? <Icon className="toggle-tip" type="circle-o-up"/> :
                  <Icon className="toggle-tip" type="circle-o-down"/>}
            </Button>

            <ButtonGroup>
                <Button type="primary" onClick={this.handleHelper}><Icon type="question"/></Button>
                <Button type="primary" onClick={this.handleRefresh}><Icon type="reload"/></Button>
            </ButtonGroup>
        </PanelBar>;
        return <Spin spinning={false}>
            <Panel toolbar={panelBar}>
                <Table className="outer-border"
                       columns={model.columns}
                       dataSource={data}
                       pagination={pagination}
                       onChange={this.handlePageChange}
                       rowKey={record => record.ID}
                />
            </Panel>
        </Spin>
    }
});

module.exports = list;