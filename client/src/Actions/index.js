import axios from 'axios';

//en el action despacho las funciones y le paso a reducer


export function getRecipes(){
    return async function(dispatch) {
        dispatch({type: 'Loading'})
        let json = await axios.get("/recipes")
        return dispatch({
            type: 'getRecipes',
            payload: json.data
        })
    }
};
export function getRecipesName(name){
    return async function(dispatch){
        dispatch({type: 'Loading'})
        let json = await axios ('/recipes?name=' + name)
        return dispatch({
            type: 'getRecipesName',
            payload: json.data
        })
    }
};
//filtrar por ID
export function getRecipesId(id){
    return async function(dispatch){
        if(id === 'clear'){
            dispatch({type: 'getRecipesId',
            payload: 'clear'})
        } else{
            dispatch({type: 'Loading'})
        let json = await axios ('/recipes/' + id)
            return dispatch({
                type: 'getRecipesId',
                payload: json.data
            })
        }
    }    
};
//TODOS los tipos de dietas
export function getTypes(){
    return async function (dispatch){
        let json = await axios ('/types')
        return dispatch({
            type: 'getTypes',
            payload: json.data
        })
    }
};
//filtro por dieta
export function filterTypes(payload){
    return{
        type: 'filterTypes',
        payload
    }
}
//post Recipe - crear
export function createRecipe (payload){
    return async function(dispatch){
        const pokemon = await axios.post('/recipes', payload)
        return dispatch({
            type: 'createRecipe',
            payload: pokemon
        })
    }
}

export function cleanDetails (){
    return {
        type: "getDetails",
        payload: [],
      };
};

export function orderName(payload){
    return{
        type: 'orderName',
        payload
    }
}
//por puntuación
export function orderScore (payload){
    return{
        type: 'orderScore',
        payload
    }
}
//para eliminar
export function deleteRecipe(id){
    return async function(dispatch){
        await axios.delete('/recipes/' + id)
        return dispatch({
            type: 'deleteRecipe',
        })
    }

}


