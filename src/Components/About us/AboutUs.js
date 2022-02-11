import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import myPic from './AboutImage/wallpaper.jpg'

const AboutUs = () => {
    return (
        <Container fluid className="mt-1">
            <Row className='col-12 mb-3'>
                <h1>About Website</h1>
            </Row>
            <Row className='bg-light mt-1'>
                <Col className='col-lg-5 col-sm-12'>
                    <Image src={myPic} roundedCircle  style={{width: '420px', height: '420px', marginTop:'30px'}}/>
                </Col>
                <Col className='col-lg-7 col-sm-12 bg-light'>
                    <p style={{padding:'10px', backgroundColor:'#ccc', borderRadius:'5px', marginTop:'30px'}}>
                        Welcome to My Website Food Studio it's a simple website for api call practices and
                       design, for Design i use Bootstrap 5 with some internal CSS, and for Develop i use
                        react js, and for data use TheMealdb free api.
                        <br/>
                        <h5>codeLink:</h5><h6>https://github.com/mdjahidulislam00/my-meal</h6>
                        <br />
                        <h3>Created by:</h3>
                        <h5>Md. Jahidul Islam <h6>Student of CSE (final year)</h6> </h5>
                        <h5>Email: jahidj2255@gmail.com</h5>
                        <h5>GitHubLink: https://github.com/mdjahidulislam00</h5>
                        <h5>LinkedinLInk: https://www.linkedin.com/in/jahidul-islam-885913224/</h5>
                        <h5>FacebookLink: https://www.facebook.com/jahid.jony.355</h5>  
                    </p>
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
};

export default AboutUs;