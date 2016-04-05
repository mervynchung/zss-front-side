import React from 'react'
import {Button,Icon} from 'antd'
import './style.css'
const ButtonGroup = Button.Group;
const toolbar = React.createClass({
    render(){
        return <div className="toolbar">
            <ButtonGroup>
            <Button>
                添加
            </Button>
            <Button>
                删除
            </Button>
                </ButtonGroup>
        </div>
    }
})

module.exports = toolbar;