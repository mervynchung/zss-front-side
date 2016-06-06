import React from 'react'
import {Tree} from 'antd'
const TreeNode = Tree.TreeNode;

const comp = React.createClass({
    getDefaultProps(){
        return {
            data: [],
            checkedKeys:[],
            selectedKeys:[]
        }
    },
    deflatten(data){
        var root = [], objMap = {};
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                var node = data[i];
                node.key = node.id;
                objMap[node.id] = node;
                if (node.pid !== 0) {
                    var parent = objMap[node.pid];
                    if (parent.children) {
                        parent.children.push(node)
                    } else {
                        parent.children = [];
                        parent.children.push(node)
                    }
                } else {
                    root.push(node);
                }
            }
        }
        return root;
    },
    genTree(gData){
        return gData.map((item) => {
            if (item.children) {
                return (
                    <TreeNode key={item.key} title={item.name}>
                        {this.genTree(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} title={item.name}/>;
        })
    },

    render(){
        let gData = this.deflatten(this.props.data);
        console.log(gData)
        return <div>
            <Tree checkable defaultExpandAll
                  onCheck={this.props.onCheck} checkedKeys={this.props.checkedKeys}
                  onSelect={this.props.onSelect} selectedKeys={this.props.selectedKeys}>
                {this.genTree(gData)}
            </Tree>
        </div>
    }
});

module.exports = comp;