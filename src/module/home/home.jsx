import React from 'react'
import {Row,Col} from 'antd'
import auth from 'common/auth'

const c  =  React.createClass({
    render(){
        let out ;
        if(auth.isClient()){
            out = '客户端主页'
        }else{
            out = '中心端主页'
        }
        return <div>{out}</div>;
    }
});

module.exports = c;