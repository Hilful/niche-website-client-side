import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutus from '../../Images/aboutus.jpg';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import './AboutUs.css';

const AboutUs = () => {
    return (
              <div>

                <Header/>
                    <Container  className="main">
                        <Row>
                            <Col sm="12" lg="6">    
                                <h1>Our mission</h1>
                                <p>
                                
                                    Hawar-Gari started in a small Town in Khulna in 1971, but our founders always saw something bigger. Fifty years later, we're on a mission to make our world a better place to live and ride.

                                    We build only products we love, provide incredible hospitality to our customers, and change the world by getting more people on bikes.
                                </p>
                            
                            </Col>
                            <Col sm="12" lg="6">
                                <img className="picture" src={aboutus} alt="" />
                            </Col>
                        </Row>
                    </Container>
                <Footer/>

              </div>  
                
    );
};

export default AboutUs;