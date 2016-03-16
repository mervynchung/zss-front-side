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
        .then(function(resp){
            this.setState({res:resp[0].name});
        }.bind(this))
        .fail(function(err,msg){
             message.error('api错误')
        }.bind(this));
    },
    render(){
        return <div>
            <div>{this.state.res}</div>
            <Button onClick={this.handleClick}>点击加载</Button>
        </div>
    }
})
module.exports = gn3;