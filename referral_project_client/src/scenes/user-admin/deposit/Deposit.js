import React, {Component} from 'react';
import {Layout, Menu, Dropdown, Button, Icon, message} from 'antd';

import './deposit.scss';

export default class Deposit extends Component {
    state = {
        selectValue: '1',
    }

    handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
        this.setState({
            selectValue: e.key,
        });
    }

    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">Etherium instant deposit</Menu.Item>
                <Menu.Item key="2">Cash deposit</Menu.Item>
            </Menu>
        );
        const {selectValue} = this.state;

        return (
            <div className="user-admin-deposit">
                <h2>Deposit</h2>
                <h3>Selet a deposit method:</h3>
                <Dropdown overlay={menu}>
                    <Button>
                        {selectValue === '1' ? 'Etherium instant deposit' : 'Cash deposit'} <Icon type="down"/>
                    </Button>
                </Dropdown>

                <div className="content">
                    {selectValue === '1' ? (
                        <div>
                            <p>Send funds to following Etherium address:</p>
                            <p>0x9bfd5c50bf3d75d3da577d237434edc4f9a924a7</p>
                        </div>
                    ) : (
                        <p>*Contact with Regional Admin for F2F cash deposit</p>
                    )}
                </div>

                <Button type="primary">Submit</Button>
            </div>
        );
    }
}
