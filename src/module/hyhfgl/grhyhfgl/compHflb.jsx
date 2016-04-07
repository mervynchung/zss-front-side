import React from 'react';
import {
	Button, message
}
from 'antd'
import req from 'reqwest'

import {
	Table, Icon
}
from 'antd'
let cc = "11111111111111111111111"
const hflb = React.createClass({
	getInitialState() {
			return {
				data: [],
				dataxx: [],
				pagination: {},
				urls:'',
				ret:{},
			};
		},

		handleTableChange(pagination, filters, sorter) {
			req({
				url: '/api/grhf?pagenum=' + pagination.current + '&pagesize=' + pagination.pageSize + '&sfield=' + sorter.field + '&sorder=' + sorter.order,
				method: 'get',
				type: 'json',
				success: (result) => {
					const paper = this.state.pagination;
					paper.pageSize = pagination.pageSize;
					this.setState({
						data: result.Data,
												
					});
					
				}
			});
		},
		fetch_grhyhfgl() {
			req({
				url: '/api/grhf?pagenum=1&pagesize=5',
				method: 'get',
				type: 'json',
				success: (result) => {
					function showTotal() {
						return "共" + pagination.total + "条";
					}
					const pagination = this.state.pagination;
					pagination.total = result.Page.total_number1;
					pagination.pageSize = 5;
					pagination.showSizeChanger = true;
					pagination.showTotal = showTotal;
					pagination.showQuickJumper = true;
					pagination.size = 'small';
					pagination.pageSizeOptions = ['5', '10', '20', '30', '40'];

					this.setState({
						data: result.Data,
					});
					
				}
			});
		},
            
		   fetch_hfxx(){
			
			
			req({
		             url: '/api/grhf/xx/'+this.state.urls,
		             method: 'get',
		             type: 'json',
		             success: (result)=>{
		             	console.log(result);
		              this.setState({
		             ret:result
		              });
		              // console.log(cc);
		              cc=this.state.ret;
		             }
			});	
		},
		onSelect(record){ 
                          console.log(record);
                                 this.state.urls=record.ID;
                                 this.fetch_hfxx();
                               

   }, 
                     


		componentDidMount() {
			this.fetch_grhyhfgl();
		},

		render() {
			return <div className="wrap">
           <Table columns={this.props.columns} 
           dataSource={this.state.data} 
           pagination={this.state.pagination}
            onRowClick={this.onSelect}
           onChange={this.handleTableChange} 
        bordered size="small" />

        </div>
		}
})
console.log(cc);
const ret = {
	hflb:hflb,

}

module.exports = hflb