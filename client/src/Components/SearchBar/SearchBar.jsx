import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeName } from "../../Actions";
import './SearchBar.module.css';

export default function SearchBar(){

    const dispatch = useDispatch();
    const [state, setState] = useState('');

    function handleChange(event){
        event.preventDefault()
        setState(event.target.value)
        if(event.target.value === ''){
            dispatch(getRecipeName(''))
        }
    };

    function handleSubmit(event){
        event.preventDefault();
        dispatch(getRecipeName(state))
    }

    return(
        <form className="form_searchBar" onSubmit={event => handleSubmit(event)}>
            <input className="input_searchBar" type="text"  onChange={handleChange} />
            <button className="button_searchBar" type='submit'>
                       <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Búsqueda</span>
            </button>
        </form>
    )
}