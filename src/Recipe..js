import React from 'react';
import style from "./recipie.module.css";


const Recipe = ({title, calories, image, ingredients, dietLabels})=> {

    return(
        <div className = {style.recipie}>
        <h1>{title}</h1>
       <p><b>Diet Label : </b>{dietLabels}</p>
        <ol>
            {ingredients.map(ingredient => 
                <li>{ingredient.text}</li>)}
        </ol>       
        <img className={style.image} src={image} alt={title} />
        <p> <b>Calories : </b>{calories}</p>
    </div>
    );
  
}

export default Recipe;