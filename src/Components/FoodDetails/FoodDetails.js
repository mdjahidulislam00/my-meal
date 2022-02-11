import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Table,
  Form,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import youTubeIcon from "./iconPic/youtubeIcon.png";

const FoodDetails = () => {
  const { foodId } = useParams();
  console.log(foodId);
  const [mealDetails, setMealDetails] = useState({});
  console.log(mealDetails);
  let {
    strMeal,
    strMealThumb,
    strYoutube,
    strInstructions,
    strIngredient1,
    strMeasure1,
    strIngredient2,
    strMeasure2,
    strIngredient3,
    strMeasure3,
    strIngredient4,
    strMeasure4,
    strIngredient5,
    strMeasure5,
    strIngredient6,
    strMeasure6,
    strIngredient7,
    strMeasure7,
    strIngredient8,
    strMeasure8,
    strIngredient9,
    strMeasure9,
    strIngredient10,
    strMeasure10,
    strIngredient11,
    strMeasure11,
    strIngredient12,
    strMeasure12,
    strIngredient13,
    strMeasure13,
    strIngredient14,
    strMeasure14,
    strIngredient15,
    strMeasure15,
  } = mealDetails;
  // let{strMeal}=mealDetails();
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMealDetails(data.meals[0]))
  }, [mealDetails]);
  return (
      <Container className="bg-success" fluid>
        <Container>
          <Row className="mb-4 mt-2 justify-content-center">
            <h1>Food Details</h1>
            <Col className="col-7 mt-3 color-light">
              <h1 style={{ color: "orange" }}>Ingredient and Measure</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{strIngredient1}</td>
                    <td>{strMeasure1}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient2}</td>
                    <td>{strMeasure2}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient3}</td>
                    <td>{strMeasure3}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient4}</td>
                    <td>{strMeasure4}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient5}</td>
                    <td>{strMeasure5}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient6}</td>
                    <td>{strMeasure6}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient7}</td>
                    <td>{strMeasure7}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient8}</td>
                    <td>{strMeasure8}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient9}</td>
                    <td>{strMeasure9}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient10}</td>
                    <td>{strMeasure10}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient11}</td>
                    <td>{strMeasure11}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient12}</td>
                    <td>{strMeasure12}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient13}</td>
                    <td>{strMeasure13}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient14}</td>
                    <td>{strMeasure14}</td>
                  </tr>
                  <tr>
                    <td>{strIngredient15}</td>
                    <td>{strMeasure15}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col className="col-5 py-3">
              <h1 style={{ color: "orange" }}>{strMeal}</h1>
              <Image className="img-thumbnail" src={strMealThumb} />
            </Col>
            <Row className="col-12">
              <Col>
                <h1 style={{ color: "orange" }}>How do you make...</h1>
                <p
                  style={{
                    backgroundColor: "white",
                    color: "gray",
                    fontSize: "15px",
                    padding: "20px",
                  }}
                >
                  {strInstructions}
                  <br />
                  <br />
                  <h3>On Youtube </h3>{" "}
                  <a href={strYoutube}>
                    {" "}
                    <Image
                      src={youTubeIcon}
                      style={{ width: "150px", height: "100px" }}
                    />
                  </a>
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <h1>Share Your Experience About This Food</h1>
              <Col className="col-6 mt-5 ">
                <Form border>
                  <h5>Did you Test That?</h5>
                  <div className="col-2">
                    <Form.Check type="radio" label='Yes' name="TestType" />

                    <Form.Check type="radio" label="No"  name="TestType" />

                    <Form.Check type="radio" label="Want To"  name="TestType" />
                  </div>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>How it was Test</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Row>
        </Container>
          <Footer />
      </Container>
  );
};

export default FoodDetails;
