import axios from "axios";
import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';
import { Card, Button } from "react-bootstrap";
import "./ingredients.css";
const Ingredients = ({ match }) => {
  const style ={
    alignItems : "center",
    marginTop:"50%"
  }
  let history=useHistory();
  const { idDrink } = match.params;
  
  const [el, setEl] = useState(null);
  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then((res) => setEl(res.data.drinks[0]))
      .catch((err) => console.log(err.response));
  }, [idDrink]);

  return (
    <div className="ing">
      {el ? (
          <div styles = {style} className="body-card" style={{ width: '70%' }}>
          <Card >
            <div className="cardd" style={{ width: '50%' }}>
            <Card.Img variant="top" src={el.strDrinkThumb} />
            <div style={{ width: '80%' }} >
            <Card.Body className="card-body" >
                <Card.Title>{el.strTags}</Card.Title>
                <Card.Text><h5>Main ingredient</h5>{el.strIngredient1}</Card.Text>
                <Card.Text><h5>Instructions</h5>{el.strInstructions}</Card.Text>
                <Button variant="outline-secondary" onClick={()=>history.push('/')}>Back to homepage</Button>
            </Card.Body>
            </div>
            </div>
            </Card>
            
        </div>
      ) : (
        <img
          src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
          alt="spinner"
        />
      )}
    </div>
  );
};

export default Ingredients;
