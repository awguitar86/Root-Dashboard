import React, {Component} from 'react';
import './dashContent.css';
import RevenueProtected from '../../RevenueProtected/RevenueProtected';
import ShippingStats from '../../ShippingStats/ShippingStats';
import PackagesInTransit from '../../PackagesInTransit/PackagesInTransit';

export default class DashContent extends Component {
    render() {
        return (
            <div className='dashboard-content'>
                <h2>Dashboard</h2>
                <RevenueProtected />
                <ShippingStats />
                <PackagesInTransit />
            </div>
        )
    }
}