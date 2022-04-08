import React from "react";
import "./RecipeCard.module.css";

//creo la funcion card con lo que me pide el readme img, name, id
export default function RecipeCard({ image, name, diet, id, key }) {
  console.log(diet);
  return (
    <div className="container_card">
      <div className="image_card_container">
        <img src={image} className="image_card" alt="not found"  />
      </div>

      <div className="detail_card_container">
        <h2 className="name_recipe_card">
          {name[0].toUpperCase() + name.slice(1)}
        </h2>
        {diet?.map((diet) => (
          <p className="card_par" key={key}>
            {diet}
          </p>
        ))}
      </div>
    </div>
  );
}
