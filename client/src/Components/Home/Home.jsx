import React from "react";
import './Home.css'
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
//import Card from '../Card/Card.jsx'
//import Navbar from "../NavBar/Navbar.jsx";
//import LoadingPage from "../LoadingPage/LoadingPage.jsx";
//import Pagination from "../Pagination/Pagination.jsx";
//import NotFoundPage from "../NotFound/NotFoundPage.jsx";
import { 
    getRecipes, 
    getAllTypes, 
    filterByTypes,
    getRecipesByName, 
    orderByScore,
    createRecipe,
    getRecipesById,
    getDetail,
} from "../../Actions";

export default function Home(){
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.showedRecipes);
    const allTypes =  useSelector(state => state.types);
    const loading =  useSelector(state => state.loading);
   // const [, setOrder] = useState("");

// ------------ PAGINADO --------------

const [page, setPage] = useState(1);
const [perPage, setPerPage] = useState(9)

const max = recipes.length / perPage;
const recipesPerPage = Math.ceil(max)



useEffect(()=>{
    dispatch(getRecipes())
    dispatch(getAllTypes())
},[dispatch]);


function handleClick(event){
    event.preventDefault();
    dispatch(getRecipes())
}

function handleInput (event){
    event.preventDefault();
    SVGAnimateTransformElement(event.target.value);
}

function handleSubmit (event){
    event.preventDefault();
    dispatch(getRecipes());
    setPage(1);
}

function handleFilterByType (event){
    event.preventDefault();
    dispatch(filterByTypes(event.target.value))
    setPage(1);
}

const [order, setOrder] = useState('') 

function handleSort(event){
    event.preventDefault();
    dispatch(orderByName(event.target.value));
    setOrder(`ordered ${event.target.value}`)
}
function handleOrderNames(event){
    event.preventDefault();
    dispatch(rderNames(event.target.value));
    setOrder(`ordered ${event.target.value}`)
}

}