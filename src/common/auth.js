/**
 * Created by ming on 2016/5/19.
 */
import req from 'reqwest'
import config from './configuration'
const URL = config.URI_API_FRAMEWORK + '/auth';

module.exports = {
    async isloggedIn(){
        let loggedIn = false;
        const token = localStorage.getItem("token");
        try{
            await  req({
                url: URL,
                method: 'get',
                type: 'json',
                headers: {'x-auth-token': token}
            }).then(()=>{
                loggedIn = true
            })

        }catch (e){ }

        return loggedIn;
    }
};