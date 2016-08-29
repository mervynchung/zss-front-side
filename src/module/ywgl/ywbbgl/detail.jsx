import React from 'react'
import {Button,Icon} from 'antd'
import Panel from 'component/compPanel'

const PanelBar = Panel.ToolBar;
const detail = React.createClass({
    //退回用户管理界面
    back(){
        this.props.onBack();
    },

    render(){
        const {data,title} = this.props;
        const panelBar = <PanelBar>
            <Button onClick={this.back}>
                <Icon type="rollback"/>返回
            </Button>
        </PanelBar>;

        return <Panel title={title} toolbar={panelBar}>
            <div className="fix-table table-bordered table-striped">
            <table>
                <tbody>
                <tr>
                    <td colSpan="4" style={{textAlign:'center'}}>协议内容</td>
                </tr>
                <tr>
                    <th>协议文号</th>
                    <th colSpan="3">{data.xyh}</th>
                </tr>
                <tr>
                    <td>委托企业</td>
                    <td colSpan="3" >{data.wtdw}</td>
                </tr>
                <tr>
                    <td>国税税务登记证号</td>
                    <td>{data.wtdwnsrsbh}</td>
                    <td>地税税务登记证号</td>
                    <td>{data.wtdwnsrsbhdf}</td>
                </tr>


                </tbody>
            </table>
        </div>
            </Panel>
    }
});

module.exports = detail;