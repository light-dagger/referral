import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {Menu, Button} from 'antd';
import {getActiveMenuIndex} from '../../../utils/miscUtils';
import {logout} from '../../../services/session/authorization';
import {
    getUserPaymentDetailsPath,
    getHomePath,
    getUserDepositPath,
    getUserPromotionPath,
    getUserWorkPath,
    getUserWorkVideoPath,
    getUserWorkWebsitePath,
    getUserReferPath,
    getUserReferralsPath,
    getUserKycPath,
    getUserTransferFundsPath,
    getUserWithdrawPath,
    getUserSettingsPath,
    getUserDashboardPath,
} from '../../../utils/urlBuilder';

const {SubMenu} = Menu;

const defaultMenuItems = [
    {title: '', link: getHomePath},
    {title: 'Dashboard', link: getUserDashboardPath},
    {title: 'Deposit', link: getUserDepositPath},
    {title: 'Promotion', link: getUserPromotionPath},
    {
        title: 'Work',
        link: getUserWorkPath,
        subItems: [
            {title: 'Browse websites', link: getUserWorkWebsitePath},
            {title: 'Watch Videos', link: getUserWorkVideoPath},
        ],
    },
    {title: 'Refer & Earn', link: getUserReferPath},
    {title: 'My Referrals', link: getUserReferralsPath},
    {title: 'KYC', link: getUserKycPath},
    {title: 'Payment Details', link: getUserPaymentDetailsPath},
    {title: 'Transfer Funds', link: getUserTransferFundsPath},
    {title: 'Withdraw', link: getUserWithdrawPath},
    {title: 'Settings', link: getUserSettingsPath},
];

export default function LeftSideMenu({menuItems = defaultMenuItems, showLogout = true, activeMenuKey}) {
    const menuMatched = getActiveMenuIndex(menuItems);
    const defaultSelectedKey = activeMenuKey || menuMatched.index;
    const defaultOpenKeys = menuMatched.subMenu;
    return (
        <div className="left-side-menu">
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[`${defaultSelectedKey}`]}
                defaultOpenKeys={defaultOpenKeys}
                style={{height: '100%'}}>
                {menuItems.map((item, index) => {
                    return !item.subItems ?
                        <Menu.Item key={index}><NavLink to={item.link()}>{item.title}</NavLink></Menu.Item> :
                        <SubMenu key="sub0" title={<NavLink to={item.link()}>{item.title}</NavLink>}>
                            {item.subItems.map((subItem, subIndex) =>
                                (<Menu.Item key={`sub${subIndex}`}><NavLink
                                    to={subItem.link()}>{subItem.title}</NavLink></Menu.Item>)
                            )}
                        </SubMenu>;
                }
                )}
            </Menu>
            {showLogout && <div style={{textAlign: 'center'}}>
                <Button type="primary" icon="logout" style={{margin: '3rem auto 2rem auto'}}
                    onClick={() => logout()}> Logout</Button>
            </div>}
        </div>
    );
}
LeftSideMenu.propTypes = {
    menuItems: PropTypes.array,
    showLogout: PropTypes.bool,
    activeMenuKey: PropTypes.string,
};
