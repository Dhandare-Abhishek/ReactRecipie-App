import React, {useEffect , useState} from 'react';
import './App.css';
import Recipe from "./Recipe.";

const App = () => {

  const APP_ID = "e90d55b9";
  const APP_KEY = "ce4f6ebd9fe2588defe267c81be3d811";

  const [recipes, setRecipes] = useState([]);

// test
  useEffect(() => {
    getRecipee();
  }, []
  );

const getRecipee = async() => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
}

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    
    {recipes.map(recipe => (
      <Recipe 
      key = {recipe.recipe.label}
      title = {recipe.recipe.label}
      calories = {recipe.recipe.calories}
      image = {recipe.recipe.image}
      />

    ))}
    </div>
  );
};

export default App;
