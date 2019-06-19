const express = require("express");
const router = express.Router();

const Receta = require("../../models/Receta");

// @route   GET api/recetas/test
// @desc    Test recetas route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "recetas works" }));

// @route   GET api/recetas/
// @desc    Get all recetas route
// @access  Public
router.get("/", (req, res) => {
  Receta.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json(err));
});

// @route   POST api/recetas/
// @desc    Insert receta route
// @access  Public
router.post("/", (req, res) => {
  const newReceta = Receta({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    preparacion: req.body.preparacion,
    ingredientes: req.body.ingredientes,
    image: req.body.image
  });

  newReceta
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(405).json(err));
});

module.exports = router;
