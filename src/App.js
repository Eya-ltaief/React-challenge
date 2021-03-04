import React,{useState} from "react";
import './App.css';
import ListOfCocktail from './component/ListCocktail/ListOfCocktail'
import { Route, Switch } from "react-router-dom";
import Error from "./component/Error";
import Navigation from "./component/Navigation/Navigation";
import Ingredients from "./component/Ingredients/Ingredients";
import SideBar from "./component/SideBar";
function App() {
  return (
    <div className="App">
      <Navigation  />
      <SideBar />
      <Switch>
        <Route exact path="/" component={ListOfCocktail} />
        <Route path="/ListOfCocktail/:idDrink" component={Ingredients} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
