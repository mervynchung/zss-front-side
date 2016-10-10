/**
 * Created by ming on 2016/9/23.
 */
'use strict';

import auth from './auth'
import request  from 'reqwest'

const func = function (param = {method: 'get',type:'json'}) {
    let {url, method, data} = param;
    if(method != 'get') {
        data = JSON.stringify(data);
    }
    return request({
        url:url,
        contentType:'application/json',
        method:method,
        type:'json',
        data:data,
        headers: {'x-auth-token': auth.getToken()}
    })
};
module.exports = func;