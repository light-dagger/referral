import React, {Component} from 'react';
import {Layout} from 'antd';
import PropTypes from 'prop-types';
import Header from './header/Header';
import history from '../../utils/history';
import './page-wrapper.scss';

const {Footer, Content} = Layout;

const ContextType = {
    history: PropTypes.object.isRequired,
};


export default class PageWrapper extends Component {

    static childContextTypes = ContextType;

    getChildContext() {
        return {
            history: history,
        };
    }

    render() {
        return (
            <div className="page-wrapper">
                <Header />
                <Content>
                    {this.props.children}
                </Content>
                <Footer>
                    <div className="footer-menu">
                        <a>FAQ</a>
                        <a>Terms & Condition</a>
                        <a>About Us</a>
                        <a>Pivacy Policy</a>
                        <a>Contact Us</a>
                    </div>
                </Footer>
            </div>
        );
    }
}
