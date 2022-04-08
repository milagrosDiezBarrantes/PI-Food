const { Router } = require('express');
const router = Router();
const { YOUR_API_KEY } = process.env
const axios = require("axios");

// Importar todos los routers;
const recipes = require("./recipes.js");
const recipe = require("./recipe.js");
const diets = require("./diets.js");


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// RUTAS 

router.use("/recipes", recipes);
router.use("/", recipe);
router.use("/types", diets);


module.exports = router;
