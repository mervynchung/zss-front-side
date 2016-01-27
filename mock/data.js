const obj = {
  data: [{
    id: '1',
    name: 'value1',
    url: '/url/value1'
  }, {
    id: '2',
    name: 'value2',
    url: '/url/value2'
  }, {
    id: '3',
    name: 'value3',
    children: [{
      id: '4',
      name: 'value4',
      children: [{
        id: '5',
        name: 'value5',
        url: '/url/value5'
      }]
    }]
  }]
};

export default obj;