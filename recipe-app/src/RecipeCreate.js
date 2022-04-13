import React, { useState } from "react";

function RecipeCreate({recipes, handleNewRecipe}) {

  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = ({target}) => setFormData({
    ...formData,
    [target.name]: target.value});

    const handleSubmit = (event) => {
      event.preventDefault();
      handleNewRecipe(formData);
      console.log(formData.photo)
      setFormData(initialFormData);
    }
    
  let formStyle={backgroundColor: "#FFFFFF"};
  if(recipes.length %2 == 0){
    formStyle = {backgroundColor: "#fff0c7"};
  }


  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit} >
      <table>
        <tbody>
          <tr style={formStyle}>
            <td>
              <input name="name" id="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" />
            </td>
            <td>
              <input name="cuisine" id="cuisine" value={formData.cuisine} onChange={handleChange} type="text" placeholder="Cuisine"/>
            </td>
            <td>
              <input name="photo" id="photo" type="url" value={formData.photo} onChange={handleChange} placeholder="URL"/>
            </td>
            <td>
              <textarea name="ingredients" id="ingredients" value={formData.ingredients} onChange={handleChange} placeholder="Ingredients"/>
            </td>
            <td>
              <textarea name="preparation" id="preparation" value={formData.preparation} onChange={handleChange} placeholder="Preparation"/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
