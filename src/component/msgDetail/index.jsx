import React from 'react'
import {Button, Icon, Spin, Modal} from 'antd'
import req from 'common/request'
import config from 'common/configuration'
import {formatDate} from 'common/utils'
import './style.css'
/**
 * 短信内容显示组件
 * @props.id String 消息id
 * @props.visible  boolean 组件显示状态控制
 * @props.onClose function(){} 点击关闭时的回调函数
 * @props.setRead String 消息记录表id，消息打开时将该id状态设为已读
 */
const detail = React.createClass({
    getDefaultProps(){
        return {
            url: config.HOST + config.URI_API_FRAMEWORK + '/messages'
        }
    },
    getInitialState(){
        return {
            title: '短消息',
            content: '',
            create_time: '',
            loading: true,
            loadFail:''
        }
    },
    //退回用户管理界面
    back(){
        this.setState({
            title: '短消息',
            content: '',
            create_time: '',
            loading: true,
            loadFail:''
        });
        this.props.onClose();
    },
    componentWillReceiveProps(nextProps){
        if (!!nextProps && nextProps.visible == true) {
            const {url, id,setRead}  = nextProps;
            req({
                method: 'get',
                url: url + `/${id}`,
                data:{setRead:setRead}
            }).then(resp => {
                this.setState({
                    title: resp.title,
                    content: resp.content,
                    file: resp.file,
                    fjName: resp.fjName,
                    create_time: resp.create_time,
                    loading: false,
                    loadFail:''
                });
            }).catch(e => {
                this.setState({loading: false,loadFail:'数据读取失败'})
            })
        }
    },

    render(){

        const {visible} = this.props;
        let {title, content, create_time, loading,loadFail,file,fjName} = this.state;
        return <Modal title={title}
                      className="msg-detail"
                      visible={visible}
                      width="720"
                      onCancel={this.back}
                      footer={false}>
            <Spin spinning={loading}>
                <div className="ct">
                    <div className="c1">
                        <p className="c1-2">
                            发布时间: {create_time}
                        </p>
                    </div>
                    {!!loadFail && <div className="load-fail">{loadFail}</div>}
                    <div className="c2" dangerouslySetInnerHTML={{__html: content}}/>
                    {!!file&&<a href={file} target="_blank" ><Icon type="paper-clip" />&nbsp;{fjName}</a>}
                </div>
            </Spin>
        </Modal>
    }
});

module.exports = detail;