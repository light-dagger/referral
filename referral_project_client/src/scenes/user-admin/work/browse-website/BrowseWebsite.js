import React, {Component} from 'react';
import {Table, Button, Collapse} from 'antd';
import {Link} from 'react-router-dom';
import {getUserWorkVideoPath, getUserWorkWebsitePath} from '../../../../utils/urlBuilder';


export default class BrowseWebsite extends Component {
    render() {
        return (
            <div className="user-admin-browse-website">
                <h2 className="text-left">Browse Website</h2>
                <Link to={getUserWorkWebsitePath()}><Button type="primary" size="large" className="mr-1">Browse Website</Button></Link>
                <Link to={getUserWorkVideoPath()}><Button type="primary" size="large" className="ml-1">Watch Videos</Button></Link>
                <h2 className="mt-3">Sorry! No any ad is available right now. Please come back later.</h2>
            </div>
        );
    }
}
