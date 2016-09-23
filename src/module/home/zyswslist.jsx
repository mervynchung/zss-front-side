import React from 'react'
import {Table} from 'antd'

const c = React.createClass({
    getColWidth(model){
        let w = 0;
        model.columns.map(item=> {
            w = item.width ? w + item.width : w + 100;
        });
        return w;
    },
    render(){
        const {model,data} = this.props;
        return <Table columns={model.columns}
                      dataSource={data}
                      pagination={this.state.pagination}
                      onChange={this.handleChange}
                      rowKey={record => record.id}
                      scroll={{x: this.getColWidth(model)}}/>
    }

});

module.exports = c;