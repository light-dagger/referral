import React, {Component} from 'react';
import {Table, Button, Collapse} from 'antd';
import {getUserWorkVideoPath, getUserWorkWebsitePath} from '../../../utils/urlBuilder';
import {Link} from 'react-router-dom';

const Panel = Collapse.Panel;
const {Column, ColumnGroup} = Table;

const data = [{
    key: '1',
    tvcName: 'Netflix',
    amount: '$0.10',
}, {
    key: '2',
    tvcName: 'Axe',
    amount: '$0.17',
}, {
    key: '3',
    tvcName: 'Pandora UK',
    amount: '$0.22',
}];


export default class Work extends Component {
    render() {
        return (
            <div className="user-admin-work">
                <h2 className="text-left">Work</h2>
                <Link to={getUserWorkWebsitePath()}><Button type="primary" size="large" className="mr-1">Browse Website</Button></Link>
                <Link to={getUserWorkVideoPath()}><Button type="primary" size="large" className="ml-1">Watch Videos</Button></Link>
                <div className="mt-3">
                    <Collapse accordion>
                        <Panel header="Available tasks" key="1">
                            <Table dataSource={data}>
                                <Column
                                    title="#"
                                    dataIndex="key"
                                    key="key"
                                />
                                <Column
                                    title="TVC Name"
                                    dataIndex="tvcName"
                                    key="tvcName"
                                />
                                <Column
                                    title="Reward amount"
                                    dataIndex="amount"
                                    key="amount"
                                />
                                <Column
                                    title="Watch"
                                    dataIndex="btnWatch"
                                    key="btn"
                                    render={() => <Button type="primary">Watch</Button>}
                                />
                            </Table>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        );
    }
}
