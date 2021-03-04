import React, { useEffect, useState } from "react";
import Cocktail from '../Cocktail/Cocktail';
import "./list.css";

const ListOfCocktail = () => {  
  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop:"2%",
    marginLeft: "20%"
  };
  const [cocktails, setCocktails] = useState([]);
  const [searchItem, setsearchItem] = useState("");
  useEffect(() => {
  function fetchData() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchItem}`)
      .then(res => res.json())
      .then(res => setCocktails(res.drinks))
  }
  fetchData();
}, [searchItem]);

    return (
      <>
        <input onChange={(e)=>setsearchItem(e.target.value)} value={searchItem} className="searchbar" placeholder="Search for your cocktail ..."/>
        <div style={style}>
          {cocktails.map((el) => {
            return <Cocktail el={el} key={el.idDrink} />;
        })}
        </div>
      </>
    )
}

export default ListOfCocktail;
