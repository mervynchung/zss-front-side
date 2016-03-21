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
    href: '/mksz'
  },{
 id: '7',
    name: '机构查询',
    href: '/jggl/jgcx'
  },  {
    id: '3',
    name: '系统设置',
    children: [{
      id: '4',
      name: '常用设置',
      children: [{
        id: '5',
        name: '用户密码管理',
        href: '/gn3'
      }]
    }]
  }]
};

module.exports = asideMenuInit;