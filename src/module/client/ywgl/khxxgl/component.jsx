import './style.css'
import React from 'react'
import KhxxList from './list'
import QueueAnim from 'rc-queue-anim'
import KhxxNew from './new.jsx'
import KhxxEdit from './new.jsx'


//客户信息
const khxxgl = React.createClass({
    getInitialState(){
        return {
            page: 'list'
        }
    },
    handlePageJump(url = 'list'){
        this.setState({page: url})
    },
    render(){
        let content = <KhxxList  onPageJump={this.handlePageJump}/>;
        if (this.state.page == 'new') {
            content = <QueueAnim type={['right', 'left']} duration={500}>
                <KhxxNew onPageJump={this.handlePageJump}/>
            </QueueAnim>;
        } else if (this.state.page == 'edit') {
            content = <QueueAnim duration={500}>
                <KhxxEdit onPageJump={this.handlePageJump}/>
            </QueueAnim>;
        }
        return <div className="khxxgl">
            <div className="wrap">
                {content}
            </div>
        </div>
    }
});

module.exports = khxxgl;