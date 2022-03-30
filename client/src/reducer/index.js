import { Action } from "history"

const initialState = {
    recipes: [],
    allRecipes: [],
    diets: [],
    detail: []
}

function reducer (state = initialState, {type, payload}){
    switch(type){
        case 'getRecipes':
            return{
                ...state,
                allRecipes: payload,
                copyRecipes: payload,
                loading: false
            }
        case 'getTypes':
            return{
                ...state, 
                types: payload
            }
            case 'getRecipesByName':
                return{
                    ...state, 
                    copyRecipes: payload, 
                    loading: false}
            case 'getRecipesById':
                if(payload === 'clear'){
                    return {...state, 
                        details: []
                    }
                }return{...state, details: payload, loading: false}
            case 'filterByTypes':
                const allTypes = state.allRecipes
                const typesFilter = payload === 'all' ? allTypes : allTypes.filter(recipe => 
                    payload === recipe.type
                    //filter recorre cada uno de las propiedades   
                   );
                return{...state, copyRecipes: typesFilter}
            
            case 'filterByType':
                const allRecipesArray = state.allRecipes;
                const filterType = payload === 'createdInDb' ? allRecipesArray.filter(recipe => 
                    recipe.createdInDb) : allRecipesArray.filter(recipe=> !recipe.createdInDb)
                return {...state, copyRecipes: payload === 'All' ? allRecipesArray : filterType}
           
            case 'orderByName':
                let orderArray = payload === "ascendent" ? state.copyRecipes.sort(function(a,b){
                    if(a.name > b.name) return 1;
                    if(b.name > a.name) return -1;
                    return 0; 
                }) :
                state.copyRecipes.sort(function(a,b){
                    if(a.name > b.name) return -1;
                    if(b.name > a.name) return 1;
                    return 0;
                });
                return {...state, copyRecipes: orderArray}
            case 'orderByPoints':
                let orderPointArray = state.copyRecipes;
                payload === 'ascendent' ? state.copyRecipes.sort(function(a,b){
                    if(a.ponit > b.ponit) return 1;
                    if(b.ponit > a.ponit) return -1;
                    return 0;
                }) :
                state.copyRecipes.sort(function(a,b){
                    if(a.ponit > b.ponit) return -1;
                    if(b.ponit > a.ponit) return 1;
                    return 0;
                });
                return {...state, copyRecipes: orderPointArray}
            case 'postRecipe':
                return{...state}
            case 'deleteRecipe':
                return{...state}
            case 'getDetail':
                return{...state, detail: Action.payload}
            case 'Loading':{
                return {...state, loading: true}
            }
            default: return state
        }
    };

export default reducer;