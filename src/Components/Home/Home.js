import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutUs from '../About us/AboutUs';
import FoodGallery from '../FoodGallery/FoodGallery';
import Footer from '../Footer/Footer';
import HomeBody from '../HomeBody/HomeBody';

const Home = () => {
    return (
        <Container fluid className="bg-dark">
          <Container fluid className="mt-2">
            <Row>  
              <Col>
                <HomeBody />
              </Col>
            </Row>
          </Container>
          <Row>
            <FoodGallery />
          </Row>
          <Row>
            <AboutUs />
          </Row>
      </Container>
    );
};

export default Home;