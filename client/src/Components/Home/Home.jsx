import React from "react";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import RecipeCard from '../RecipeCard/RecipeCard.jsx';
import Navbar from '../NavBar/NavBar.jsx';
import LoadingPage from './LoadingPage.jsx';
//import NotFoundPage from "../NotFound/NotFoundPage.jsx";
import Pagination from '../Pagination/Pagination.jsx';
import { Link } from "react-router-dom";
import './Home.css';
import{
   getRecipes,
   getRecipeName,
   getDietTypes,
   filterTypes,
   orderName,
   orderSpoonacularScore
} from '../../Actions';


//voy a trabajar con hooks

function Home(){
        const dispatch = useDispatch();
        const recipes = useSelector((state) => state.showedRecipes);
        const dietTypes = useSelector((state) => state.diet);
        const loading = useSelector((state) => state.loading);
        
        const [name, setName] = useState("");
  
//paginado
    const [page, setPage] = useState(1);
    const [perPage] = useState(9)

    const max = recipes.length / perPage;
    const recipesPerPage = Math.ceil(max)
  

    useEffect(()=>{
        dispatch(getRecipes())
        dispatch(getDietTypes())
    },[dispatch]);

    const [order, setOrder] = useState(''); 

    function handleClick(event){
        event.preventDefault();
        dispatch(getRecipes())
    }

    function handleInput (event){
        event.preventDefault();
         setName (event.target.value)
    }

    function handleFilterTypes(event){
            event.preventDefault()
            dispatch(filterTypes(event.target.value))
    }

    function handleOrderName(event){
        event.preventDefault()
        dispatch(orderName(event.target.value))
        setOrder(`Order name: ${event.target.value}`);
    }

     function handleOrderSpoonacularScore(event){
        event.preventDefault();
        dispatch(orderSpoonacularScore(event.target.value));
        setOrder(`Order by score: ${event.target.value}`)
    }
/*
    function handleSort(event){
        event.preventDefault();
        dispatch(orderName(event.target.value));
        setOrder(`ordenar ${event.target.value}`)
    }
   */

if (loading){
        return (    
        <div className="home_container"> 
            <div>
                <Navbar>
                    handleFilterTypes={handleFilterTypes}
                    handleOrderName={handleOrderName}
                    handleOrderSpoonacularScore={handleOrderSpoonacularScore}
                    handleClick={handleClick}
                    handleInput={handleInput}
               </Navbar>
        </div>

            <div>
                <LoadingPage/>
            </div>
            
        </div>
    ) 
} else {
    return(
        <div className="home_container"> 
            <div>
                <Navbar
                  handleFilterTypes={handleFilterTypes}
                  handleOrderName={handleOrderName}
                     handleOrderSpoonacularScore={handleOrderSpoonacularScore}
                     handleClick={handleClick}
                     handleInput={handleInput}
                />
            </div>
            <div className='link_card'>
                {recipes?.slice((page - 1) * perPage, (page - 1) * perPage + perPage).map((recipe)=>{
                        console.log(recipe);
                            return( 
                           <Link className='link_card' to={`/recipes/${recipe.id}`}>
                                <RecipeCard 
                                id={recipe.id} 
                                key={recipe.id} 
                                image={recipe.image} 
                                name={recipe.name} 
                                diet={recipe.diet}  
                                createInDb={recipe.createdInDb}
                                />
                                <span class="transition_card"></span>
                                 <span class="gradient_card"></span>
                           </Link>  
                        );
                    })
                 }
            </div>
            {recipes && recipes.hasOwnProperty('error') ? null : 
            <Pagination page={page} 
                        setPage={setPage} 
                        recipesPerPage={recipesPerPage}/>}  
        </div>
    )
}
}
       
export default Home;
