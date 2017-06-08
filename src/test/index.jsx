import { Button, Form, Input,Row,Col } from 'antd';
import React from 'react'
import ReactDOM from 'react-dom'
const createForm = Form.create;
const FormItem = Form.Item;
import '../common/lib';


let Demo = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        const {getFieldValue} = this.props.form;
        let value = getFieldValue('text');
        if (!!value && value.trim() != ''){
            let data = this.state.data;
            data.push(value)
            this.setState({data:data})
        }
    },
    getInitialState(){
        return {
            data:[]
        }
    },

    render() {
        const { getFieldProps } = this.props.form;
        let li = this.state.data.map((item,index)=>{
            return <li key={index}>{item}</li>
        });

        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 18 },
        };
        return (
          <Form horizontal >
              <Row>
                  <Col span="12" offset={4}>
                      <FormItem
                          {...formItemLayout}
                          label="用户名">
                          <Input  placeholder="输入" {...getFieldProps('text')} />
                      </FormItem>
                  </Col>
                  <Col span = "2">
                      <Button type="primary" icon="plus" onClick={this.handleSubmit}>添加</Button>
                  </Col>
              </Row>
              <Row>
                  <Col offset={5}>
                      <ul>{li}</ul>
                  </Col>
              </Row>
          </Form>
        );
    },
});

Demo = createForm()(Demo);

ReactDOM.render(<Demo />, document.getElementById("react-content"));