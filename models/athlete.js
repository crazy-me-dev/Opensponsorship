const mongoose = require('mongoose');
const { Schema } = mongoose;

const athleteSchema = new Schema({
  name: String,
  dateOfBirth: Date,
  nationality: String,
  location: String,
  association: String,
  team: String,
  gender: String,
  sport: [],
  about: String,
  interests: String,
  charities: String,
  socialMediaHandles: String,
  pets: [],
  drinksAlcohol: Boolean,
  married: Boolean
});

mongoose.model('athletes', athleteSchema);