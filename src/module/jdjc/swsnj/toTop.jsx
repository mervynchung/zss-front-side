import React from 'react';
import {Timeline, Affix} from 'antd';
import ReactDom from 'react-dom';

ReactDOM.render(
  <Affix>
    <Button type="primary">固定在顶部</Button>
  </Affix>
, document.getElementById('react-content'));