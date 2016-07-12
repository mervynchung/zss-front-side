import './style.css'
import React from 'react'
import KhxxList from './list'


//客户信息
const khxxgl = React.createClass({
    render(){
          return <div className="khxxgl">
            <div className="wrap">
                {this.props.children || <KhxxList />}
            </div>
        </div>
    }
});

module.exports = khxxgl;