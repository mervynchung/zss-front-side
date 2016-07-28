import React from 'react'
import {Steps,Col,Row } from 'antd'
import Panel from 'component/compPanel'
import Stage0 from './stage0.jsx'
import Stage1 from './stage1.jsx'

const Step = Steps.Step;
const newYwbb = React.createClass({
    getInitialState(){
        return {
            stage:0,
            dataStage0:{},
            dataStage1:{},
            dataStage2:{}
        }
    },
    handleStageChange(value){
        this.setState({stage:value})
    },
    handleStage0Submit(param){
        this.setState({stage:param.stage,dataStage0:param.values})

    },

    render(){
        let {stage,dataStage0,dataStage1,dataStage2} = this.state;
        let stageContent ={
            '0' : <Stage0 data={dataStage0}
                          onSubmit={this.handleStage0Submit}/>,
            '1' : <Stage1 onStageChange={this.handleStageChange}
                          data={dataStage1}/>
        };

        return <Panel>
            <Steps current={stage}  className="steps">
                <Step title="填写协议"  />
                <Step title="填写业务详细信息"  />
                <Step title="确认事务所基本信息"  />
            </Steps>
            <div>
                {stageContent[stage]}
            </div>

        </Panel>
    }
});

module.exports = newYwbb;