import React from 'react'
import {Steps, Col, Row, Spin, notification, Icon, Button, Form, Input,InputNumber,Modal} from 'antd'
import Panel from 'component/compPanel'
import {SelectorYear, SelectorXZ, SelectorSWSXZ, SelectorCS} from 'component/compSelector'
import auth from 'common/auth.js'
import config from 'common/configuration.js'
import req from 'common/request'
import utils from 'common/utils'
import Success from './successScr'
import FailScr from './failScr'

const ButtonGroup = Button.Group;
const FormItem = Form.Item;
const PanelBar = Panel.ToolBar;

let Editfrom = React.createClass({
    checkRyzs(rule, value, callback){
        if (value < this.props.form.getFieldValue('zyzcswsrs')) {
            callback("人员总数要大于执业人数")
        } else {
            callback()
        }
    },
    checkZczj(rule, value, callback){
        if ( this.props.data.jgxz_dm==2 && (!value || value <= 0)) {
            callback("必填")
        } else {
            callback()
        }
    },
    checkCzrs(rule, value, callback){
        if ( this.props.data.jgxz_dm==2 && (!value || value <= 0)) {
            callback("必填")
        } else {
            callback()
        }
    },
    checkHhrs(rule, value, callback){
        if ( this.props.data.jgxz_dm==1 && (!value || value <= 0)) {
            callback("必填")
        } else {
            callback()
        }
    },
    checkYysr(rule, value, callback){
        if ( this.props.data.jgxz_dm==1 && (!value || value <= 0)) {
            callback("必填")
        } else {
            callback()
        }
    },
    commit(){
        const {validateFieldsAndScroll} = this.props.form;
        validateFieldsAndScroll((errors, values) => {
            if (!!errors) {
                return;
            }
            for(var key in values){
                    if(Object.prototype.toString.call(value[key]) == "[object Undefined]" || (isNaN(values[key])&&(""==values[key]))){
                        values[key]=null;
                    }
                      if(Object.prototype.toString.call(values[key])=="[object Date]"){//时间格式化
                                var dd = values[key].Format("yyyy-MM-dd");
                                values[key]=dd;
                            }
            }
            this.props.onCommit(values);
        })
    },
    save(){
        const {validateFieldsAndScroll} = this.props.form;
        validateFieldsAndScroll((errors, values) => {
            if (!!errors) {
                return;
            }
            for(var key in values){
                    if(Object.prototype.toString.call(value[key]) == "[object Undefined]" || (isNaN(values[key])&&(""==values[key]))){
                        values[key]=null;
                    }
                      if(Object.prototype.toString.call(values[key])=="[object Date]"){//时间格式化
                                var dd = values[key].Format("yyyy-MM-dd");
                                values[key]=dd;
                            }
                    
            }
            this.props.onSave(values);
        })
    },
    render(){
        const {getFieldProps} = this.props.form;
        let data =[{}];
         if(this.props.data.length!=0){
              data = this.props.data;
         };
        return <div className="add_hyryb">
         <div className="h-scroll-table" >
        <div className="fix-table table-bordered table-striped" >
  
        <Form horizontal onSubmit={this.handleSubmit}>
            <table>    
                <colgroup>
                    <col className ="col-3"></col>
                    <col className="col-1"></col>
                    <col className="col-1"></col>
                    <col className="col-1"></col>
                    <col className="col-1"></col>
                    <col className="col-1"></col> 
                    <col className="col-1"></col>
                    <col className="col-1"></col>
                    <col className="col-1"></col>
                    <col className="col-1"></col>
                    <col className="col-1"></col> 
                     <col className="col-1"></col>
                    <col className="col-1"></col>
                    <col className="col-1"></col>
                    <col className="col-1"></col>
                    <col className="col-1"></col>
                     <col className="col-1"></col>
                    <col className="col-1"></col>
                    <col className="col-1"></col>
                    <col className="col-1"></col> 
                    <col className="col-1"></col> 
                    <col className="col-1"></col>                                                 
                </colgroup>
                <tbody>
                <tr>  
                    <td colSpan="3" >单位：</td>
                   <td colSpan="2" >所长：</td>
                     <td colSpan="5" ><Input   {...getFieldProps('sz')}/> </td> 
                    <td  colSpan="3">  <Col 
                          label="年度：">
                            <SelectorYear  { ...getFieldProps('nd')}/>
                        </Col>
                           </td>
                           <td >制表人：</td>
                           <td colSpan="6" ><Input {...getFieldProps('zbr')}/> </td>
                          
                       <td colSpan="2">单位：万元、户</td>   
                
                </tr>
                
                    <tr style={{textAlign:'center'}}>
                    <td rowSpan="3" colSpan="2">项目</td>
                    <td colSpan="3">人员</td>
                    <td colSpan="4">学历</td>
                    <td colSpan="4">年龄</td>
                    <td colSpan="3">政治面貌</td>
                    <td colSpan="8">备注</td>
                </tr>
                 <tr>
                    <td rowSpan="2" >人数总计</td>
                    <td rowSpan="2">其中:女</td>
                    <td rowSpan="2">研宄生及以上</td>
                    <td rowSpan="2">大学本科</td>
                    <td rowSpan="2">大专学历</td>
                    <td rowSpan="2">大专以下</td>
                    <td rowSpan="2">35岁以下</td>
                    <td rowSpan="2">36-50岁</td>
                    <td rowSpan="2">51-60 岁</td>
                    <td rowSpan="2">61岁以上</td>
                    <td rowSpan="2">中共党员</td>
                    <td rowSpan="2">民主党派</td>
                    <td colSpan="4">人大代表</td>
                    <td colSpan="4">政协委员</td>
                </tr>
                <tr>
                    <td >全国 &nbsp;&nbsp;&nbsp;</td>
                    <td >省 &nbsp; &nbsp; &nbsp; &nbsp;</td>
                    <td >市 &nbsp; &nbsp; &nbsp; &nbsp;</td>
                    <td >县 &nbsp; &nbsp; &nbsp; &nbsp;</td>
                    <td >全国 &nbsp; &nbsp;</td>
                    <td >省 &nbsp; &nbsp; &nbsp; &nbsp;</td>
                    <td >市 &nbsp; &nbsp; &nbsp; &nbsp;</td>
                    <td >县 &nbsp; &nbsp; &nbsp; &nbsp;</td>
                </tr>
                 <tr>
                    <td colSpan="2">人员总数</td>
                    <td ><Input   {...getFieldProps('ryzs_ry_zj')}/></td>
                    <td><Input   {...getFieldProps('ryzs_ry_nv')}/></td>
                    <td><Input   {...getFieldProps('ryzs_xl_yjs')}/></td>
                    <td><Input   {...getFieldProps('ryzs_xl_bk')}/></td>
                    <td><Input   {...getFieldProps('ryzs_xl_dz')}/></td>
                    <td><Input   {...getFieldProps('ryzs_xl_zz')}/></td>
                    <td><Input   {...getFieldProps('ryzs_nl_35')}/></td>
                    <td><Input   {...getFieldProps('ryzs_nl_50')}/></td>
                    <td><Input   {...getFieldProps('ryzs_nl_60l')}/></td>
                    <td><Input   {...getFieldProps('ryzs_nl_60u')}/></td>
                    <td><Input   {...getFieldProps('ryzs_zzmm_gcd')}/></td>
                    <td><Input   {...getFieldProps('ryzs_zzmm_mzp')}/></td>
                    <td><Input   {...getFieldProps('bz1')}/></td>
                    <td><Input   {...getFieldProps('bz2')}/></td>
                    <td><Input   {...getFieldProps('bz3')}/></td>
                    <td><Input   {...getFieldProps('bz4')}/></td>
                    <td><Input   {...getFieldProps('bz5')}/></td>
                    <td ><Input   {...getFieldProps('bz6')}/></td>
                    <td ><Input   {...getFieldProps('bz7')}/></td>
                    <td ><Input   {...getFieldProps('bz8')}/></td>
                </tr>
                 <tr>
                    <td colSpan="2">1、执业注册税务师</td>
                    <td><Input   {...getFieldProps('zysws_ry_zj')}/></td>
                    <td><Input   {...getFieldProps('zysws_ry_nv')}/></td>
                    <td><Input   {...getFieldProps('zysws_xl_yjs')}/></td>
                    <td><Input   {...getFieldProps('zysws_xl_bk')}/></td>
                    <td><Input   {...getFieldProps('zysws_xl_dz')}/></td>
                    <td><Input   {...getFieldProps('zysws_xl_zz')}/></td>
                    <td><Input   {...getFieldProps('zysws_nl_35')}/></td>
                    <td><Input   {...getFieldProps('zysws_nl_50')}/></td>
                    <td><Input   {...getFieldProps('zysws_nl_60l')}/></td>
                    <td><Input   {...getFieldProps('zysws_nl_60u')}/></td>
                    <td><Input   {...getFieldProps('zysws_zzmm_gcd')}/></td>
                    <td><Input   {...getFieldProps('zysws_zzmm_mzp')}/></td>
                    <td><Input   {...getFieldProps('bz9')}/></td>
                    <td><Input   {...getFieldProps('bz10')}/></td>
                    <td><Input   {...getFieldProps('bz11')}/></td>
                    <td><Input   {...getFieldProps('bz12')}/></td>
                    <td><Input   {...getFieldProps('bz13')}/></td>
                    <td><Input   {...getFieldProps('bz14')}/></td>
                    <td><Input   {...getFieldProps('bz15')}/></td>
                    <td><Input   {...getFieldProps('bz16')}/></td>
                </tr>
                
                 <tr>
                   <td colSpan="2" style={{paddingLeft:'3em'}}>其中：股东或合伙人</td>
                    <td><Input   {...getFieldProps('hhczr_ry_zj')}/></td>
                    <td><Input   {...getFieldProps('hhczr_ry_nv')}/></td>
                    <td><Input   {...getFieldProps('hhczr_xl_yjs')}/></td>
                    <td><Input   {...getFieldProps('hhczr_xl_bk')}/></td>
                    <td><Input   {...getFieldProps('hhczr_xl_dz')}/></td>
                    <td><Input   {...getFieldProps('hhczr_xl_zz')}/></td>
                    <td><Input   {...getFieldProps('hhczr_nl_35')}/></td>
                    <td><Input   {...getFieldProps('hhczr_nl_50')}/></td>
                    <td><Input   {...getFieldProps('hhczr_nl_60l')}/></td>
                    <td><Input   {...getFieldProps('hhczr_nl_60u')}/></td>
                    <td><Input   {...getFieldProps('hhczr_zzmm_gcd')}/></td>
                    <td><Input   {...getFieldProps('hhczr_zzmm_mzp')}/></td>
                    <td><Input   {...getFieldProps('bz17')}/></td>
                    <td><Input   {...getFieldProps('bz18')}/></td>
                    <td><Input   {...getFieldProps('bz19')}/></td>
                    <td><Input   {...getFieldProps('bz20')}/></td>
                    <td><Input   {...getFieldProps('bz21')}/></td>
                    <td><Input   {...getFieldProps('bz22')}/></td>
                    <td><Input   {...getFieldProps('bz23')}/></td>
                    <td><Input   {...getFieldProps('bz24')}/></td>
                </tr>
                  <tr>
                   <td colSpan="2">2、其他从业人员</td>
                    <td><Input   {...getFieldProps('qtcyry_ry_zj')}/></td>
                    <td><Input   {...getFieldProps('qtcyry_ry_nv')}/></td>
                    <td><Input   {...getFieldProps('qtcyry_xl_yjs')}/></td>
                    <td><Input   {...getFieldProps('qtcyry_xl_bk')}/></td>
                    <td><Input   {...getFieldProps('qtcyry_xl_dz')}/></td>
                    <td><Input   {...getFieldProps('qtcyry_xl_zz')}/></td>
                    <td><Input   {...getFieldProps('qtcyry_nl_35')}/></td>
                    <td><Input   {...getFieldProps('qtcyry_nl_50')}/></td>
                    <td><Input   {...getFieldProps('qtcyry_nl_60l')}/></td>
                    <td><Input   {...getFieldProps('qtcyry_nl_60u')}/></td>
                    <td><Input   {...getFieldProps('qtcyry_zzmm_gcd')}/></td>
                    <td><Input   {...getFieldProps('qtcyry_zzmm_mzp')}/></td>
                    <td><Input   {...getFieldProps('bz25')}/></td>
                    <td><Input   {...getFieldProps('bz26')}/></td>
                    <td><Input   {...getFieldProps('bz27')}/></td>
                    <td><Input   {...getFieldProps('bz28')}/></td>
                    <td><Input   {...getFieldProps('bz29')}/></td>
                    <td><Input   {...getFieldProps('bz30')}/></td>
                    <td><Input   {...getFieldProps('bz31')}/></td>
                    <td><Input   {...getFieldProps('bz32')}/></td>
                </tr>
                <tr>
                   <td colSpan="2" style={{paddingLeft:'3em'}}>其中：亊务所内非执业注册税务师</td>
                    <td><Input   {...getFieldProps('fzyzss_ry_zj')}/></td>
                    <td><Input   {...getFieldProps('fzyzss_ry_nv')}/></td>
                    <td><Input   {...getFieldProps('fzyzss_xl_yjs')}/></td>
                    <td><Input   {...getFieldProps('fzyzss_xl_bk')}/></td>
                    <td><Input   {...getFieldProps('fzyzss_xl_dz')}/></td>
                    <td><Input   {...getFieldProps('fzyzss_xl_zz')}/></td>
                    <td><Input   {...getFieldProps('fzyzss_nl_35')}/></td>
                    <td><Input   {...getFieldProps('fzyzss_nl_50')}/></td>
                    <td><Input   {...getFieldProps('fzyzss_nl_60l')}/></td>
                    <td><Input   {...getFieldProps('fzyzss_nl_60u')}/></td>
                    <td><Input   {...getFieldProps('fzyzss_zzmm_gcd')}/></td>
                    <td><Input   {...getFieldProps('fzyzss_zzmm_mzp')}/></td>
                    <td><Input   {...getFieldProps('bz33')}/></td>
                    <td><Input   {...getFieldProps('bz34')}/></td>
                    <td><Input   {...getFieldProps('bz35')}/></td>
                    <td><Input   {...getFieldProps('bz36')}/></td>
                    <td><Input   {...getFieldProps('bz37')}/></td>
                    <td><Input   {...getFieldProps('bz38')}/></td>
                    <td><Input   {...getFieldProps('bz39')}/></td>
                    <td><Input   {...getFieldProps('bz40')}/></td>
                </tr>
                 <tr>
                   <td rowSpan="3">其中：具有其他专业服务资格的从业人员</td>
                   <td>1、注册会计师</td>
                    <td><Input   {...getFieldProps('zckjs_ry_zj')}/></td>
                    <td><Input   {...getFieldProps('zckjs_ry_nv')}/></td>
                    <td><Input   {...getFieldProps('zckjs_xl_yjs')}/></td>
                    <td><Input   {...getFieldProps('zckjs_xl_bk')}/></td>
                    <td><Input   {...getFieldProps('zckjs_xl_dz')}/></td>
                    <td><Input   {...getFieldProps('zckjs_xl_zz')}/></td>
                    <td><Input   {...getFieldProps('zckjs_nl_35')}/></td>
                    <td><Input   {...getFieldProps('zckjs_nl_50')}/></td>
                    <td><Input   {...getFieldProps('zckjs_nl_60l')}/></td>
                    <td><Input   {...getFieldProps('zckjs_nl_60u')}/></td>
                    <td><Input   {...getFieldProps('zckjs_zzmm_gcd')}/></td>
                    <td><Input   {...getFieldProps('zckjs_zzmm_mzp')}/></td>
                    <td><Input   {...getFieldProps('bz41')}/></td>
                    <td><Input   {...getFieldProps('bz42')}/></td>
                    <td><Input   {...getFieldProps('bz43')}/></td>
                    <td><Input   {...getFieldProps('bz44')}/></td>
                    <td><Input   {...getFieldProps('bz45')}/></td>
                    <td><Input   {...getFieldProps('bz46')}/></td>
                    <td><Input   {...getFieldProps('bz47')}/></td>
                    <td><Input   {...getFieldProps('bz48')}/></td>
                </tr>
                 <tr>
                   <td>2、资产评估师</td>
                    <td><Input   {...getFieldProps('zcpgs_ry_zj')}/></td>
                    <td><Input   {...getFieldProps('zcpgs_ry_nv')}/></td>
                    <td><Input   {...getFieldProps('zcpgs_xl_yjs')}/></td>
                    <td><Input   {...getFieldProps('zcpgs_xl_bk')}/></td>
                    <td><Input   {...getFieldProps('zcpgs_xl_dz')}/></td>
                    <td><Input   {...getFieldProps('zcpgs_xl_zz')}/></td>
                    <td><Input   {...getFieldProps('zcpgs_nl_35')}/></td>
                    <td><Input   {...getFieldProps('zcpgs_nl_50')}/></td>
                    <td><Input   {...getFieldProps('zcpgs_nl_60l')}/></td>
                    <td><Input   {...getFieldProps('zcpgs_nl_60u')}/></td>
                    <td><Input   {...getFieldProps('zcpgs_zzmm_gcd')}/></td>
                    <td><Input   {...getFieldProps('zcpgs_zzmm_mzp')}/></td>
                    <td><Input   {...getFieldProps('bz49')}/></td>
                    <td><Input   {...getFieldProps('bz50')}/></td>
                    <td><Input   {...getFieldProps('bz51')}/></td>
                    <td><Input   {...getFieldProps('bz52')}/></td>
                    <td><Input   {...getFieldProps('bz53')}/></td>
                    <td><Input   {...getFieldProps('bz54')}/></td>
                    <td><Input   {...getFieldProps('bz55')}/></td>
                    <td><Input   {...getFieldProps('bz56')}/></td>
                </tr>
                 <tr>
                   <td>3、律师</td>
                    <td><Input   {...getFieldProps('ls_ry_zj')}/></td>
                    <td><Input   {...getFieldProps('ls_ry_nv')}/></td>
                    <td><Input   {...getFieldProps('ls_xl_yjs')}/></td>
                    <td><Input   {...getFieldProps('ls_xl_bk')}/></td>
                    <td><Input   {...getFieldProps('ls_xl_dz')}/></td>
                    <td><Input   {...getFieldProps('ls_xl_zz')}/></td>
                    <td><Input   {...getFieldProps('ls_nl_35')}/></td>
                    <td><Input   {...getFieldProps('ls_nl_50')}/></td>
                    <td><Input   {...getFieldProps('ls_nl_60l')}/></td>
                    <td><Input   {...getFieldProps('ls_nl_60u')}/></td>
                    <td><Input   {...getFieldProps('ls_zzmm_gcd')}/></td>
                    <td><Input   {...getFieldProps('ls_zzmm_mzp')}/></td>
                    <td><Input   {...getFieldProps('bz57')}/></td>
                    <td><Input   {...getFieldProps('bz58')}/></td>
                    <td><Input   {...getFieldProps('bz59')}/></td>
                    <td><Input   {...getFieldProps('bz60')}/></td>
                    <td><Input   {...getFieldProps('bz61')}/></td>
                    <td><Input   {...getFieldProps('bz62')}/></td>
                    <td><Input   {...getFieldProps('bz63')}/></td>
                    <td><Input   {...getFieldProps('bz64')}/></td>
                </tr>
                
                      
                </tbody>   
            </table>
            </Form>
        
        </div>
           <div >
                 <p>填表说明：</p>
                <p>1、本表统计数据截止为统计年度的12月31日；上报截止期为次年3月31日。（具体时间以各省通知为准）</p>
                   <p> 2、人员总数=执业注册税务师+其他从业人员</p>
                   <p> 3、"具有其他专业服务执业资格的人员"是指除执业注册税务师以外的注册会计师、注册资产评估师、律师的专业服务执业资格的人 具有两种以上中介执业资格的人员，可以重复统计。</p>
                   <p> 4、备注栏中填写县以上人大代表和政协委员。</p>
            </div>
            <div style={{textAlign:'center'}}>
            <Button type="primary" onClick={this.save}> <Icon type="check"/>保存</Button>
            <span className="ant-divider"></span>
            <Button type="primary" onClick={this.commit}> <Icon type="arrow-up"/>提交</Button>
            </div>
            </div>
        </div>
    }
});
Editfrom = Form.create({
    mapPropsToFields(props) {
        let result = {};
        for (let prop in props.data) {
            result[prop] = {value: props.data[prop]}
        }
        return result;
    }
})(Editfrom);


const c = React.createClass({
    getDefaultProps(){
        return {
            title: '添加行业人员情况统计表',
            url: config.HOST + config.URI_API_PROJECT + '/client/swsjbqk',
            initUrl: config.HOST + config.URI_API_PROJECT + '/client/swsjbqkinit'
        }
    },
    getInitialState(){
        return {
            loading: true,
            data: {},
            scr: 'edit'
        }
    },
    back(){
        this.props.onBack();
    },

    //保存
    handleSave(values){
        const {url} = this.props;
        values.ztbj = 0;
        this.setState({loading:true,data:values});
        req({
            method:'post',
            url:url,
            data:values
        }).then(resp=>{
            this.setState({loading:false,scr:'success',successType:'save'})
        }).catch(e=>{
            this.setState({loading: false});
            if (e.status == 403){
                let res = JSON.parse(e.response);
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: res.text
                });
            }else{
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: '报表数据保存失败，请稍后再尝试'
                });
            }
        });
    },
    //提交
    handleCommit(values){
        const {url} = this.props;
        values.ztbj = 2;
        this.setState({loading:true,data:values});
        req({
            method:'post',
            url:url,
            data:values
        }).then(resp=>{
            this.setState({loading:false,scr:'success',successType:'commit'})
        }).catch(e=>{
            if (e.status == 403){
                let res = JSON.parse(e.response);
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: res.text
                });
            }else{
                notification.error({
                    duration: 3,
                    message: '操作失败',
                    description: '报表数据保存失败，请稍后再尝试'
                });
            }
        });
    },

    componentDidMount(){
        const {initUrl}  = this.props;
        req({
            method: 'get',
            url: initUrl
        }).then(resp=> {
            this.setState({data: resp, loading: false})
        }).catch(e=> {
            if (e.status == 403) {
                let res = JSON.parse(e.response);
                let failtext = {
                    text: res.text
                };
                this.setState({scr: 'fail', loading: false, failtext: failtext})
            } else {
                this.setState({scr: 'fail', loading: false})
            }

        })
    },

    render(){
        const {title} = this.props;
        let {data,loading,scr,failtext,successType} = this.state;
        const panelBar = <PanelBar>
            <Button onClick={this.back}>
                <Icon type="rollback"/>返回
            </Button>
        </PanelBar>;

        let content = {
            edit: <Editfrom data={data} onCommit={this.handleCommit} onSave={this.handleSave} />,
            fail: <FailScr text={failtext}/>,
            success: <Success type={successType}/>
        };

        return <Panel className="swsjbqk-edit" toolbar={panelBar} title={title}>
            <Spin spinning={loading}>
                {content[scr]}
            </Spin>
        </Panel>

    }
});


module.exports = c;