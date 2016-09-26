import React from 'react'
import {Row, Col} from 'antd'
import auth from 'common/auth'
import Client from './client'
import Center from './center'

const c = React.createClass({
    render(){
        let out;
        /*let lo = window.authResp.lo;
        if (lo == 3) {
            out = <Client/>
        } else {
            out = <Center/>
        }*/
        if(auth.isClient()){
         out = <Client/>
         }else{
         out = <Center/>
         }
        return <div>{out}</div>;
    }
});

module.exports = c;