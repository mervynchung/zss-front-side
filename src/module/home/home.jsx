import React from 'react'
import {Row,Col} from 'antd'
import auth from 'common/auth'
import Client from './client'
import Center from './center'

const c  =  React.createClass({
    render(){
        let out ;
        if(auth.isClient()){
            out = <Client/>
        }else{
            out = <Center/>
        }
        return <div>{out}</div>;
    }
});

module.exports = c;