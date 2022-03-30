const router = require('express').Router();
const {getAllRecipes} = require("./Repositories/getAllRecipes");
const { Recipe, Type } = require("../db");
const { YOUR_API_KEY } = process.env


//cambiar de router a const con el nombre que quiera poner
router.get('/', async (req, res) => {
    const {name} = req.query;
    const totalRecipes = await getAllRecipes();
    if(name){
        const recipeName = totalRecipes.filter(element => 
            element.name.toLowerCase().includes(name.toLowerCase()))
            if(recipeName.length){
                return res.status(200).send(recipeName);
            } return res.send({error: 'Receta no encontrada'})
    } else {
        try{
            return res.status(200).send(totalRecipes);
        } catch(error){
            res.send(error)
        }
    }
});

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    const totalRecipes = await getAllRecipes();
    if(id){
        const recipeId = await totalRecipes.filter(recipId => recipId.id == id);
            if(recipeId.length){
                try {
                     return res.status(200).send(recipeId)
                    } catch (error) {
                        res.send(error)
                       }
            }
    }
});



//creo una ruta para eliminar recetas
router.delete('/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        res.json(await Recipe.destroy({
            where: {id}
        }))
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;