import React from 'react'
import { Icon,Table,Button,Row,Col} from 'antd'
import store from 'store2'

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
    onClick(){
        window.print();
    },
    render(){

        cssPagedMedia.size('A4 portrait');
        let data = this.props.location.query.data;
        if (typeof  data != 'object') {
            data = JSON.parse(data);
        }
        const nowy = new Date();

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
        },{
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
                return t==1?'单人房':'双人房'
            }
        }, {
            title: '用餐',
            key: 'jclx',
            dataIndex: 'jclx',
        },{
            title:'备注',
            key:'bz',
            dataIndex:'bz'
        }];
        if (dataRy.length > 0) {
            dataRy.map(item=> {
                let jclx = [!item.zaoc ? '_' : '早餐', !item.wuc ? '_' : '午餐', !item.wanc ? '_' : '晚餐'];
                jclx = jclx.join(' / ');
                item.jclx = jclx;
                return item
            })
        }
        return <div>
            <h2>{entity.bt}</h2>
            <h2>报名回执</h2>
            <div className="divide" />
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
            <div className="divide" />
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


            <div className="divide" />
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