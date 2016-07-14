import './style.css'
import React from 'react'
import KhxxList from './list'
import QueueAnim from 'rc-queue-anim'


//客户信息
const khxxgl = React.createClass({
    render(){
        return <div className="khxxgl">
            <div className="wrap">
                <QueueAnim  duration={300}>
                    {this.props.children || <KhxxList />}
                </QueueAnim>
            </div>
        </div>
    }
});

module.exports = khxxgl;