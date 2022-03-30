const { Router } = require('express');
const router = Router();
const { YOUR_API_KEY } = process.env

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes = require ('./recipes');
//const type = require ('./types');
const recipe = require('./Repositories/postRecipe.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
/*
router.use('/recipes', recipes)
router.use('/types', type)
*/
// RUTAS 

router.use('/recipes', recipes);
router.use('/recipe', recipe);

/*
router.get('/recipes:id', recipes.getfindByIdOnApi);
router.get('/types',typesApi.typesApi);
router.post('/recipe', RecipesController.postfindRecipe);
*/
module.exports = router;
