import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutUs from '../About us/AboutUs';
import FoodGallery from '../FoodGallery/FoodGallery';
import HomeBody from '../HomeBody/HomeBody';

const Home = () => {
    return (
        <Container fluid className='bg-warning'>
          <Container className="my-2 ">
            <Row className='pb-4'>  
              <Col>
                <HomeBody />
              </Col>
            </Row>
          </Container>
          <Container fluid className="pb-3 bg-info">
              <FoodGallery />
          </Container>
            <Row className='mt-5'>
              <AboutUs />
            </Row>
      </Container>
    );
};

export default Home;