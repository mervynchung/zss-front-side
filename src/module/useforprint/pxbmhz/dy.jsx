import React from 'react'
import {Table, Button, Row, Col, Alert} from 'antd'
import store from 'store2'
import './dy.css'

var cssPagedMedia = (function () {
    var style = document.createElement('style');
    document.head.appendChild(style);
    return function (rule) {
        style.innerHTML = rule;
    };
}());

cssPagedMedia.size = function (size) {
    cssPagedMedia('@page {size:' + size + '}');
};

let dy = React.createClass({
    getDefaultProps(){
        const pxbmData = store.get("pxbmData");
        store.remove("pxbmData");
        return {
            pxbmData:pxbmData
        }
    },
    print(){
        window.print();
    },
    render(){
        cssPagedMedia.size('A4 portrait');

        const {entity, dataRy, dataBase} = this.props.pxbmData;
        const columns = [{
            title: '编号',
            dataIndex: 'bh',
            key: 'bh',
            width: 130
        }, {
            title: '姓名',
            dataIndex: 'xming',
            key: 'xming',
            width: 100
        }, {
            title: '性别',
            dataIndex: 'xb',
            key: 'xb',
            width: 100
        }, {
            title: '职务',
            key: 'zw',
            dataIndex: 'zw',
            width: 100
        }, {
            title: '住宿',
            key: 'fjlx',
            dataIndex: 'fjlx',
            render(t, r){
                return t == 1 ? '单人房' : '双人房'
            }
        }, {
            title: '用餐',
            key: 'jclx',
            dataIndex: 'jclx',
        }, {
            title: '备注',
            key: 'bz',
            dataIndex: 'bz'
        }];
        if (dataRy.length > 0) {
            dataRy.map(item => {
                let jclx = [!item.zaoc ? '_' : '早餐', !item.wuc ? '_' : '午餐', !item.wanc ? '_' : '晚餐'];
                jclx = jclx.join(' / ');
                item.jclx = jclx;
                return item
            })
        }
        const helpinfo = <div>
            <Row>
                请在浏览器的打印设置项中，把“页眉”，“页脚”设置为不显示。
                如出现打印尺寸不正常，请把打印纸张大小设置为“A4”，缩放设置为“缩放到纸张大小”
            </Row>
            <Row style={{marginTop:'8px'}}><Button type="primary" size="large" onClick={this.print}>打印</Button></Row>
        </div>;
        return <div className="client-wsbm-hz dy">
            <div className="noprint">
                <Alert message="打印帮助"
                       description={helpinfo}
                       type="info"
                />
            </div>
            <h2 className="title">{entity.bt}</h2>
            <h2>报名回执</h2>
            <div className="divide"/>
            <Row>
                <Col offset={1}><h3>详细信息</h3></Col>
            </Row>
            <Row>
                <Col offset={1}>培 训 时 间：{entity.pxkssj}至{entity.pxjssj}</Col>
            </Row>
            <Row>
                <Col offset={1}>培 训 地 点：{entity.pxdz}</Col>
            </Row>
            <Row>
                <Col offset={1}>培训地点电话：{entity.pxdddh}</Col>
            </Row>
            <Row>
                <Col offset={1}>培训联系人：{entity.pxlxr}</Col>
            </Row>
            <div className="divide"/>
            <Row>
                <Col offset={1}><h3>{dataBase.swsmc}</h3></Col>
            </Row>
            <Row>
                <Col span="22" offset={1}>
                    <Table dataSource={dataRy}
                           columns={columns}
                           pagination={false}
                           size="small"/>
                </Col>
            </Row>


            <div className="divide"/>
            <Row>
                <Col offset={1} span="24"><h3>注意事项</h3></Col>
                <Col offset={1} span="22">
                    <div dangerouslySetInnerHTML={{__html: dataBase.zysx}}></div>
                </Col>
            </Row>
        </div>
    }
});
module.exports = dy;