const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    image: {
      type: DataTypes.TEXT,
    },
  
    summary: { //resumen
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: { //puntuacion
      type: DataTypes.INTEGER,
    },
    healthScore: {  //puntuación saludable
      type: DataTypes.FLOAT, //porque es decimal
    },

    //analyzedInstructions.steps
    step: {
      type: DataTypes.TEXT,
    },
    
    dishType: { 
      type: DataTypes.STRING,
    },
        //agregamos el boleano que indica si es una receta fue creada por el usuario
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  });
};