import React from 'react'
import {Button,notification } from 'antd'

const exportWay='csv';
var Iconv = require('iconv-lite');
let dy = React.createClass({
	toGB2312 (str) { 
	str = str.replace(/./g, function (sHex) { 
	let encodeStr = ""; 
	if (window.execScript) {
	    window.execScript('encodeStr=Hex(Asc(sHex))', "vbscript");
	  } else {
	    window.eval('encodeStr=Hex(Asc(sHex))');
	  }
	return encodeStr.replace(/../g, "%{blogcontent}amp;"); 
	}); 
	return str; 
	},
	emitXmlHeader() {
		    let headerRow =  '<ss:Row>\n';
		    let colStyle='';
		    const modelTypes =this.props.model;
		    for (let i =0 ; i <modelTypes.length; i++) {
		    	headerRow += '  <ss:Cell><ss:Data ss:Type="String">'+modelTypes[i].title + '</ss:Data></ss:Cell>\n';
		    	colStyle+=`<ss:Column ${!modelTypes[i].formart ? '':'ss:StyleID="s'+modelTypes[i].formart+'"'} ss:Width=${!modelTypes[i].width ? '"100"':modelTypes[i].width} />\n`;
		    };
		    headerRow += '</ss:Row>\n';    
		    return '<?xml version="1.0"?>\n' +
		           '<ss:Workbook xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">\n' +
		            '<ss:Styles><ss:Style ss:ID="sDate"> <ss:NumberFormat ss:Format="Short Date"/></ss:Style>'+
		 	'<ss:Style ss:ID="sNumber"> <ss:NumberFormat ss:Format="0.00_);[Red]\(0.00\)"/> </ss:Style></ss:Styles>'+
		           '<ss:Worksheet ss:Name="Sheet1">\n' +
		           '<ss:Table>\n\n' +colStyle+ headerRow;
	},

	emitXmlFooter() {
		    return '\n</ss:Table>\n' +
		           '</ss:Worksheet>\n' +
		           '</ss:Workbook>\n';
	},

	jsonToSsXml (jsonObject) {
		    let data = (typeof(jsonObject) != "object" ? JSON.parse(jsonObject) : jsonObject);
		   let xml = this.emitXmlHeader();
		   const modelTypes =this.props.model;
		    for (let row = 0; row < data.length; row++) {
			xml += '<ss:Row>\n';
			for (let i = 0; i < modelTypes.length; i++) {
			      for (let col in data[row]) {
			    	if (modelTypes[i].dataIndex==col) {
			       		 xml += ` <ss:Cell><ss:Data ss:Type="${typeof(data[row][col])=="number" ? 'Number':'String'}">`+ data[row][col] + '</ss:Data></ss:Cell>\n';
			    	};
			}
		        }

		        xml += '</ss:Row>\n';
		    }

		    xml += this.emitXmlFooter();
		    return xml;  
	},
	jsonToCSV(jsonObject){
		    let csv='';
		    var iconv = new Iconv('UTF-8', 'GBK');
		    const modelTypes =this.props.model;
		    for (let i =0 ; i <modelTypes.length; i++) {
		    	const value=modelTypes[i].title+'';
	    		const valueANSI = encodeURI(value);
		    	csv +=   valueANSI+ ',';
		    };
		    let data = (typeof(jsonObject) != "object" ? JSON.parse(jsonObject) : jsonObject);
		    for (let row = 0; row < data.length; row++) {
			csv += '\n';
			for (let i = 0; i < modelTypes.length; i++) {
			      for (let col in data[row]) {
			    	if (modelTypes[i].dataIndex==col) {
			    		const value='"'+data[row][col]+'"';
			    		// const valueANSI = encodeURI(value);
			       		 csv += value+ ',';
			    	};
			}
		        }

		    }
		    return csv;  
	},
	valueExport(e){
		e.preventDefault();
		let data=this.props.resData;
		if (data.length<=0) {
			notification.error({
		                    message: '操作失败',
		                    description: '暂无数据可导出，请检查后再尝试'
		                });
			return;
		};
		let selFuntion={
			xml:this.jsonToSsXml(data),
			csv:this.jsonToCSV(data),
		}
		let ex=selFuntion[exportWay];
		if (!!window.ActiveXObject || "ActiveXObject" in window)  {//判断是否ie
			let xlsWin = null;  
			let width = 1; 
			let height = 1;  
			let openPara = "left=" + (window.screen.width / 2 + width / 2) + ",top=" + (window.screen.height + height / 2) +  
			",scrollbars=no,width=" + width + ",height=" + height;  
			xlsWin = window.open("", "_blank", openPara);  
			xlsWin.document.write(ex);  
			xlsWin.document.close();  
			xlsWin.document.execCommand('Saveas', true, 'fileName.'+(exportWay=='xml'?'xls':exportWay));  
			xlsWin.close();  
		}else{
			    let aLink = document.createElement('a');	

			  /*  let blob = new Blob([ex]);
			    let evt = document.createEvent("HTMLEvents");
			    evt.initEvent("click", false, false);//initEvent 不加后两个参数在FF下会报错
			    aLink.download = 'fileName.'+(exportWay=='xml'?'xls':exportWay);
			    aLink.href = URL.createObjectURL(blob);
			    aLink.dispatchEvent(evt);*/
			    var uri = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURI(ex);
			    var link = document.createElement("a");
			    link.href = uri;
			    link.style = "visibility:hidden";
	 		    link.download = 'fileName' + ".csv";
	 		    document.body.appendChild(link);
		                 link.click();
		                 document.body.removeChild(link);
		};
    	},
	render() {

		return <Button type="ghost"  onClick={this.valueExport} {...this.props}>导出</Button>
		
	}	
});
module.exports = dy;
