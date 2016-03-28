import React from 'react'
import {Col,Row} from 'antd'
import ReactDom from 'react-dom'

const model ={
    data:{
        name:'胡延兵',
        age:'23',
        sex:'男',
        xl:'本科',
        cs:'广州',
        de:'中山三路',
        byyx:'北京大学',
        zgzh:'34454394',
        barq:'2016-01-01'
    },
    colNum:2,


}

const baseTable = React.createClass({
    render(){
        return <table className="table-bordered table-striped ">
<colgroup></colgroup>
        </table>
    }
})
