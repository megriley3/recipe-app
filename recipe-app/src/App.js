import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const handleNewRecipe = (newRecipe) => setRecipes([...recipes, newRecipe]);

  const deleteRecipe = (indexToDelete) => {
    setRecipes(recipes.filter((recipe, index) => index !== indexToDelete));
  };

  

  

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate recipes={recipes} handleNewRecipe={handleNewRecipe}/>
    </div>
  );
}

export default App;
