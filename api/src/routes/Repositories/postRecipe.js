const router = require('express').Router();
const { Recipe, Type } = require("../../db");
const { YOUR_API_KEY } = process.env
require("dotenv").config();

//creo otro archivo de recipe para el post
router.post('/', async(req, res) => {
    const {
        id, image, type, title, summary, spoonacularScore, healthScore, steps, createdInDb 
    } = req.body;
    try {
        const newRecipe = await Recipe.create({
            id, image, title, summary, spoonacularScore, healthScore, steps, createdInDb 
        });
        const typeDb = await Type.findAll({ 
            where: {
                title: type
            }
        });
        console.log(typeDb)
        await newRecipe.addType(typeDb);
        res.send('newRecipe');
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;