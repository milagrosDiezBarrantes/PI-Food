import axios from 'axios';

//en el action despacho las funciones y le paso a reducer


export function getRecipes(){
    return async function(dispatch) {
        dispatch({type: 'Loading'})
        const json = await axios.get("https://food-app-juth.herokuapp.com/recipes")
        return dispatch({
            type: 'getRecipes',
            payload: json.data
        })
    }
};
//todos los tipos de dietas
export function getAllTypes(){
    return async function (dispatch){
        let json = await axios ('/types')
        return dispatch({
            type: 'getTypes',
            payload: json.data
        })
    }
};
//filtro por dieta
export function filterByTypes(){
    return async (dispatch) => {
        try {
          const json = await axios.get("https://food-app-juth.herokuapp.com/types");
          return dispatch({
            type: "filterByTypes",
            payload: json.data,
          });
        } catch (error) {
          console.log(error);
        }
      };
    };

export function getRecipesByName(name){
    return async function(dispatch){
        dispatch({type: 'Loading'})
        const json = await axios.get(
            `https://food-app-juth.herokuapp.com/recipes?name=${name}`
          );
        return dispatch({
            type: 'getRecipesByName',
            payload: json.data
        })
    }
};

export function createRecipe (payload){
    return async function(dispatch){
        const recipe = await axios.post("https://food-app-juth.herokuapp.com/recipe", payload);
        return dispatch({
            type: 'postRecipe',
            payload: recipe
        })
    }
}

//filtrar por ID
export function getRecipesById(id){
    return async function(dispatch){
        if(id === 'clear'){
            dispatch({type: 'getRecipesById',
            payload: 'clear'})
        } else{
            dispatch({type: 'Loading'})
            const json = await axios.get(
                `https://food-app-juth.herokuapp.com/recipes/${id}`
              );
        return dispatch({
            type: 'getRecipesById',
            payload: json.data
        })
    }
        }
        
};
//para eliminar
export function deleteRecipe(id){
    return async function(dispatch){
        await axios.delete('/recipes/' + id)
        return dispatch({
            type: 'deleteRecipe',
        })
    }

}

export function orderByScore (payload) {
    return {
        type: 'orderByScore',
        payload
    }
}

export function getDetail(payload) {
    return async function (dispatch) {
        try {
            const json = await axios.get(`http://localhost:3001/recipes/${payload}`)
            return dispatch({
                type: 'getDetail',
                payload: json.data
            })
        } catch (error) {
        }
    }
}