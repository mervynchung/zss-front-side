import '../common/lib';
import React from 'react';
import ReactDOM from 'react-dom';
import SideNav from '../component/LayoutSideNav/index';
import Header from '../component/Header';
import LayoutTab from '../component/LayoutTab';
import obj from '../../mock/data';
import {
	Menu, Dropdown, Icon
}
from 'antd';
ReactDOM.render(<SideNav data={obj.data} />, document.getElementById('layout-aside'));
ReactDOM.render(<Header/>, document.getElementById('layout-header'));
ReactDOM.render(<LayoutTab/>,document.getElementById('layout-content'));


