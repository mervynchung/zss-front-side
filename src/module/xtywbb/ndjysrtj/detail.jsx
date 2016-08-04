import React from 'react'
//import './style.css'

const detail = React.createClass({
    render(){
        const obj = this.props.data;
        let tr = [];
        for(let i = 0; i < obj.length; i++){
            let td = [];
            td.push(<td key={i+'-0'}>{obj[i].xmlx}</td>);
            if(i < 20){ 
                td.push(<td style={{textAlign:'right'}} key={i+'-1'}>{obj[i].hs_qn}</td>);
                td.push(<td style={{textAlign:'right'}} key={i+'-2'}>{obj[i].je_qn}</td>);
                td.push(<td style={{textAlign:'right'}} key={i+'-3'}>{obj[i].hs_bn}</td>);
                td.push(<td style={{textAlign:'right'}} key={i+'-4'}>{obj[i].je_bn}</td>);
                td.push(<td style={{textAlign:'right'}} key={i+'-5'}>{obj[i].hs_zj}</td>);
                td.push(<td style={{textAlign:'right'}} key={i+'-6'}>{obj[i].je_zj}</td>);
                td.push(<td style={{textAlign:'right'}} key={i+'-7'}>{obj[i].hs_bl}</td>);
                td.push(<td style={{textAlign:'right'}} key={i+'-8'}>{obj[i].je_bl}</td>);
            }else{
                td.push(<td colSpan="2" style={{textAlign:'right'}} key={i+'-5'}>{obj[i].je_qn}</td>);
                td.push(<td colSpan="2" style={{textAlign:'right'}} key={i+'-6'}>{obj[i].je_bn}</td>);
                td.push(<td colSpan="2" style={{textAlign:'right'}} key={i+'-7'}>{obj[i].je_zj}</td>);
                td.push(<td colSpan="2" style={{textAlign:'right'}} key={i+'-8'}>{obj[i].je_bl}</td>);
            }
            tr.push(<tr key={i}>{td}</tr>);
        }
        //alert(obj);
        return <dev className="fix-table table-bordered table-striped">
            <table>
                <tbody>
                <tr>
                    <td rowSpan="2" style={{textAlign:'center'}}>项目</td>
                    <td colSpan="2" style={{textAlign:'center'}}>上年数</td>
                    <td colSpan="2" style={{textAlign:'center'}}>本年数</td>
                    <td colSpan="2" style={{textAlign:'center'}}>比上年增减额</td>
                    <td colSpan="2" style={{textAlign:'center'}}>增减%</td>
                </tr>
                <tr>
                    <td style={{textAlign:'center'}}>户次</td>
                    <td style={{textAlign:'center'}}>金额</td>
                    <td style={{textAlign:'center'}}>户次</td>
                    <td style={{textAlign:'center'}}>金额</td>
                    <td style={{textAlign:'center'}}>户次</td>
                    <td style={{textAlign:'center'}}>金额</td>
                    <td style={{textAlign:'center'}}>户次</td>
                    <td style={{textAlign:'center'}}>金额</td>
                </tr>
                
                {tr}
                </tbody>
            </table>
        </dev>
    }
});

module.exports = detail;