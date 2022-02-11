import React from "react";
import { Row, Col, Container, Image, Nav} from "react-bootstrap";
import { Link  } from "react-router-dom";
import Logo from "./Logo/main-logo.jpg";

const Header = () => {
  return (
    <Container fluid className="bg-dark">
      <Row className="bg-warning">
        <Col lg={3} className="p-2">
          <Image
            src={Logo}
            className="img-fluid rounded-circle"
            style={{ height: "150px" }}
          />
        </Col>
        <Col
          lg={6}
          className="d-flex align-items-center justify-content-center"
        >
          <p>
            <span className="text-dark" style={{ fontSize: "60px" }}>
              FOOD STUDIO
            </span>
            <small style={{ fontSize: "12px", color: "white" }}>
              find and make your favorite food.
            </small>
            <br />
          </p>
        </Col>
        <Col lg={3} className="d-flex justify-content-end mt-1">
          <Nav variant="tabs" defaultActiveKey="/home" fixed="top">
          <Nav.Item>
              <Link to='/home' style={{textDecoration:'none'}}>
                <Nav.Link to='/home' eventKey='/home' style={{ color: "black"}} href="/home">
                    Home
                  </Nav.Link>
              </Link>
          </Nav.Item>
          <Nav.Item>
              <Link to='/foodGallery' style={{textDecoration:'none'}}>
                <Nav.Link style={{ color: "black" }} href='/foodGallery'>
                  Food Gallery
                </Nav.Link>
              </Link>
          </Nav.Item>
            <Nav.Item>
              <Link to='/about-us' style={{textDecoration:'none'}}>
              <Nav.Link style={{ color: "black" }} href='/aboutUs'>
                  About us
                </Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
