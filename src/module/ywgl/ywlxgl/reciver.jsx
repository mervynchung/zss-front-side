import React from 'react'
import {Modal, Tabs, Radio,Select,Row} from 'antd'
import {isEmptyObject} from 'common/utils'

const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
const Option = Select.Option;

const SelectorYear = React.createClass({
    getYearOptions(year){
        const options =[];
        for(let i = 0; i<3 ; i++ ){
            let option =  <Option key={''+(year-i)}>{''+(year-i)}</Option>;
            options.push(option)
        }
        return options;
    },

    render(){
        let year = new Date().getFullYear();
        const options = this.getYearOptions(year);
        return <Select  placeholder="选择年度" defaultValue={''+year} {...this.props} style={{width:'10em'}}>
            {options}
        </Select>
    }
});

const c = React.createClass({
    getDefaultProps(){
        return {
            group: [{
                key:'3',label:'省内事务所',type:2//类型2为系统消息
            },{
                key:'114',label:'外省事务所（无省内分所）',type:2
            }],
            special:
              [{
                  key:'211',label:'会费未缴清事务所',type:3//类型3为缴费通知
              },{
                  key:'212',label:'财务报表未上报事务所',type:2
              },{
                  key:'213',label:'行业报表未上报事务所',type:2
              }]
        }
    },
    getInitialState(){
        return {
            year:''+new Date().getFullYear(),
            value: '3',
            data:this.props.group
        }
    },
    handleChange(e){
            this.setState({value:e.target.value})
    },
    handleTabChange(tabkey){
        if(tabkey == 1){
            this.setState({data:this.props.group})
        }else if(tabkey == 2){
            this.setState({data:this.props.special})
        }else if (tabkey == 3){
            this.setState({data:{}})
        }
    },
    handleOk(){
        const {onOk} = this.props;
        const {data,value,year} = this.state;
        //通过state.data判断是否群发
        if(isEmptyObject(data)){
            //特定事务所
            onOk(data)
        }else{
            //不同组合群发
            for(let i=0; i<data.length;i++){
                if(data[i].key==value){
                    let groupsend = true;
                    onOk(data[i],year,groupsend)
                }
            }
        }

    },

    getGroupRadios(){
        const {group} = this.props;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px'
        };
        let result;
        result = group.map((item,key)=><Radio style={radioStyle} key={item.key} value={item.key}>{item.label}</Radio>);
        return result
    },
    getSpecialRadios(){
        const {special} = this.props;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px'
        };
        let result;
        result = special.map((item,key)=><Radio style={radioStyle} key={item.key} value={item.key}>{item.label}</Radio>);
        return result
    },
    handleYear(value){
       this.setState({year:value})
    },

    render(){

        return <Modal {...this.props} onOk={this.handleOk}>
            <Tabs defaultActiveKey="1" onChange={this.handleTabChange}>
                <TabPane tab="群组" key="1">
                    <RadioGroup onChange={this.handleChange} value={this.state.value}>
                        {this.getGroupRadios()}
                    </RadioGroup>
                </TabPane>
                <TabPane tab="特殊群组" key="2">
                    <Row>
                        <SelectorYear onChange={this.handleYear} />
                    </Row>
                    <Row>
                        <RadioGroup onChange={this.handleChange} value={this.state.value}>
                            {this.getSpecialRadios()}
                        </RadioGroup>
                    </Row>
                </TabPane>
            </Tabs>
        </Modal>
    }
});

module.exports = c;