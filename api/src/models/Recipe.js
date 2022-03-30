const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    image: {
      type: DataTypes.TEXT,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: { //resumen
      type: DataTypes.STRING,
      allowNull: false,
    },
    spoonacularScore: { //puntuacion
      type: DataTypes.INTEGER,
    },
    healthScore: {  //puntuación saludable
      type: DataTypes.FLOAT, //porque es decimal
    },

    //analyzedInstructions.steps
    steps: {
      type: DataTypes.TEXT,
    },
    
        //agregamos el boleano que indica si es una receta fue creada por el usuario
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  });
};