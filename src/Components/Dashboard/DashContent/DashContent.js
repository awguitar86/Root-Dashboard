import React, {Component} from 'react';
import './dashContent.css';
import RevenueProtected from '../../RevenueProtected/RevenueProtected';

export default class DashContent extends Component {
    render() {
        return (
            <div className='dashboard-content'>
                <h2>Dashboard</h2>
                <RevenueProtected />
            </div>
        )
    }
}