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
            isSaved:false,
            entity:{}
        }
    },
    handleEditSave(boolean){
        this.setState({isSaved:true})
    },
    handleEdit(record){
        this.setState({entity:record})
    },
    handleDel(record){
      console.log('gldel',record)
    },

    render(){
        return <div className="khxxgl">
            <div className="wrap">
                <KhxxNew onSaved={this.handleEditSave} data={this.state.entity} />
                <KhxxList onEdit={this.handleEdit} onDel={this.handleDel}/>
            </div>
        </div>
    }
});

module.exports = khxxgl;