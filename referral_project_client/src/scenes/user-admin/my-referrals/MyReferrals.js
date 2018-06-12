import React, {Component} from 'react';
import { Table, Icon, Divider, Row, Col, DatePicker } from 'antd';

import './myreferral.scss';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { Column, ColumnGroup } = Table;

export default class MyReferrals extends Component {
	onChange = (date, dateString) => {

	}
  render() {
  	const data = [
			/*{
			key: '1',
			userName: 'abc123',
			email: 'abc@ck.com',
			joinedOn: '13/01/18',
			status: 'Inactive',
		}, {
			key: '2',
			userName: 'xyz323',
			email: 'xyz@tk.com',
			joinedOn: '14/01/18',
			status: 'Active',
		}*/
	];

    return (
      <div className="user-admin-my-referrals">
      	<h2>My Referred Users</h2>

        <Row>
					<Col span={10}><p>Users list</p></Col>
					<Col span={14}>
						<DatePicker className="datepicker" onChange={this.onChange} placeholder="From" />
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
						title="Username"
						dataIndex="userName"
						key="userName"
					/>
					<Column
						title="Email"
						dataIndex="email"
						key="email"
					/>
					<Column
						title="Joined On"
						dataIndex="joinedOn"
						key="joinedOn"
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
