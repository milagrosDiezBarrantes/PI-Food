import React from "react";
import './Home.module.css'
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
//import Card from '../Card/Card.jsx'
//import Navbar from "../NavBar/Navbar.jsx";
//import LoadingPage from "../LoadingPage/LoadingPage.jsx";
//import Pagination from "../Pagination/Pagination.jsx";
import{
   getRecipes,
   getRecipesName,
   getTypes,
   filterTypes,
   orderName,
   orderScore

} from '../../Actions';
function Home(){
        const dispatch = useDispatch();
        const allTypes =  useSelector(state => state.types);
        const loading =  useSelector(state => state.loading);
        const copyRecipes =  useSelector(state => state.copyRecipes);

    //paginado
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(9)

    const max = copyRecipes.length / perPage;
    const recipesPerPage = Math.ceil(max)
  
    useEffect(()=>{
        dispatch(getRecipes())
        dispatch(getTypes())
    },[dispatch]);

    const [order, setOrder] = useState('') 
    
    function handleClick(event){
        event.preventDefault();
        dispatch(getRecipes())
    }

    function handleInput (event){
        event.preventDefault();
        dispatch(getRecipes(event.target.value))
    }

    function handleSubmit (event){
        event.preventDefault()
        dispatch(getRecipesName(event.target.value))
    }

    function filterTypes(event){
            event.preventDefault()
            dispatch(filterTypes(event.target.value))
        }
    
        
}





export default Home;