
import React from 'react';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

const asyncTree = [{
  name: 'pNode 01',
  key: '0-0'
}];

const generateTreeNodes = () => {
  return [{
    name: '伯约',
    key: '0-0-0'
  }];
};

const TreeDemo = React.createClass({
  timeout(duration = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve.bind(this), duration);
    });
  },
  getInitialState() {
    return {
      treeData: []
    };
  },
  componentDidMount() {
    this.timeout(100).then(() => {
      this.setState({
        treeData: asyncTree
      });
      return asyncTree;
    });
  },
  handleSelect(info) {
    console.log('selected', info);
  },
  handleDataLoaded(treeNode) {
    return this.timeout(100).then(() => {
      const child = generateTreeNodes();
      const treeData = [...this.state.treeData];
      treeData.forEach((item) => {
        if (item.key === treeNode.props.eventKey) {
          item.children = child;
        }
      });
      this.setState({treeData});
      return child;
    });
  },
  render() {
    const loop = (data) => {
      return data.map((item) => {
        if (item.children) {
          return <TreeNode title={item.name} key={item.key}>{loop(item.children)}</TreeNode>;
        } else {
          return <TreeNode title={item.name} key={item.key} />;
        }
      });
    };
    const parseTreeNode = data => loop(data);
    let treeNodes = parseTreeNode(this.state.treeData);
    return (
      <Tree onSelect={this.handleSelect} onDataLoaded={this.handleDataLoaded} showLine={false}>
        {treeNodes}
      </Tree>
    );
  }
});

export default TreeDemo;