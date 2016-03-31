import React from 'react'
import {Button,Icon} from 'antd'
import './style.css'
const toolbar = React.createClass({
    render(){
        return <div className="toolbar">
            <Button>
                <Icon type="plus"/>
            </Button>
            <Button>
                <Icon type="minus" />
            </Button>
        </div>
    }
})

module.exports = toolbar;