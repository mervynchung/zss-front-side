const asideMenuInit = {
  data: [{
    id: '1',
    name: '机构管理',
    href: '/gn1'
  }, {
    id: '2',
    name: '人员管理',
    children: [{
      id: '8',
      name: '人员查询',
      children: [{
      id: '9',
      name: '执业税务师查询',
      href:'/rygl/rycx/zyswscx'
    }]
    }]
  }, {
    id: '6',
    name: '模块设置',
    href: '/xtgl/mksz'
  },{
 id: '7',
    name: '机构查询',
    href: '/jggl/jgcx'
  },  {
    id: '3',
    name: '业务管理',
    children: [{
      id: '4',
      name: '协议管理',
      href:'/ywgl/xygl'
    }]
  }]
};

module.exports = asideMenuInit;