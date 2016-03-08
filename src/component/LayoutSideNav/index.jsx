/**
 * 主界面侧栏导航组件
 * @datasource  api/fw/asidemenu
 * @export LayoutSideNav
 */

import React from 'react';
import { Menu, Icon} from 'antd';
import "./index.css";

function generateMenu(o) {
    return o.map(function (item) {
        if (item.children) {
            return <SubMenu key={item.id} title={item.name}>{generateMenu(item.children)}</SubMenu>
            generateMenu(item.children);
        } else {
            return <Menu.Item key={item.id}><a href={item.url}>{item.name}</a></Menu.Item>
        }
    });
}
const SubMenu = Menu.SubMenu;
class LayoutSideNav extends React.Component{
    let menuHtml = generateMenu(this.props.data);
    getInitialState() {
        return {
            current: '1',
            openKeys: []
        };
    }
    //load:this.props.load , //'lazy','all'
    handleClick(e) {
        console.log(e.item);
        this.setState({
            current: e.key,
            openKeys: e.keyPath.slice(1)
        });
    }
    onToggle(info) {
        this.setState({
            openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
        });
    }
    render() {
        return (
            <Menu onClick={this.handleClick}
                  openKeys={this.state.openKeys}
                  onOpen={this.onToggle}
                  onClose={this.onToggle}
                  selectedKeys={[this.state.current]}
                  mode="inline">
                {menuHtml}
            </Menu>
        );
    }
}

module.exports = LayoutSideNav;