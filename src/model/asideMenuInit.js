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
    id: '10',
    name: '会员会费管理',
    
    children:[{
      id:'11',
      name: '会费缴纳情况',
      href: '/hyhfgl/hfjlqk',
     

    },{ id: '12',
      name: '个人会员会费管理',
      href: '/hyhfgl/grhyhfgl'}]

  }, {
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