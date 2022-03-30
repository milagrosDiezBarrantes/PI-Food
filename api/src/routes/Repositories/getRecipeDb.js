const {Recipe, Diet} = require('../../db');

const getDbRecipeInfo = async()=>{
    const dbRecipes = await Recipe.findAll({
        include: {
            model: Diet,
            atributes: ['name'], 
            through: {
                atributes: []
            }
        }
    })
    const recipJson = dbRecipes.map(recipe => recipe.toJSON());
    const recipType = recipJson.map(recipe=>{
       const typeName = recipe.type.map(type=> type.name)
       return {...recipe, type: typeName}
    })

    return recipType;
}

module.exports = getDbRecipeInfo;