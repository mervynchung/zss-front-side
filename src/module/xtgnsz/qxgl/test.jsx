import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Form, Input,Modal} from 'antd';
export default function confirm() {
    let div = document.createElement('div');
    document.body.appendChild(div);

    let d;

    function close() {
        d.setState({
            visible: false
        });
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
    }

    function onCancel() {
        let cancelFn = this.props.onCancel;
        if (cancelFn) {
            let ret;
            if (cancelFn.length) {
                ret = cancelFn(close);
            } else {
                ret = cancelFn();
                if (!ret) {
                    close();
                }
            }
            if (ret && ret.then) {
                ret.then(close);
            }
        } else {
            close();
        }
    }

    function onOk() {
        let okFn = this.props.onOk;
        if (okFn) {
            let ret;
            if (okFn.length) {
                ret = okFn(close);
            } else {
                ret = okFn();
                if (!ret) {
                    close();
                }
            }
            if (ret && ret.then) {
                ret.then(close);
            }
        } else {
            close();
        }
    }


    let Dialog = React.createClass({
        handleSubmit(){
            this.props.onSubmit(this.props.form.getFieldsValue())
        },
        render(){
            const { getFieldProps } = this.props.form;
            const formItemLayout = {
                labelCol: {span: 6},
                wrapperCol: {span: 18}
            };
            return <div className="qxgl-dialog">
                <Modal
                  onOk={this.handleSubmit}
                  visible
                  title="编辑"
                  width="420">
                    <Form horizontal>
                        <FormItem {...formItemLayout} label="名称">
                            <Input  {...getFieldProps('name')}  />
                        </FormItem>
                        <FormItem {...formItemLayout} label="描述">
                            <Input  {...getFieldProps('description')}  />
                        </FormItem>
                    </Form>
                </Modal>
            </div>

        }
    });
    Dialog = Form.create({
        mapPropsToFields(props) {
            let result = {};
            for (let prop in props.data) {
                result[prop] = {value: props.data[prop]}
            }
            return result;
        }
    })(Dialog);

    ReactDOM.render(<Dialog />, div, function () {
        d = this;
    });

    return {
        destroy: close
    };
}