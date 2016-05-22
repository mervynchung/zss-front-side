/**
 * Created by ming on 2016/5/19.
 */
import req from 'reqwest'
import config from './configuration'
const URL = config.URI_API_FRAMEWORK + '/auth';

module.exports = {
    isloggedIn(){
        let loggedIn = false;
        const token = localStorage.getItem("token");
        req({
            url: URL,
            method: 'get',
            type: 'json',
            headers: {'x-auth-token': token}
        }).then(()=> {
            loggedIn = true
        });
        return loggedIn;
    }
};