import React from 'react';
import Recipe from './Recipe';

function Recipes(props){
    const recipes = props.recipes;
    const counter = props.counter;
    const {title,changeView,btnText,btnColor} = props;
    
    return(
        <div>
            {counter>0? <><h1>{title}</h1><h3>Recipes made: {counter}</h3></> : ""}
            <div className="recipesDiv">
            {
                recipes.length>0? recipes.map((recipe,key)=><Recipe btnText={btnText} btnColor={btnColor} clickEvent={changeView} key={key} recipe={recipe}/>) : ""
            }
            </div>
        </div>
    )
}

export default Recipes;