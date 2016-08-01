import React from 'react'
import QueueAnim from 'rc-queue-anim'
import KhxxList from './list'

//测试信息
module.exports = React.createClass({
     render(){
         return <div className="test">
            <div className="wrap">
               <KhxxList />
            </div>
         </div>
     }
});
