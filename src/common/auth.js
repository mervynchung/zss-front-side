/**
 * Created by ming on 2016/5/19.
 */
import req from 'reqwest'
import config from './configuration'
import store from 'storejs'
const URL = config.URI_API_FRAMEWORK + '/auth';

module.exports = {
    verifyAuth(){
        return  store.get("token");
    }
};