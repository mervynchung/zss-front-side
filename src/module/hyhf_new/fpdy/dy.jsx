import React from 'react'
import './dy.css' 
import {Row,Col,Modal} from 'antd'
import req from 'reqwest'
import auth from 'common/auth'
import config from 'common/configuration'

const API_URL = config.HOST + config.URI_API_PROJECT + '/hyhf/fpdy/fpdylj';
let dy = React.createClass({
	onClick(jlid){
		window.print(); 
		req({
	                url: API_URL,
	                type: 'json',
	                method: 'put',
	                data: JSON.stringify(jlid),
	                contentType: 'application/json',
	                headers:{'x-auth-token':auth.getToken()}
	            }).fail(err=> {
	                Modal.error({
	                    title: '数据提交错误',
	                    content: (
	                        <div>
	                            <p>无法向服务器提交数据，需检查应用服务工作情况</p>
	                            <p>Status: {err.status}</p>
	                        </div>  )
	                });
	            })
	            Modal.info({
                      title: '打印信息',
                      content:(<div>
	                            <p>打印完成</p>
	                        </div>),
                      okText:"确定",
                      onOk(){
                      window.close();
                      },
                    });
	},
	render(){
		const sd=decodeURIComponent(this.props.location.search);//603
		var rs=JSON.parse(sd.substring(1,sd.length));
		const nowy = new Date(rs.ND);
		let tt="";
		let gr="";
		if (rs.YJTTHF) {
			tt=nowy.getFullYear()+"年团体会费"
		};
		if (rs.YJGRHF) {
			gr=nowy.getFullYear()+"年个人会费执业"
		};
		return <div >
		<div className="dy_background" >
		<table style={{'position':'absolute','top':'95px','left':'43'}}>
			<tbody>
				<tr>
					<td style={{'width':'105','height':'24'}}></td>
					<td style={{'width':'250','height':'24'}}>{rs.DWMC}</td>
					<td style={{'textAlign':'right','width':'250','height':'24'}}>{rs.JFRQ}</td>
				</tr>
			</tbody>
		</table>
		<table style={{'position':'absolute','top':'120px','left':'43'}}>
			
			<tbody>
				<tr>
					<td style={{'width':'160','height':'35'}}></td>
					<td style={{'width':'90','height':'35'}}></td>
					<td style={{'width':'90','height':'35'}}></td>
					<td colSpan="2" style={{'width':'263','height':'35'}}></td>
				</tr>
				<tr>
					<td colSpan="2" style={{'width':'250','height':'30'}}></td>
					<td style={{'width':'90','height':'30'}}></td>
					<td style={{'width':'90','height':'30'}}></td>
					<td  style={{'width':'173','height':'30'}}></td>
				</tr>
				<tr>
					<td colSpan="2" style={{'width':'250','height':'30'}}>{tt}</td>
					<td style={{'width':'90','height':'30'}}></td>
					<td style={{'width':'90','height':'30'}}></td>
					<td  style={{'textAlign':'right','width':'173','height':'30','fontSize':'18px'}}>{rs.YJTTHF?(rs.YJTTHF).toFixed(2):null}</td>
				</tr>
				<tr>
					<td colSpan="2" style={{'width':'250','height':'30'}}>{gr}</td>
					<td style={{'width':'90','height':'30'}}></td>
					<td style={{'width':'90','height':'30'}}></td>
					<td  style={{'textAlign':'right','width':'173','height':'30'}}>{rs.YJGRHF?(rs.YJGRHF).toFixed(2):null}</td>
				</tr>
				<tr>
					<td colSpan="2" style={{'width':'250','height':'30'}}></td>
					<td style={{'width':'90','height':'30'}}></td>
					<td style={{'width':'90','height':'30'}}></td>
					<td  style={{'textAlign':'right','width':'173','height':'30'}}></td>
				</tr>
				<tr>
					<td style={{'width':'160','height':'30'}}></td>
					<td colSpan="4" style={{'textAlign':'center','width':'443','height':'30'}}>{rs.JFZE}</td>
				</tr>
				<tr>
					<td style={{'width':'160','height':'30'}}></td>
					<td colSpan="4" style={{'textAlign':'center','width':'443','height':'30'}}>{rs.BZ}</td>
				</tr>
			</tbody>
		</table>
		
		</div><button className="noprint" type="button" onClick={this.onClick.bind(this,rs.jlid)} style={{'position':'relative','left':'330px','width':'60px'}}>打印</button>
		</div>
	}
	});
module.exports = dy;//'fontSize':'24px'