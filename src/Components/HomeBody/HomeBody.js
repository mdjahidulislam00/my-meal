import React from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import CarouselImage1 from './Images/CarouselImage1.jpg';
import CarouselImage2 from './Images/CarouselImage2.jpg';
import CarouselImage3 from './Images/CarouselImage3.jpg';
import welcomeImage from './Images/image1.jpg';

const HomeBody = () => {
  return (
    <Container fluid>
      <Row className='my-5'>
        <Col lg={7} md={7} xm={12} xs='auto'>
          <Image thumbnail  src={welcomeImage} style={{width:'100%', height:'350px'}} />
        </Col>
        <Col lg={5} md={5} xm={12} xs='auto' className= ' text-white'>
          <h1>Welcome to<br/>FOOD STUDIO</h1>
          <p>We are very happy to say that, here you can see lots of food in different country. you can
            Search here your favorite food by it's name (beef,chicken,agg, noodles, etc) and you can see
            all the details about food like ingredients with it's measure and also you can see how to make
            so lets start with FOOD STDIO.
          </p>
        </Col>
      </Row>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={CarouselImage1} alt="First slide" />
          <Carousel.Caption>
            <h3>beef brisket pot roast</h3>
            <p>Country: American</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={CarouselImage2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Hotel Lobby</h3>
            <p>Country: Bangladesh</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={CarouselImage3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Chicken Fry</h3>
            <p>
              Country: India
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HomeBody;
