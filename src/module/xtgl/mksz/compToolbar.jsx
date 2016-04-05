import React from 'react'
import {Button,Icon} from 'antd'
import './style.css'
const ButtonGroup = Button.Group;
const toolbar = React.createClass({
  render(){
    return <div className="toolbar">
      <ButtonGroup>
        <Button>
          添加新节点
        </Button>
        <Button>
          为当前添加子节点
        </Button>
        <Button>
          删除当前节点
        </Button>
      </ButtonGroup>
    </div>
  }
})

module.exports = toolbar;