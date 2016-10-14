import React from 'react'
import {Alert} from 'antd'

const c = React.createClass({
    render(){
        const {data} = this.props;

        let element = <Alert message="数据获取失败"
                             description={<div>
                                 <p>网络故障，无法读取基本信息数据，请返回。</p>
                                 <p>或请稍后再尝试。</p>
                             </div>}
                             type="error" />;
        if(!!data){
            element  = <Alert message={data.title}
                              description={<div>{data.description}</div>}
                              type="error" />;
        }

        return <div className="init-fail-scr">
            {element}
        </div>
    }
});

module.exports = c;