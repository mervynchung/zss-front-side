const asideMenuInit = {
  data: [{
    id: '1',
    name: 'value1',
    href: '#value1'
  }, {
    id: '2',
    name: 'value2',
    href: '#value2'
  }, {
    id: '3',
    name: 'value3',
    children: [{
      id: '4',
      name: 'value4',
      children: [{
        id: '5',
        name: 'value5',
        href: '#value5'
      }]
    }]
  }]
};

module.exports = asideMenuInit;