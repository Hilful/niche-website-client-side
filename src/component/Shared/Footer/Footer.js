import React from 'react';
import './Footer.css'
import logo from '../../../Images/fav1.jpg';
const Footer = () => {
    return (
        <div className="footer-body">
            <div >
            <div className="row">
                <div className="col">
                    <img src={logo} alt="" />
                    <p>One is to focus on the quality of your bicycle. If you can call out for the best cycle, sustainable then contact us.</p>
                    <h6>Phone: <small> +8801752649975</small></h6>
                    <h6>Email: <small> hawar.gari@mail.co</small></h6>
                </div>
                <div className="col">
                    <h3>Our Services</h3>
                    <p>Offers</p>
                    <p>Orders</p>
                    <p>Delivery Time</p>
                </div>
                <div className="col">
                    <h2>Latest Delivery of most wanted Bicycle</h2>
                    <p>All-City Cycles specializes in on-road riding only, hence the reason you’ll find a fine selection of Road, Gravel, Cyclocross, and Hybrid bikes.
                        November 29, 2021
                    </p>
                    <p>Brompton is one of the most iconic folding bicycle manufacturer. Their range consists of well-engineer folding, and electric folding bikes with rich history and attention to detail.
                        December 31, 2021
                        </p>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Footer;