// [ ] GET /types:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá
const axios = require("axios");
const { Diet } = require("../db");
const { YOUR_API_KEY } = process.env;
const { Recipe } = require('../db')
const { Sequelize } = require('sequelize');
//const { query } = require('express');
const { Type } = require('../db')


const typesApi = async () => {
    const typesApi = await axios.get('https://api.spoonacular.com/recipes/complexSearch/type')
    const typesArray = await typesApi.data.results; //obtengo los resultados desde typesArray 
    typesArray.forEach(type => { //recorro para c/u de los elementos de array 
        Type.findOrCreate({ //si no lo encontras crealo
            where: {
                name: type.name
            }
        })
    });
    const allTypes = await Type.findAll();
    res.send(allTypes);
}

module.exports = { typesApi: typesApi }