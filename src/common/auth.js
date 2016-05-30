/**
 * Created by ming on 2016/5/19.
 */
import req from 'reqwest'
import config from './configuration'
import store from 'store2'
import md5  from 'crypto-js/md5'


const AUTH_URL= config.HOST+config.URI_API_FRAMEWORK+'/account';
module.exports = {
    verifyAuth(){
        let token =  store.get("token") || store.session.get("token");
        const tokenhash =  store.get("tokenhash") || store.session.get("tokenhash");
        if (token && tokenhash){
            let last = token.substr(token.length-1);
            token = md5(last + token);
            return (token.toString() == tokenhash);
        }
        return false;
    },
    verifyPermission(path){
        if(path || path.indexOf(store.session.get('permission')) < 0){
            return false;
        }
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
    },
    setPermission(permission){
        store.session.set('permission',permission);
    },
    setJgid(jid){
        store.session.set('jid',jid)
    },
    isClient(){
        return !!store.session.get('jid')
    }


};