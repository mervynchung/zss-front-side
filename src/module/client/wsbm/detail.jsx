import React from 'react'
import {Button, Icon, Row, Col, Spin, Modal} from 'antd'
import req from 'common/request'
import config from 'common/configuration'
import {formatDate} from 'common/utils'
import './pxnr.css'

const detail = React.createClass({
    getDefaultProps(){
        return {
            title: '课程详细信息',
            url: config.HOST + config.URI_API_PROJECT + '/pxnr'
        }
    },
    getInitialState(){
        return {
            bt: '',
            pxkssj: '',
            pxjssj: '',
            pxlxr: '',
            pxnr: '',
            zysx: '',
            loading: true,
        }
    },
    //退回用户管理界面
    back(){
        this.props.onBack();
    },
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if (!!nextProps && nextProps.visible == true) {
            const {url, id}  = nextProps;
            req({
                method: 'get',
                url: url + `/${id}`
            }).then(resp => {
                this.setState({
                    bt: resp.bt,
                    pxkssj: resp.pxkssj,
                    pxjssj: resp.pxjssj,
                    pxlxr: resp.pxlxr,
                    pxnr: resp.pxnr,
                    zysx: resp.zysx,
                    loading: false
                })
            }).catch(e => {
                this.setState({loading: false})
            })
        }
    },

    render(){

        const {title, visible, onClose} = this.props;
        let {bt, pxkssj, pxjssj, pxlxr, pxnr, zysx, loading} = this.state;
        return <Modal title={title}
                      className="pxnr-detail"
                      visible={visible}
                      width="720"
                      onCancel={onClose}
                      footer={false}>
            <Spin spinning={loading}>
                <div className="ct">
                    <div className="c1">
                        <h1 className="c1-1">{bt}</h1>
                        <p className="c1-2">
                            {pxkssj} 至
                            {pxjssj} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            联系人：{pxlxr}
                        </p>
                    </div>
                    <div className="c2" dangerouslySetInnerHTML={{__html: pxnr}}/>
                    <div className="c3" dangerouslySetInnerHTML={{__html: zysx}}/>
                </div>
            </Spin>
        </Modal>
    }
});

module.exports = detail;