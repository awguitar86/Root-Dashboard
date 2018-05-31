import React, {Component} from 'react';
import './dashboard.css';
import MenuSidebar from '../MenuSidebar/MenuSidebar';
import DashContent from './DashContent/DashContent';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <MenuSidebar />
                <DashContent />
            </div>
        )
    }
}