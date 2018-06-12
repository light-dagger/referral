import React, {Component} from 'react';
import {Table, Icon, Divider, Row, Col, DatePicker} from 'antd';
import './dashboard.scss';

const {MonthPicker, RangePicker, WeekPicker} = DatePicker;
const {Column, ColumnGroup} = Table;

export default class Dashboard extends Component {
    onChange = (date, dateString) => {

    }

    render() {
        const data = [
          /*{
            key: '1',
            activityName: 'Deposit',
            amount: '$30',
            date: '13/01/18',
            status: 'Completed',
        }, {
            key: '2',
            activityName: 'Received',
            amount: '$80',
            date: '14/01/18',
            status: 'Completed',
        }, {
            key: '3',
            activityName: 'Transfer',
            amount: '$500',
            date: '15/01/18',
            status: 'Failed',
        }, {
            key: '4',
            activityName: 'Withdraw',
            amount: '$100',
            date: '16/01/18',
            status: 'Processing',
        }*/
      ];

        return (
            <div className="user-admin-dashboard">
                <h2>Dashboard</h2>
                <h3>Main wallet balance: $0</h3>
                <h3>Referral wallet balance: $0</h3>
                <h3>Transfer wallet balance: $0</h3>


                <h2>Recent Activity</h2>
                <Row>
                    <Col span={10}><p>Activity Logs</p></Col>
                    <Col span={14}>
                        <DatePicker className="datepicker" onChange={this.onChange} placeholder="From"/>
                        <DatePicker className="datepicker" onChange={this.onChange} placeholder="To"/>
                    </Col>
                </Row>

                <Table dataSource={data}>
                    <Column
                        title="#"
                        dataIndex="key"
                        key="key"
                    />
                    <Column
                        title="Activity Name"
                        dataIndex="activityName"
                        key="activityName"
                    />
                    <Column
                        title="Amount"
                        dataIndex="amount"
                        key="amount"
                    />
                    <Column
                        title="Date"
                        dataIndex="date"
                        key="date"
                    />
                    <Column
                        title="Status"
                        dataIndex="status"
                        key="status"
                    />
                </Table>

            </div>
        );
    }
}
