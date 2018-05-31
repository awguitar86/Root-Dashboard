import React, {Component} from 'react';
import './menuSidebar.css';
import RouteLogo from '../../images/routeLogo.svg';

export default class MenuSidebar extends Component {
    render() {
        return (
            <div className='menu-sidebar'>
                <div className='menu-header'><img src={RouteLogo} alt='Route logo'/></div>
                <div className='menu-item'>
                    Dashboard
                </div>
                <div className='menu-item'>
                    Reports
                </div>
                <div className='menu-item'>
                    Admin
                </div>
                <div className='menu-item'>
                    Logout
                </div>
            </div>
        )
    }
}