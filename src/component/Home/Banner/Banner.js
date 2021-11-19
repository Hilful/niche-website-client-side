import { Typography } from '@mui/material';
import React from 'react';
import { Col, Container } from 'react-bootstrap';
import banner from '../../../Images/banner.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <Container fluid>
           
                <Col className="banner" sm={12}>
                    <Typography variant="h4" gutterBottom component="div">
                    
                        Life is like riding a bicycle. 
                        <br />
                        To keep your balance you must keep moving
                    
                    </Typography>
                </Col>
                <Col className="banner-style"><img src={banner} alt="" /></Col>
            
        </Container>
    );
};

export default Banner;