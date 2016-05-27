/**
 * Created by ming on 2016/5/19.
 */
import req from 'reqwest'
import config from './configuration'
import store from 'store2'
import md5  from 'crypto-js/md5'

const salt = 'Z2R6c21pcw==';
const AUTH_URL= config.HOST+config.URI_API_FRAMEWORK+'/account';
module.exports = {
    verifyAuth(){
        let token =  store.get("token") || store.session.get("token");
        const tokenhash =  store.get("tokenhash") || store.session.get("tokenhash");
        token = md5(md5(token) + salt);
        return (token.toString() == tokenhash);
    },
    verifyPermission(path){

    },
    getToken(){
        return store.get("token") || store.session.get("token");
    },
    setToken(token,tokenhash, isRemember = false){
        if (isRemember) {
            store.set("token", token);
            store.set("tokenhash",tokenhash);
        }
        store.session.set("token", token);
        store.session.set("tokenhash", tokenhash);
    },
    logout(){
        store.clear();
        store.session.clear();
    },
    getAccount(){
        return req({
            url: AUTH_URL,
            method: 'get',
            type: 'json',
            headers: {'x-auth-token': this.getToken()}
        })
    }

};