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
            dataXY:{},
            dataYW:{},
            dataJG:{}
        }
    },
    handleStageChange(value){
        this.setState({stage:value})
    },
    handleStage0Submit(param){
        this.setState({stage:param.stage,dataXY:param.dataXY})

    },
    handleStage1Submit(param){
        this.setState({stage:param.stage,dataYW:param.dataYW})

    },
    handleStage2Submit(param){
        this.setState({stage:param.stage,dataJG:param.dataJG})

    },

    render(){
        let {stage,dataXY,dataYW,dataJG} = this.state;
        let stageContent ={
            '0' : <Stage0 data={dataXY}
                          onSubmit={this.handleStage0Submit}/>,
            '1' : <Stage1 onStageChange={this.handleStageChange}
                          data={dataYW}/>
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