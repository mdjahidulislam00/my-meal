import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid>
            <Row className='bg-warning'>
                <Col className='m-3 d-flex align-items-center justify-content-center'>
                    <p style={{ fontSize:'15px', color:'black'}}>2021 ©CopyRight Reserved for JAHID</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;