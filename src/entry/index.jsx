import React from 'react';
import ReactDOM from 'react-dom';
import '../common/lib';
import dataInit from '../model';
import App from '../component/App';

ReactDOM.render(<App dataSource={dataInit}/>, document.getElementById('app'));



