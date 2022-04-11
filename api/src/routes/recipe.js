const axios = require("axios");
const { Router } = require("express");
const { Recipe, Diet } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  const {
    name,
    image,
    summary,
    score,
    healthScore,
    step,
    diets,
    dishType,
    createdInDb,
  }  = req.body;
try{ const dietcreated = await Recipe.create({
  name,
  image,
  summary,
  score,
  healthScore,
  step,
  diets,
  dishType,
  createdInDb,
      });  
      const dietDb = await Diet.findAll({
        where: { name: diets }
        })
       
      await dietcreated.addDiet(dietDb)
       
      res.send("se creo diet")  

    } catch (error){
        console.log(error)
        res.status('404').json(error)
      }
});

module.exports = router;