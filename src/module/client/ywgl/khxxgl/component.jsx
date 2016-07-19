import './style.css'
import React from 'react'
import KhxxList from './list'
import QueueAnim from 'rc-queue-anim'
import KhxxNew from './new.jsx'
import './style.css'



//客户信息
const khxxgl = React.createClass({
    getInitialState(){
        return {
            isSaved:false
        }
    },
    handleEditSave(boolean){
        this.setState({isSaved:true})
    },

    render(){
        return <div className="khxxgl">
            <div className="wrap">
                <KhxxNew onSaved={this.handleEditSave} />
                <KhxxList />
            </div>
        </div>
    }
});

module.exports = khxxgl;