import React, { createRef, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  FormControl,
  Accordion,
  Button,
  Form
} from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FoodDetailsCard from "../FoodDetailsCard/FoodDetailsCard";
import Footer from "../Footer/Footer";
import FoodDetails from "../FoodDetails/FoodDetails";

const FoodGallery = () => {
  let SearchInput=React.createRef()
  let [searchData, setSearchData] = useState(' ')
  let [foodsInfo, setFoodInfo] = useState([]);

  let HandelSearchButton = () =>{

    setSearchData(SearchInput.current.value);
    // SearchInput.current.value= ' ';

  }
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoodInfo(data.meals)); 
  }, [searchData]);
  return (
    <Container className='bg-info'>
      <Row className="mt-2 p-4 justify-content-center">
        <h2>
          <b>Food Gallery</b>
        </h2>
        <Col lg={6} md={6} sm={12} xm={12}>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
              style={{ height: "54px" }}
              ref={SearchInput}
            />

            <Button
              style={{ width: "110px" }}
              variant="outline-dark"
              onClick = {HandelSearchButton}
            >
              Search <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="my-1">
        <h2>Search Result for {searchData}</h2>
        {
          foodsInfo.map((foodInfo) => (
            <Col lg={4} md={6} sm={12} xs='auto' className='justify-content-center'>
              <FoodDetailsCard foodInfo={foodInfo} />
            </Col>
          ))
        };
      </Row>
    </Container>
  );
};

export default FoodGallery;
