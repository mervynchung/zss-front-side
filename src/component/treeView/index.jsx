import React from 'react'
import {Tree} from 'antd'

const comp = React.createClass({
    getDefaultProps(){
        return {
            data:[]
        }
    },
    handleSelect(){
        this.props.onSelect(selectedKeys)
    },
    handleCheck(){
        this.props.onCheck(checkedKeys)
    },
    getTreeData( data, parent, tree){

    },
    getTree(treeData){

    },

    render(){
        return <div>

        </div>
    }
});

module.exports = comp;