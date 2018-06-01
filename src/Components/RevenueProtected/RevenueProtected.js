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
                <div className='revenue-body'>
                    <div className='revenue-line-graph'>
                        <div className='graph-lines'>
                            <p>1000</p>
                            <div className='line'></div>
                        </div>
                        <div className='graph-lines'>
                            <p>1000</p>
                            <div className='line'></div>
                        </div>
                        <div className='graph-lines'>
                            <p>1000</p>
                            <div className='line'></div>
                        </div>
                        <div className='graph-lines'>
                            <p>1000</p>
                            <div className='line'></div>
                        </div>
                        <div className='graph-lines'>
                            <p>1000</p>
                            <div className='line'></div>
                        </div>
                        <div className='graph-lines'>
                            <p>1000</p>
                            <div className='line'></div>
                        </div>
                        <div className='graph-lines'>
                            <p>1000</p>
                            <div className='line'></div>
                        </div>
                        <div className='graph-months'>
                            <div className='months'>
                                <p>30 JUN</p>
                                <p>15 JUL</p>
                                <p>30 JUL</p>
                                <p>15 AUG</p>
                                <p>30 AUG</p>
                                <p>15 SEP</p>
                                <p>30 SEP</p>
                            </div>
                        </div>
                    </div>
                    <div className='revenue-charts'>
                        <div className='protected-transactions'>
                            <div className='protected-circle-chart'>
                                <h3>0%</h3>
                                <p>Protected<br/>Transactions</p>
                            </div>
                            <div className='protected-transaction-info'>
                                <div className='total-transactions'>
                                    <p>Total Transactions</p>
                                    <h3>8.6K</h3>
                                </div>
                                <hr/>
                                <div className='protected'>
                                    <p>Protected</p>
                                    <h3>6.5K</h3>
                                </div>
                            </div>
                        </div>
                        <div className='claim-approval'>
                            <div className='claim-circle-chart'>
                                <h3>0%</h3>
                                <p>Claim<br/>Approval</p>
                            </div>
                            <div className='claim-approval-info'>
                                <div className='cai-left'>
                                    <div>
                                        <p>Total Claims</p>
                                        <h3>8.6K</h3>
                                    </div>
                                    <hr/>
                                    <div>
                                        <p>Approved</p>
                                        <h3>7.9K</h3>
                                    </div>
                                </div>
                                <hr className='claim-divider'/>
                                <div className='cai-right'>
                                    <div>
                                        <p>Pending</p>
                                        <h3>2.3K</h3>
                                    </div>
                                    <hr/>
                                    <div>
                                        <p>Denied</p>
                                        <h3>1.2K</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}