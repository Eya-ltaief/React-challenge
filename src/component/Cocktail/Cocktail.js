import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import './cocktail.css';
const Cocktail = ({el}) => {
    return (
        <div className="card">
            <Card style={{ width: '19rem' }} >
            <Card.Img className="image-card" variant="top" src={el.strDrinkThumb} />
            <Card.Body className="body-card">
                <Card.Title>{el.strDrink}</Card.Title>
                <Card.Text>{el.strTags}</Card.Text>
                <Card.Text>{el.strCategory}</Card.Text>
                <Card.Text>{el.strAlcoholic}</Card.Text>
                <Link to={`/ListOfCocktail/${el.idDrink}`}>
                    <Button variant="primary" className="btn">Check the ingredients</Button>
                </Link>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Cocktail;
