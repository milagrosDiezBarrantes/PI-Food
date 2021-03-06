const router = require('express').Router();
const { Recipe, Diet } = require("../db");
const { YOUR_API_KEY } = process.env
const axios = require("axios");



// GET /recipes?name="..."
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado

const apiRecipes = async () => {
    try {
      const json = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
      );
      const recipe = json.data.results?.map((r) => {
       console.log(r);
         return {
          id: r.id,
          image: r.image,
          name: r.title,
          diet: r.diets,
          score: r.weightWatcherSmartPoints,
          summary: r.summary,
          step: r.instructions
         
        };
      });
     //  console.log("recipe", recipe);
      return recipe;
    } catch (error) {
      console.log(error);
    }
  };
   
  const dbRecipes = async () => {
    try {
      const db = await Recipe.findAll({
        include: {
          model: Diet,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      const findRecipe = db.map((n) => ({
        id: n.id,
        image: n.image,
        name: n.name,
        diet: n.diets.map((d) => d.name),
        score: n.score,
        step: n.step,
        summary: n.summary,
        createdInDb: n.createdInDb,
      }));
      return findRecipe;
    } catch (error) {
      console.log(error);
    }
  };

 const allRecipes = async () => {
    try {
      const api = await apiRecipes();
      const db = await dbRecipes();
      const all = [...api, ...db];
      return all;
    } catch (error) {
      console.log(error);
    }
  };
  
  const apiName = async (name) => {
    try {
      return await axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
        )
       .then((res) => {
          const names = res.data.results.map((r) => {
            return {
              id: r.id,
              image: r.image,
              name: r.title,
              diet: r.diets,
              score: r.weightWatcherSmartPoints,
              step: r.instructions,
              healthScore: r.healthScore,
              summary: r.summary,
            };
          });
         //  console.log("namesss", names);
          return names.filter((n) =>
          n.name.toLowerCase().includes(name.toLowerCase())
          );
        });
    } catch (error) {
      console.log(error);
    }
  };
  

  const dbName = async (name) => {
    // console.log("pato", name);
    try {
      const names = await Recipe.findAll({
        where: { name: { [Op.iLike]: "%" + name + "%" } },
        include: {
          model: Diet,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      
      const dbNames = names.map((n) => ({
        id: n.id,
        image: n.image,
        name: n.name,
        diet: n.diets.map((d) => d.name),
        score: n.score,
        step: n.step,
        summary: n.summary,
        createdInDb: n.createdInDb,
      }));
      return dbNames;
    } catch (error) {
      console.log(error);
    }
  };
  
const allNames = async (name) => {
    try {
      const api = await apiName(name);
      const db = await dbName(name);
      const all = api.concat(db);
      if (db != null) return all;
      return api;
    } catch (error) {
      console.log(error);
    }
  };

  router.get("/", async (req, res) => {
    const { name } = req.query;
    try {
      const totalRecipes = await allRecipes();
      const totalNames = await allNames(name);
      if (name) {
        return res.send(totalNames);
      } else{
        return res.send(totalRecipes);
      } 
        
    } catch (error) {
      return res.status(404).json({ msg: "Recipe Not Found" });
    }
  });
  

  const apiId = async (id) => {
    try {
      const api = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`
      );
      const detail = api.data;
      return {
        id: id,
        image: detail.image,
        name: detail.title,
        diet: detail.diets,
        summary: detail.summary,
        score: detail.weightWatcherSmartPoints,
        healthScore: detail.healthScore,
        steps: detail.instructions,
      };
    } catch (error) {
      console.log(error);
    }
  };
  
  const dbId = async (id) => {
    try {
      const idDb = await Recipe.findByPk(id, {
        include: {
          model: Diet,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
      return {
        id: id,
        image: idDb.image,
        name: idDb.name,
        score: idDb.score,
        summary: idDb.summary,
        healthScore: idDb.healthScore,
        steps: idDb.step,
        createdInDb: idDb.createdInDb,
        diet: idDb.diets.map((d) => d.name),
      };
    } catch (error) {
      console.log(error);
    }
  };
  
  const allIds = async (id) => {
    // console.log("manzana", id);
    try {
      if (id.includes("-")) {
        const db = await dbId(id);
        return db;
        }else{
        const api = await apiId(id);
        return api;  
        }
      } catch (error) {
      console.log(error);
    }
  };
  
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const ids = await allIds(id);
      if (ids) {
        return res.send(ids);
      } else {
        return res.status(404).json({ msg: "ID Not Found" });
      }
    } catch (error) {
      console.log(error);
    }
  });
  
  module.exports = router;



module.exports = router;