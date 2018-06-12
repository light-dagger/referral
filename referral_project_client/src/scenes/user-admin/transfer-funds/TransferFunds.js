import React, {Component} from 'react';
import {Layout, Menu, Dropdown, Button, Icon, message, Select, Input, Form, Spin} from 'antd';
import {formValidationDecorator} from '../../../utils/miscUtils';
import {getRegistrationPath, getRestorePath} from "../../../utils/urlBuilder";

const Option = Select.Option;

const FormItem = Form.Item;

const options = [
    {title: 'Main wallet', key: '1'},
    {title: 'Referrals wallet', key: '2'},
    {title: 'Transfer wallet', key: '3'}
];

class TransferFunds extends Component {

    state = {
        loading: false,
    };

    handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
        this.setState({
            selectValue: e.key,
        });
    };


    getForm(getFieldDecorator){
        return (
            <Form onSubmit={this.handleSubmit} className="withdraw-form" style={{maxWidth: '50rem'}}>
                <h3>Select an wallet to transfer:</h3>
                <FormItem>
                    {getFieldDecorator('username', {
                        initialValue: '1',
                        rules: [{required: true, message: 'Please input your email!'}],
                    })(
                        <Select>
                            {options.map((item, index) =>
                                <Option key={index} value={item.key}>{item.title}</Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <h3>Enter an amount:</h3>
                <FormItem>
                    {getFieldDecorator('amount', {
                        rules: [{required: true, message: 'Please input amount!'}],
                    })(
                        <Input prefix={<Icon type="pay-circle-o" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Amount" type="number"/>
                    )}
                </FormItem>
                <h3>Enter recipient username or email:</h3>
                <FormItem>
                    {getFieldDecorator('recipientUser', {
                        rules: [{required: true, message: 'Please input recipient username or email!'}],
                    })(
                        <Input placeholder="Recipient User" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        );
    }

    render() {
        return (
            <div className="user-admin-withdraw">
                <h2 className="text-left">Transfer</h2>
                <Spin spinning={this.state.loading}>
                    {formValidationDecorator.call(this, this.getForm)}
                </Spin>
                <div className="pt-3">
                    <h3>* Minimum amount to transfer $25.</h3>
                    <h3>* You should keep $5 in your wallet prior to transfer.</h3>
                    <h3>For example: if you have $30 or more then you will be allowed to transfer $25.</h3>
                </div>
            </div>
        );
    }
}

const TransferForm = Form.create()(TransferFunds);
export default TransferForm;
