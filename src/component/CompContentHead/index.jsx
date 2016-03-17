import {Breadcrumb} from 'antd'
import React from 'react'
import {Router, Route, Link, hashHistory} from 'react-router'
import './style.css'

const CompContentHead = React.createClass({
    render(){
        return <div className="content-head ">
            <Breadcrumb className="app-breadcrumb" {...this.props} />
            <div className="page-heading"><h1>heading</h1></div>
        </div>
    }
})

module.exports = CompContentHead;