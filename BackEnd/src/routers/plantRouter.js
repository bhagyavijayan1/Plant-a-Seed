const express = require('express');
var plantData = require('../models/plantData');
const plantRouter = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer =  require('multer');

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./uploads/');
  },
  filename : function(req,file,cb){
    const fileName = file.originalname.toLocaleLowerCase().split(' ').join('-');
    cb(null, fileName)
}
});

const upload = multer({storage : storage});

mongoose.connect("mongodb://localhost:27017/PlantDb");

mongoose.set('useFindAndModify', false);
var db=mongoose.connection;
db.on('error',(error)=>{
  console.log(error);
});
db.once('open',()=>{
  console.log("Success");
});


function router() {

  console.log("hi");

  plantRouter.get('',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET , POST , PATCH ,PUT , DELETE , OPTIONS")
    plantData.find()
    .then(function (plants){
      res.send(plants);
    });

  });


  plantRouter.post('/insert',upload.single('imageUrl'),function(req,res,next){
    const url = req.protocol + '://' + req.get('host');
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET , POST , PATCH ,PUT , DELETE , OPTIONS")
    const plant = new plantData({ // model initialized
      plantName: req.body.plantName,
      category: req.body.category,
      description: req.body.description,
      location: req.body.location,
      availability: req.body.availability,
      imageUrl: url+'/uploads/'+req.file.originalname
  });

  plant.save().then(result => {
      console.log(result);
      res.status(201).json({
          message: 'Plant Donated Successfully',
          plantCreated: {
              plantName: result.plantName,
              category: result.category,
              description: result.description,
              location: result.location,
              availability: result.availability,
              imageUrl: result.imageUrl,

          }
      })
  }).catch(err => {
      console.log(err),
      res.status(500).json({
          error: err
      })
  })
});

  // Delete User
  plantRouter.post('/delete',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET , POST , PATCH ,PUT , DELETE , OPTIONS")
    plantData.findByIdAndDelete( req.body.id ,function(err,result){
      console.log(req.body.id);
      if(err){
        res.json({Status:'error'});
        console.log('error');
      }
      else{
        res.json({Status:'success'});
      }
    });
  });

  //Edit User

  plantRouter.get('/edit/:id', (req, res, next) => {
        plantData.findById(req.params.id, (err, user) => {
        if(err) console.log('error in edit' + err)
        else res.json(user)
    });
});




//Update

plantRouter.post('/update/:id', upload.single('imageUrl'),(req, res, next) => {
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Methods :GET,POST,PATCH,PUT,DELETE,OPTIONS')
  plantData.findById(req.params.id, (err, plant) => {
      if(!plant){
          res.json('Could not load document');
      } else {
          if(req.body.imageUrl || req.file.filename === null) {
              plant.plantName = req.body.plantName,
              plant.category =  req.body.category,
              plant.description = req.body.description,
              plant.location = req.body.location,
              plant.availability = req.body.availability,
              plant.save().then(plant => {
                  res.json('success');
              }).catch(err => {
                  res.status(400).send(err);
              })
          } else {
              const url = req.protocol + '://' + req.get('host'); // get url
              plant.plantName = req.body.plantName,
              plant.category =  req.body.category,
              plant.description = req.body.description,
              plant.location = req.body.location,
              plant.availability = req.body.availability,
              plant.imageUrl = url+'/uploads/'+req.file.filename
              plant.save().then(plant => {
                  res.json('Plant Details has been updated..!')
              }).catch(err => {
                  res.status(400).send(err);
              })
          }
      }
  })
})


  return plantRouter;
}

module.exports = router;
