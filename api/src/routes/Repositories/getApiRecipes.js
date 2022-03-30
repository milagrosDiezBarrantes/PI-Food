const axios = require('axios');
require('dotenv').config();
const { YOUR_API_KEY } = process.env;


const getApiRecipes = async(name) =>{
    try {
        const resAxios = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`);

        const recipes = resAxios.data.results?.map((recipe) => { 
                return {
                id: recipe.id, 
                name: recipe.name,
                img: recipe.image,
                score : recipe.score,   
                summary: recipe.summary,
                healthScore: recipe.healthScore,
                steps: recipe.analyzedInstructions?.map(el => el.steps.map(ele=> ele.step))
            } 
        });
        
        //console.log(resAxios);  
        return recipes;
    } catch (error) {
        console.log(error);
        return [];
    }

};


module.exports = getApiRecipes;

