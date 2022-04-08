import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import './Button.css';
import SearchBar from "../SearchBar/SearchBar.jsx";


function NavBar ({diets, handleInput, handleSubmit, handleSort, handleFilterTypes, handleOrderName, handleOrderSpoonacularScore}){
  return(
      <nav>
          <div className="navbar_container">

              <div>
                  <label className="navbar_label">Ordenar por: Lentra </label>
                  <select className="select_navbar" onChange={event => handleOrderName(event)}>  
                      <option className="option_navbar" value="ascendente">Aa to Zz</option> 
                      <option className="option_navbar" value="descendente">Zz to Aa</option> 
                      <option value="all">Order By Name</option>
                  </select>


                  <label className="navbar_label">Puntuación </label>
                  <select className="select_navbar" defaultValue ='handleOrderSpoonacularScore' onChange={event => handleOrderSpoonacularScore (event)}>
                      <option className="option_navbar" value="handleOrderSpoonacularScore" disabled>Ordenar por puntuación</option>
                      <option className="option_navbar" value="top">Puntuación más alta</option> 
                      <option className="option_navbar" value="low">Puntuación más baja</option> 
                  </select>
              </div>
              
              <div>
               {/*    <label className="navbar_label">Filter by: </label>
                  <select className="select_navbar" defaultValue ='getRecipes' onChange={event => handleInput(event)}>
                      <option className="option_navbar" value="All">Created In</option>    
                      <option className="option_navbar" value="api">Api</option> 
                      <option className="option_navbar" value="createdInDb">Data Base</option> 
                  </select>
              */}

                  <select onChange={event => handleFilterTypes (event)} className="select_navbar">
                         <option value="all">Filstrar por Dieta</option>
                             {diets?.map((d) => (
                                <option key={d.name} value={d.name}>
                                            {" "}
                                    {d.name[0].toUpperCase() + d.name.slice(1)}
                                </option>
                              ))}
                    </select>


                    <select className="select_navbar" defaultValue ='diets' onChange={event => handleFilterTypes(event)}>   
                        <option className="option_navbar" value="diets" disabled>diets</option>
                        <option className="option_navbar" value="all">All Types</option>
                            {diets && diets.map((t) => (
                            <option className="option_navbar" value={t.name} key={t.name}>{t.name}</option>))}
                    </select>                 
              </div>
              <div>
                  <SearchBar/>
              </div>
              <div>
                  <Link to='/CreateRecipe'>
                      <button>
                        <span class="transition"></span>
                         <span class="gradient"></span>
                         <span class="label">Crear Receta</span>
                     </button>

                </Link>
              </div>
         
          </div>
      </nav>
      
  )
};

export default NavBar;