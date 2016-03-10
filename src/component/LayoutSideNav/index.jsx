/**
 * 主界面侧栏导航组件
 * props.dataSource 菜单数据
 * @export LayoutSideNav
 */

import React from 'react';
import {Menu} from 'antd';


const SubMenu = Menu.SubMenu;

//使用es6语法定义组件
class LayoutSideNav extends React.Component{

    //在构造器中初始化state，不使用getInitialState()
    constructor(props) {
        super(props);
        this.state = {
            current:'1',
            openKeys:[]
        }
        this.dataSource = this.props.dataSource;
    }

    //load:this.props.load , //'lazy','all'
    handleClick(e) {
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

    //产生无限分类菜单
    getMenu(data) {
        return data.map(function (item) {
            if (item.children) {
                return <SubMenu key={item.id} title={item.name} children={this.getMenu(item.children)}/>;
            } else {
                return <Menu.Item key={item.id}><a href={item.href}>{item.name}</a></Menu.Item>
            }
        },this);
    }
    render() {
        const asideMenu = this.getMenu(this.dataSource);
        return (
            <Menu onClick={this.handleClick.bind(this)}
                  openKeys={this.state.openKeys}
                  onOpen={this.onToggle.bind(this)}
                  onClose={this.onToggle.bind(this)}
                  selectedKeys={[this.state.current]}
                  mode="inline">
                {asideMenu}
            </Menu>
        );
    }
}

//兼容IE8的模块导出写法
module.exports = LayoutSideNav;