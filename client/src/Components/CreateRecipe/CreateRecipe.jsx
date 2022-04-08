import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createRecipe, getDietTypes, getRecipes } from "../../Actions";
import {useDispatch, useSelector} from 'react-redux'
import './CreateRecipe.css';


export default function CreateRecipe(){

    function Validation(input){
        
        let error = {required: false};

        if(!input.name){
            error.name = 'Por favor, ingrese bien el nombre de la receta'
            error.required = true;
        } else if (!/\S{1,15}[^0-9]/.test(input.name)){
            error.name = 'Nombre invalido';
            error.required = true
        }
        if(!input.summary){
            error.summary = 'Es requerido el resumen del plato'
            error.required = true
        } else if (!/\S{1,15}[^0-9]/.test(input.summary)){
            error.summary = 'resumen invalido';
            error.required = true
        }
        if(input.spoonacularScore <= 0 || input.spoonacularScore > 100){
            error.spoonacularScore = 'Puntuación debe estar entre 0 y 100'
            error.required = true
        }
        if(input.healthScore <= 0 || input.healthScore > 100){
            error.healthScore = 'Nivel de comida saludable debe estar entre 0 y 100'
            error.required = true
        }

        
        return error;
    }
    
   //const navigate = useNavigate()
    const dispatch = useDispatch();
    const diets = useSelector((state)=>state.diets);
    console.log(diets) 
    const [error, setError] = useState({required: true});
    const [input, setInput] = useState({
        name: '',
        summary: '',
        healthScore:0,
        spoonacularScore:0,
        steps: [],
       
    })


    function handleChange(event){
        setInput({
            ...input, 
            [event.target.name]:event.target.value 
        })
        
     let objError = Validation({...input, [event.target.name] : event.target.value})
        setError(objError)
    }

    function handleSelect(event){
        setInput({
            ...input, diets: [event.target.value] 
        })
        let objError = Validation({...input, [event.target.name] : event.target.value})
        setError(objError)
    }


    function handleSubmit(event){
        if(error.required){
            event.preventDefault()
            alert('Debes completar toda la información requerida')
        } else { event.preventDefault();
            dispatch(createRecipe(input))
            alert('Receta creada con Éxito!!')
            setInput({
                name:'',
                summary:'',
                healthScore:0,
                spoonacularScore:0,
                steps: [],
                diets: [],
            })}       
    }

    function handleCheck(e){
        if(e.target.checked){
            setInput({
                ...input,
                type: e.target.value
            })
        }
    }
  /*  function handleDelete(option){
        setInput({
            ...input,
            type: input.type.filter(type=>type !== option)
        })
    }*/

    useEffect(()=>{
        dispatch(getDietTypes());
    },[dispatch]);
    
    return(
        <div className="body">
            <h1 className="h1">Crea tu Receta!</h1>
            <form className="form" onSubmit={event=>handleSubmit(event)}>
                <div className="div">
                    <label className="label" htmlFor="">Nombre: </label>
                    <input className='input' type="text" value={input.name} name='name' placeholder="Enter a name" onChange={handleChange}/>
                    {!error.name ? null : (<span className="span">{error.name}</span>)}
                </div>
               
                <div className="div">
                    <label className="label" htmlFor="">Resumen: </label>
                    <input className='input' type='text' value={input.summary} name='summary' placeholder="Enter a value" onChange={handleChange}/>
                    {!error.summary ? null : (<span className="span">{error.summary}</span>)}
                </div>

                <div className="div">
                    <label className="label" htmlFor="">Puntuación: </label>
                    <input className='input' type='number' value={input.spoonacularScore} name='spoonacularScore' placeholder="Enter a value" onChange={handleChange}/>
                    {!error.spoonacularScore ? null : (<span className="span">{error.spoonacularScore}</span>)}
                </div>

                <div className="div">
                    <label className="label" htmlFor="">Nivel de comida saludable: </label>
                    <input className='input' type='number' value={input.healthScore} name='healthScore' placeholder="Enter a value" onChange={handleChange}/>
                    {!error.healthScore ? null : (<span className="span">{error.healthScore}</span>)}
                </div>

                <div className="div">
                    <label className="label" htmlFor="">Paso a Paso: </label>
                    <input className='input' type='text' value={input.steps} name='steps' steps="Enter a value" onChange={handleChange}/>
                    {!error.steps ? null : (<span className="span">{error.steps}</span>)}
                </div>


                <div className="div">
                    <label className="label">Type:</label>
                    <select className="select" onChange={event=>handleSelect(event)}>
                    { diets && diets.map((diets) => {
                         console.log(diets)
                        return (
                            <option className="option" value={diets.name}  key={diets.name}>
                                {diets.name}
                            </option>
                        );
                        })}
                    </select>
                    {!error.diets ? null : (<span className="span">{error.diets}</span>)}
                </div>
             

         


                { /*<div className="div">
                  {input.type.map((el) => {
                    return (
                        <div className="div_types" key={el}>
                            <h4 className="h4">{el}</h4>
                            <button className="x_button" onClick={() => {handleDelete(el)}}>x</button>
                        </div>
                    );
                  })}
                </div>
*/}
                <div className="div">
                    <label className="label" htmlFor="">Image:</label>
                    <input className='input' type='text' value={input.img} name='img' placeholder="Enter a URL" onChange={handleChange}/>
                </div>

                <button className="create_button" type="submit">Create recipe!</button>

            </form>
            <Link to='/Home'><button className="my_button">Back to Home</button></Link>
        </div>
    )
}