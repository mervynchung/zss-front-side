import React from 'react'
import LoginForm from './loginForm'
import req from 'reqwest'
import config from 'common/configuration'
import store from 'storejs'
import {withRouter} from 'react-router'

const API_URL = config.HOST + config.URI_API_FRAMEWORK + '/auth';

const signin = withRouter(React.createClass({
    getInitialState(){
        return {
            loading: false
        }
    },

    handleSubmit(value){
        this.setState({loading: true})
        req({
            url: API_URL,
            method: 'post',
            contentType: 'application/json',
            data: JSON.stringify(value)
        }).then(resp=> {
            for (let prop in resp) {
                store.set(prop, resp[prop]);
            }
            const { location } = this.props;

            if (location.state && location.state.nextPathname) {
                this.props.router.replace(location.state.nextPathname)
            } else {
                this.props.router.replace('/')
            }
        }).fail()

    },
    componentWillMount(){
        if(store.get("token")){
            this.props.router.replace('/')
        }
    },
    render(){
        return <div className="sign-in">
            <LoginForm onSubmit={this.handleSubmit} loading={this.state.loading}/>
        </div>
    }
}));


module.exports = signin;