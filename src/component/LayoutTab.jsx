import {
  Tabs
}
from 'antd';
import React from 'react';
import GN_1 from './GN_1';
if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}
const TabPane = Tabs.TabPane;

const LayoutTab = React.createClass({
  getInitialState() {
      this.newTabIndex = 0;
      const panes = [
        <TabPane tab="选项卡" key="1">工作台</TabPane>
      ];
      return {
        activeKey: panes[0].key,
        panes: panes,
      };
    },
    onChange(activeKey) {
      this.setState({
        activeKey
      });
    },
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    add() {
      const panes = this.state.panes;
      const activeKey = 'newTab' + this.newTabIndex++;
      panes.push(<TabPane tab="新建页签" key={activeKey}><GN_1 /></TabPane>);
      this.setState({
        panes, activeKey
      });
    },
    remove(targetKey) {
      let activeKey = this.state.activeKey;
      let lastIndex = this.state.panes.findIndex(pane => pane.key === targetKey) - 1;
      const panes = this.state.panes.filter(pane => pane.key !== targetKey);
      if (activeKey === targetKey) {
        activeKey = panes[lastIndex >= 0 ? lastIndex : 0].key;
      }
      this.setState({
        panes, activeKey
      });
    },
    render() {
      return (
        <Tabs onChange={this.onChange} activeKey={this.state.activeKey}
        type="editable-card" onEdit={this.onEdit}>
        {this.state.panes}
      </Tabs>
      );
    }
});

module.exports =  LayoutTab;