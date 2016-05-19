/**
 * Created by ming on 2016/5/19.
 */
module.exports = {
    loggedIn(){
        const token = localStorage.getItem("token");
        return token;
    }
}