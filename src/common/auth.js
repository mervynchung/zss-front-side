/**
 * Created by ming on 2016/5/19.
 */
import req from 'reqwest'
import config from './configuration'
import store from 'store2'
import md5  from 'crypto-js/md5'

const salt = 'Z2R6c21pcw==';
module.exports = {
    verifyAuth(){
        let token =  store.get("token");
        const tokenhash = store.get("tokenhash");
        token = md5(md5(token)+salt);
        return (token.toString() == tokenhash);
    }
};