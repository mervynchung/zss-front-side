import './style.css'
import React from 'react'
import KhxxList from './list'
import QueueAnim from 'rc-queue-anim'
import KhxxNew from './new.jsx'
import './style.css'



//客户信息
const khxxgl = React.createClass({
    render(){

        return <div className="khxxgl">
            <div className="wrap">
                <KhxxNew />
                <KhxxList />
            </div>
        </div>
    }
});

module.exports = khxxgl;