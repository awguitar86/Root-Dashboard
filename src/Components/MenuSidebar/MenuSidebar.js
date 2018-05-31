import React, {Component} from 'react';
import './menuSidebar.css';
import RouteLogo from '../../images/routeLogo.svg';
import DashIcon from '../../images/DashboardIcon.svg';
import ReportsIcon from '../../images/ReportsIcon.svg';
import AdminIcon from '../../images/AdminIcon.svg';
import LogoutIcon from '../../images/LockIcon.svg';
import DownArrow from '../../images/DownArrow.svg';
import UpArrow from '../../images/UpArrow.svg';

export default class MenuSidebar extends Component {
    render() {
        return (
            <div className='menu-sidebar'>
                <div className='menu-header'><img src={RouteLogo} alt='Route logo'/></div>
                <a href=''><div className='menu-item'>
                    <div className='menu-item-icon'><img src={DashIcon} alt='dashboard icon'/></div>
                    <div className='menu-item-text'><p>Dashboard</p></div>
                </div></a>
                <a href=''><div className='menu-item'>
                    <div className='menu-item-icon'><img src={ReportsIcon} alt='reports icon'/></div>
                    <div className='menu-item-text'><p>Reports</p></div>
                    <div className='menu-arrows'>
                        <img src={DownArrow} alt='down arrow' className='down-arrow'/>
                        <img src={UpArrow} alt='up arrow' className='up-arrow'/>
                    </div>
                </div></a>
                <a href=''><div className='menu-item'>
                    <div className='menu-item-icon'><img src={AdminIcon} alt='admin icon'/></div>
                    <div className='menu-item-text'><p>Admin</p></div>
                    <div className='menu-arrows'>
                        <img src={DownArrow} alt='down arrow' className='down-arrow'/>
                        <img src={UpArrow} alt='up arrow' className='up-arrow'/>
                    </div>
                </div></a>
                <a href=''><div className='menu-item'>
                    <div className='menu-item-icon'><img src={LogoutIcon} alt='logout icon'/></div>
                    <div className='menu-item-text'><p>Logout</p></div>
                </div></a>
            </div>
        )
    }
}