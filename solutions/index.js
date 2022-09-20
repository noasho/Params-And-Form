var express = require('express');
const { render } = require('jade');
var router = express.Router();
const { cache } = require('../fcache/fcache')
const { createDogTable } = require('../functions/createDogTable')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send(` 
  <style>
  body{
    background: black;
    color: rgb(74, 255, 37);
    padding:10px;
    font-size:20px;
  }
  </style>
  
  Hello, I am main page`
  );
});

router.get('/params', function (req, res, next) {
  res.send(

    `<style>
      body{
        background: black;
        color: rgb(74, 255, 37);
        padding:10px;
        font-size:20px;
      }</style>
    
      <pre style="filter:hue-rotate(${Math.ceil(Math.random() * 360)}deg)">` +
    JSON.stringify(req.query, undefined, 4) + `\n\nHello my name is ${req.query.name} \nI am ${req.query.age} years old \nI live in ${req.query.city}` +
    `</pre>`
  )
});

//Exercise2 - part A

router.post('/add-dog-page/add-one', (req, res, next) => {
  //add a dog using the cache.addOne() function with the dog from form.
  cache.addOne({ name: req.body.name, breed: req.body.breed }); // cache.addOne(req.body);
  res.send(createDogTable(cache.getAll()));
})












//Exercise2 - part B

router.get('/filter-by-breed', (req, res) => {
  /**
   * get dogs using cache.getAll()
   * filter dogs by breed from user
   */
  const dogs = [...cache.getAll()];
  const filterDogs = dogs.filter(dog => dog.breed === req.query.breed);
  res.send(createDogTable(req.query.breed=== "all" ? dogs :filterDogs));
})















//Exercise2 - part C

router.get('/add-many-dogs', function (req, res, next) {
  //add dogs using the cache.addMany() function with the dogs from form.
  cache.addMany(req.query.dogs);
  res.send(createDogTable(cache.getAll()));
})

module.exports = router;
