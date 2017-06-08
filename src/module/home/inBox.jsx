import React from 'react'
const c = React.createClass({
    render(){
        const {data,onRead} = this.props;
        let content = <div className="empty"><span>暂未有新消息</span></div>;

        let li = data.map(item=>{
            let liClass = 'msg';
            if(item.zt==2){
                liClass += ' read';
            }
            return(
            <li key={item.id} className={liClass} >
                <div><a onClick={()=>{onRead(item)}}>{item.title}</a></div>
                <div>
                    <span className="type">{item.type}</span>&nbsp;&nbsp;•&nbsp;&nbsp;
                    <span className="time">{item.create_time}</span>
                </div>
            </li>
            )
        });
        if(li.length>0){
            content = <ul>
                {li}
            </ul>
        }
        return <div className="inbox" >
            {content}
        </div>
    }
});

module.exports = c;