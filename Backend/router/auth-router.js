const express= require("express");
const router= express.Router();

router.get('/', (req, res) =>{
    res.status(200).send("Welcome to router");
  });


  router.post('/', (req, res) =>{
    res.status(200).send("Welcome to router");
  });

  router.route('/').get ((req, res) =>{
    res.status(200).send("Welcome to router");
  });

  module.exports= router;