import React from 'react'
import {Steps, Spin, notification, Modal, Icon, Alert} from 'antd'
import Panel from 'component/compPanel'
import config from 'common/configuration.js'
import req from 'common/request'
import Stage0 from './stage0.jsx'
import Stage1 from './stage1.jsx'
import Stage from './stage.jsx'
import AddSuccess from './commitSuccessScr';
import LockedScr from './lockedScr'

const Step = Steps.Step;

const newYwbb = React.createClass({
    getDefaultProps(){
        return {
            ywbbUrl: config.HOST + config.URI_API_PROJECT + '/ywbb',
            miscUrl: config.HOST + config.URI_API_PROJECT + '/ywbbmisc/'
        }
    },
    getInitialState(){
        return {
            loading: true,
            addSuccess: false,
            successResp: {},
            stage: 0,
            dataXY: {},
            dataYW: {},
            dataJG: {},
            customer: {},
            zysws: [],
            locked: []
        }
    },
    resetStep(){
        this.setState({stage: 0, dataXY: {}, dataYW: {}, customer: {}, addSuccess: false, successResp: {}})
    },
    handleStageChange(value){
        this.setState({stage: value})
    },
    handleStage0Submit(param){
        if (!param.customer) {
            param.customer = this.state.customer
        }
        this.setState({stage: param.stage, dataXY: param.values, customer: param.customer})

    },
    handleStage1Submit(param){
        this.setState({dataYW: param.values})

    },
    //添加新报备信息
    addYwbb(param){
        const {ywbbUrl} = this.props;
        return req({
            url: ywbbUrl,
            method: 'post',
            data: param
        }).then(resp=> {
            this.setState({loading: false, addSuccess: true, successResp: resp});
        }).fail(e=> {
            let r = JSON.parse(e.responseText);
            this.setState({loading: false});
            if (e.status == 403) {
                Modal.error({
                    title: '业务信息提交失败',
                    content: r.text
                });
            } else {
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: '网络访问故障'
                });
            }
        })
    },

    //保存业务报备
    handleSave(param){

        let values = {
            dataXY: this.state.dataXY,
            dataYW: this.state.dataYW,
            dataJG: this.state.dataJG,
            customer: this.state.customer,
            type: 'save'
        };
        this.setState({loading: true});
        this.addYwbb(values)
    },
    //提交业务报备
    handleCommit(){
        let values = {
            dataXY: this.state.dataXY,
            dataYW: this.state.dataYW,
            dataJG: this.state.dataJG,
            customer: this.state.customer,
            type: 'commit'
        };
        this.setState({loading: true});
        this.addYwbb(values)
    },
    //获取添加报备的初始化信息：旗下执业人员/资质锁定/机构信息
    fetchYwbbMisc () {
        const {miscUrl} = this.props;
        return req({
            url: miscUrl,
            method: 'get'
        })
    },
    componentDidMount(){
        this.fetchYwbbMisc().then(resp=> {
            if (!!resp.locked && !!resp.locked.length) {
                this.setState({locked: resp.locked})
            }
            this.setState({dataJG: resp.jgxx, zysws: resp.zysws, loading: false})
        }).catch(e=> {
            let c = <div className="ywbb-new-loadfail"> 数据读取失败</div>;
            this.setState({loading: false, loaded: c})
        })
    },
    handleFieldChange(field){
        const {data} = this.state;
        for (let prop in field) {
            data[prop] = field[prop]
        }
        this.setState({data: data})
    },

    render(){
        let { data, zysws, addSuccess, successResp, locked} = this.state;
        let stageContent = {
            '0': this.state.loaded || <Stage0 data={dataXY}
                                              onSubmit={this.handleStage0Submit}
                                              onSave={this.handleSave}/>,
            '1': addSuccess ? <AddSuccess data={successResp} type="add"/> :
                <Stage1 onStageChange={this.handleStageChange}
                         data={dataYW} zysws={zysws}
                         ywlx={dataXY.YWLX_DM}
                         onSave={this.handleSave}
                         onCommit={this.handleCommit}
                         onSubmit={this.handleStage1Submit}/>
        };

        return <Panel className="new-ywbb">
            {!!locked.length ? <LockedScr data={locked}/>:
            <div>
                <div style={{textAlign: 'right'}}><a onClick={this.resetStep}> <Icon type="retweet"/> 重置</a></div>

                <Spin spinning={this.state.loading}>
                    addSuccess && <AddSuccess data={successResp} type="add"/>
                    !addSuccess && <Stage data={data}
                                          zysws={zysws}
                                          onSave = {this.handleSave}
                                          onCommit = {this.handleCommit}
                                          onFieldChange={this.handleFieldChange}/>
                </Spin>
            </div>}

        </Panel>

    }
});

module.exports = newYwbb;