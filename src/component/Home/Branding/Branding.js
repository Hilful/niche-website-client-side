import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import a1 from '../../../Images/b1.png'
import a2 from '../../../Images/b2.png'
import a3 from '../../../Images/b3.png'
import a4 from '../../../Images/b4.png'
import a5 from '../../../Images/b5.png'
import './Branding.css'

const Branding = () => {
    return (
        <Container>
            <Row className="branding-style">
                <Col><img src={a1} alt="" /></Col>
                <Col><img src={a2} alt="" /></Col>
                <Col className="premium"><img src={a3} alt="" /></Col>
                <Col><img src={a4} alt="" /></Col>
                <Col><img src={a5} alt="" /></Col>
                
            </Row>
        </Container>
    );
};

export default Branding;