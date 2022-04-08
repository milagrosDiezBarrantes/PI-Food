
const initialState = {
    recipes: [],
    allRecipes: [],
    diets: [],
    detail: [],
    showedRecipes: [], //recetas mostradas
    isLoading: true  
}

      //genero la llamada asincrona, en éste caso que me pase todo lo que le pido: el estado, las recetas, la copia de recetas y elfiltrado
function reducer (state=initialState, action) {
    switch(action.type) {
        case 'getRecipes':
            return {
                ...state,
                showedRecipes: action.payload,
                allRecipes: action.payload,
                isLoading: action.loading,
            }
                case 'getRecipesId':
                 return {
                     ...state,
                     detail: action.payload,
                 } 
                 

                 case 'getTypes':
                     return{
                         ...state,
                         diets: action.payload
                     } 
                 case 'getRecipesByName':
                     return {
                         ...state,
                         showedRecipes: action.payload,
                }
                 case 'postRecipe':
                 return {
                  ...state,
                 };

                 case 'filterByTypes':
                    const allDiets = state.allRecipes;
                    const filterTypes =
                      action.payload === "all"
                        ? allDiets
                        : allDiets.filter((r) => r.diet.includes(action.payload));
                    return {
                      ...state,
                      showedRecipes: filterTypes,
                };
             
            case 'orderByName':
                const orderName =
                action.payload === "all"
                  ? state.allRecipes
                  : action.payload === "asc"
                  ? state.showedRecipes.sort((a, b) => {
                      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                    })
                  : state.showedRecipes.sort((a, b) => {
                      return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
                    });
              return {
                ...state,
                showedRecipes: orderName,
              };

              case "orderSpoonacularScore":
                const orderSpoonacularScore =
                  action.payload === "all"
                    ? state.allRecipes
                    : action.payload === "high"
                    ? state.showedRecipes.sort((a, b) => b.score - a.score)
                    : state.showedRecipes.sort((a, b) => a.score - b.score);
                return {
                  ...state,
                  showedRecipes: orderSpoonacularScore,
                };
          
              default:
                return { ...state };
            }
};

export default reducer;
