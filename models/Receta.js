const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecetaSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  preparacion: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: false
  },
  ingredientes: [
    {
      type: String
    }
  ]
});

module.exports = Receta = mongoose.model("recetas", RecetaSchema);
