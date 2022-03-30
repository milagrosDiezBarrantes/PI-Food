const getApiRecipes = require('./getApiRecipes');
const getDbRecipeInfo = require('./getRecipeDb');

const getAllRecipes = async()=>{
    const [apiRecipeInfo, dbRecipesInfo] = await Promise.all([getApiRecipes(), getDbRecipeInfo()]); 

    const allRecipesInfo = apiRecipeInfo.concat(dbRecipesInfo);
    return allRecipesInfo;
}





module.exports = {getAllRecipes}