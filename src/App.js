import React, {useEffect , useState} from 'react';
import './App.css';
import Recipe from "./Recipe.";

const App = () => {

  const APP_ID = "e90d55b9";
  const APP_KEY = "ce4f6ebd9fe2588defe267c81be3d811";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

// test
  useEffect(() => {
    getRecipee();
  }, [query]
  );

const getRecipee = async() => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
}

const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}



  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      
    <div className="recipies">
    {recipes.map(recipe => (
      <Recipe 
      key = {recipe.recipe.label}
      title = {recipe.recipe.label}
      dietLabels = {recipe.recipe.dietLabels}
      calories = {recipe.recipe.calories}
      image = {recipe.recipe.image}
      ingredients = {recipe.recipe.ingredients}
      />

    ))}
    </div>

   
    </div>
  );
};

export default App;
