import axios from 'axios';

//en el action despacho las funciones y le paso a reducer

export function getRecipes(){
    return async function(dispatch) {
       try{ 
        const json = await axios.get(`http://localhost:3001/recipes`)
        return dispatch({
          type: 'getRecipes',
          payload: json.data,
            loading: false,
        });
    } catch (error) {
      console.log(error);
    }
  };
  };
  
export const getRecipeName = (name) => {
    return async (dispatch) => {
      try {
        const json = await axios.get(`http://localhost:3001/recipes?name=${name}`);
        return dispatch({
            type : 'getRecipesName',
            payload: json.data,
          });
        } catch (error) {
          console.log(error);
        }
      };
    };



//filtrar por ID
export function getRecipesId(id){
    return async function(dispatch){
        try {
            const json = await axios.get(
                `http://localhost:3001/recipes/${id}`
            );
            // console.log("detail", json.data);
            return dispatch({
              type:'getRecipesId',
              payload: json.data,
            });
          } catch (error) {
            console.log(error);
          }
        };
      };

//TODOS los tipos de dietas
export function getDietTypes(){
    return async function (dispatch){
      const json = await axios (`http://localhost:3001/types`) 
      return dispatch({
        type: 'getTypes',
        payload: json.data
    });
    //console.log(json.data);
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
     try {
        const response = await axios.post(`http://localhost:3001/recipe`,payload)
        return dispatch({
            type: 'createRecipe',
            payload: response 
        });
    } catch (error) {
      console.log(error);
    }
  };
};

/*
export function createRecipe (payload){
  return async function(dispatch){
      var json = await axios.post(`http://localhost:3001/recipe`,payload);
      return json
  }*/

export const cleanDetail = () => {
    return {
      type: "getDetails",
      payload: [],
    }
  };

export function orderName(payload){
    return{
        type: 'orderByName',
        payload
    }
}

//por puntuación
export function orderSpoonacularScore (payload){
    return{
        type: 'orderSpoonacularScore',
        payload
    }
}

//para eliminar
export function deleteRecipe(id){
    return async function(dispatch){
        await axios.delete(`http://localhost:3001/recipes/${id}`)
        return dispatch({
            type: 'deleteRecipe',
        })
    }

}
console.log('detalle');

