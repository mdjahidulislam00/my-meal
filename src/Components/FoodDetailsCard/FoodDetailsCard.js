import React,{useState} from "react";
import './FoodDetailsCard.css'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FoodDetailsCard = (props) => {
  let {idMeal, strMeal, strMealThumb, strArea } = props.foodInfo;

  const[likeColor, setLikeColor] = useState('');
  console.log(likeColor)
  const handelLikeColor = () => {
    console.log('heart Clicked')
    const color = likeColor? '' : 'red';
    setLikeColor(color);
  }
  console.log(idMeal)
  return (
    <Container className='mt-2'>
          <Card >
            <Card.Img 
              variant="bottom"
              className="p-2"
              src={strMealThumb}
              style={{ borderRadius: "10px"}}
            />
            <Card.Body>
              <FontAwesomeIcon
              onClick={handelLikeColor}
              style={{color:likeColor, cursor: 'pointer'}}
                icon={faHeart}
                size="lg"
                pull="left"
                border
              />
              <Link to={/foodDetails/+idMeal}>
                <FontAwesomeIcon icon={faComment} size="lg" pull="right" border />
              </Link>
              <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                  <small><b>Country:</b> {strArea}</small>
                </Card.Text>
              <Link to={/foodDetails/+idMeal}>
                <Button variant="primary">Details</Button>
              </Link>
            </Card.Body>
          </Card>
    </Container>
  );
};

export default FoodDetailsCard;
