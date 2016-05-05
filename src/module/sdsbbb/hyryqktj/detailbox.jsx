import React from 'react'
import {Row,Col} from 'antd'
import './style.css'

const detailBox = React.createClass({
    render(){
        const obj = this.props.data;

        return <div className="fix-table table-bordered table-striped">
        <h1 style={{textAlign:'center'}}>{obj.ND}年度执业税务师行业人员情况统计表（表2)</h1>
            <Row><Col  span="12">编制地区(单位）：{obj.dwmc}</Col><Col  span="8">上报时间：{obj.sbsj}</Col><Col  span="4">单位：万元、人</Col></Row>
            <table>
                <tbody>
                
                <tr style={{textAlign:'center'}}>
                    <th rowSpan="3" colSpan="2">项目</th>
                    <th colSpan="2">人员</th>
                    <th colSpan="4">学历</th>
                    <th colSpan="4">年龄</th>
                    <th colSpan="2">政治面貌</th>
                    <th colSpan="8">备注</th>
                </tr>
                 <tr>
                    <th rowSpan="2">总计</th>
                    <th rowSpan="2">其中:女</th>
                    <th rowSpan="2">研宄生及以上</th>
                    <th rowSpan="2">大学本科</th>
                    <th rowSpan="2">大专</th>
                    <th rowSpan="2">大专以下</th>
                    <th rowSpan="2">35岁以下</th>
                    <th rowSpan="2">36-50岁</th>
                    <th rowSpan="2">51-60 岁</th>
                    <th rowSpan="2">61岁以上</th>
                    <th rowSpan="2">中共党员</th>
                    <th rowSpan="2">民主党派</th>
                    <th colSpan="4">人大代表</th>
                    <th colSpan="4">政协委员</th>
                </tr>
                <tr>
                    <th >全国</th>
                    <th >省</th>
                    <th >市</th>
                    <th >县</th>
                    <th >全国</th>
                    <th >省</th>
                    <th >市</th>
                    <th >县</th>
                </tr>
                  <tr>
                    <td colSpan="2">人员总数</td>
                    <td>{obj.RYZS_RY_ZJ}</td>
                    <td>{obj.RYZS_RY_NV}</td>
                    <td>{obj.RYZS_XL_YJS}</td>
                    <td>{obj.RYZS_XL_BK}</td>
                    <td>{obj.RYZS_XL_DZ}</td>
                    <td>{obj.RYZS_XL_ZZ}</td>
                    <td>{obj.RYZS_NL_35}</td>
                    <td>{obj.RYZS_NL_50}</td>
                    <td>{obj.RYZS_NL_60L}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                </tr>
                  <tr>
                    <td colSpan="2">1、执业注册税务师</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                </tr>
                  <tr>
                    <td colSpan="2" style={{paddingLeft:'3em'}}>其中：股东或合伙人</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                </tr>
                <tr>
                    <td colSpan="2">2、其他从业人员</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                </tr>
                <tr>
                    <td colSpan="2" style={{paddingLeft:'3em'}}>其中：亊务所内非执业注册税务师</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                </tr>
                 <tr>
                    <td rowSpan="3">其中：具有其他专业服务资格的从业人员</td>
                    <td>1、注册会计师</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                </tr>
                 <tr>
                    <td>2、资产评估师</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                </tr>
                 <tr>
                    <td>3、律师</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                    <td>{obj.ND}</td>
                </tr>
                </tbody>
            </table>
            <Row><Col  span="8">填报人：{obj.ZBR}</Col><Col  offspan="16">所长：{obj.SZ}</Col></Row>
            <div >
                <p>填表说明：</p>
                <p>1、本表统计数据截止为统计年度的12月31日；上报截止期为次年3月31日。（具体时间以各省通知为准）</p>
                   <p> 2、人员总数=执业注册税务师+其他从业人员</p>
                   <p> 3、"具有其他专业服务执业资格的人员"是指除执业注册税务师以外的注册会计师、注册资产评估师、律师的专业服务执业资格的人 具有两种以上中介执业资格的人员，可以重复统计。</p>
                   <p> 4、备注栏中埴列县以上人大代表和政协委员。</p>
            </div>
        </div>
    }
});

module.exports = detailBox;