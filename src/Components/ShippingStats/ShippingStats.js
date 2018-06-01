import React, {Component} from 'react';
import './shippingStats.css';
import Delivered from '../../images/DeliveredBackground.svg';
import OutForDelivery from '../../images/OutForDeliveryBackground.svg';
import InTransit from '../../images/InTransitBackground.svg';
import Exception from '../../images/ExceptionBackground.svg';

import DeliveredIcon from '../../images/RouteCheckmark.svg';
import OutForDeliveryIcon from '../../images/RouteOutForDeliveryIcon.svg';
import InTransitIcon from '../../images/RouteInTransitIcon.svg';
import ExceptionIcon from '../../images/RouteExceptionIcon.svg';

export default class ShippingStats extends Component {
    render() {
        return (
            <div className='shipping-stats'>
                <div className='delivered'>
                        <div className='shipping-stats-headers'>
                            <img src={DeliveredIcon} alt='delivered icon'/>
                            <h3>Delivered</h3>
                        </div>
                        <div className='shipments' >
                            <p>846 Shipments</p>
                        </div>
                </div>
                <div className='out-for-delivery'>
                        <div className='shipping-stats-headers'>
                            <img src={OutForDeliveryIcon} alt='out for delivery icon'/>
                            <h3>Out For Delivery</h3>
                        </div>
                        <div className='shipments'>
                            <p>673 Shipments</p>
                        </div>
                </div>
                <div className='in-transit'>
                        <div className='shipping-stats-headers'>
                            <img src={InTransitIcon} alt='in transit icon'/>
                            <h3>In Transit</h3>
                        </div>
                        <div className='shipments'>
                            <p>587 Shipments</p>
                        </div>
                </div>
                <div className='exception'>
                        <div className='shipping-stats-headers'>
                            <img src={ExceptionIcon} alt='exception icon'/>
                            <h3>Exception</h3>
                        </div>
                        <div className='shipments'>
                            <p>100 Shipments</p>
                        </div>
                </div>
            </div>
        )
    }
}