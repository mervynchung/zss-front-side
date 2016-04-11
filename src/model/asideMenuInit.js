const asideMenuInit = {
  data: [{
    id: '1',
    name: '机构管理',
    href: '/gn1'
  }, {
    id: '2',
    name: '人员管理',
    href: '/gn2'
  }, {
    id: '6',
    name: '模块设置',
    href: '/xtgl/mksz'
  },{
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