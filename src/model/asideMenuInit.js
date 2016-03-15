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
    id: '3',
    name: '系统设置',
    children: [{
      id: '4',
      name: '常用设置',
      children: [{
        id: '5',
        name: '用户密码管理',
        href: '/value5'
      }]
    }]
  }]
};

module.exports = asideMenuInit;