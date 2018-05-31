import React, {Component} from 'react';
import './revenueProtected.css';

export default class RevenueProtected extends Component {
    render() {
        return (
            <div className='revenue-container'>
                <div className='revenue-header'>
                    <h3>Revenue Protected</h3>
                    <div className='revenue-date-range'>
                        <p>From</p>
                        <input />
                        <p>To</p>
                        <input />
                        <div className='revenue-three-dot-menu'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}