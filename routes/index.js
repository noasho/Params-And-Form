var express = require('express');
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
    JSON.stringify(req.query, undefined, 4) +
    `</pre>`
  )
});

router.post('/add-dog-page/add-one', (req, res, next) => {
  //add a dog using the cache.addOne() function with the dog from form.
  res.send(

    `<style>
    body {
      padding: 50px;
      background-color: thistle;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    h1 {
      /* background-color: rgb(163, 230, 223); */
      text-align: center;
      /* box-shadow: 5px 6px #9c9c9c; */
      border-radius: 4px;
    }
    
    a {
      color: #00b7ff;
    }
    
    input {
      border-radius: 15px;
      margin-bottom: 5vh;
      height: 6vh;
      text-indent: 3px;
      background-color: white;
      /* background-color: #00b7ff; */
    }
    
    select {
      border-radius: 15px;
      margin-bottom: 5vh;
      height: 6vh;
      background-color: white;
    }
    
    button{
      border-radius: 15px;
      margin-bottom: 5vh;
      height: 6vh;
      background-color: white;
      margin-top: -11vh;
    }
  </style>`+

    createDogTable(/*send all dogs using cache.fetch() */));
})

router.get('/filter-by-breed', (req, res) => {
  /**
   * get dogs using cache.fetch()
   * filter dogs by breed from user
   */
  res.send(createDogTable(/* send filtered dogs to createdogTable */));
})

router.get('/add-many-dogs', function (req, res, next) {
  //add dogs using the cache.addMany() function with the dogs from form.
  res.send(createDogTable(/*send all dogs using cache.fetch() */));
})
module.exports = router;
