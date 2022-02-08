const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/PlantDb');
const Schema = mongoose.Schema;

var NewPlantSchema = new Schema({
  plantName: String,
  category: String,
  description: String,
  location: String,
  availability: String,
  imageUrl: String
});

var plantData = mongoose.model('plant',NewPlantSchema);

module.exports = plantData;
