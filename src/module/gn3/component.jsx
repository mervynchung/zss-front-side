import {Button,message} from 'antd'
import React from 'react'
import req from 'reqwest'

const gn3 = React.createClass({
    getInitialState() {
        return {
            res: ''
        };
    },
    handleClick(){
        req({
            url:'/api/fw/asidemenu',
            type:'json',
            method:'get'
        })
        .then((resp) => {
            this.setState({res:resp[0].name});
        })
        .fail((err,msg)=>{
             message.error('api错误')
        });
    },
    render(){
        return <div className="wrap">
            <div>{this.state.res}</div>
            <Button onClick={this.handleClick}>点击加载</Button>
        </div>
    }
})
module.exports = gn3;