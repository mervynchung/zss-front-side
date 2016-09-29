import React from 'react'
import {Table, Row, Col, Button, Icon, notification, Alert} from 'antd'
import Panel from 'component/compPanel'
import req from 'reqwest';
import SearchForm from '../searchForm'
import Model from '../model'
import merge from 'lodash/merge'
import {isEmptyObject,jsonCopy} from 'common/utils'
import auth from 'common/auth'

const component = React.createClass({
    render(){
        const {title} = this.props;
        return <Panel title={title}>
        </Panel>
    }
})

module.exports = component;