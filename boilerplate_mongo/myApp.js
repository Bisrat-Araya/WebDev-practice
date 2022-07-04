require('dotenv').config();
const mongoose = require('mongoose')

const mongo_uri = process.env.MONGO_URI
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect(mongo_uri)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err))
//, { useNewUrlParser: true, useUnifiedTopology: true})

let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
})

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  let bisratAraya = new Person({
    name: 'Bisrat',
    age: 29,
    favoriteFoods: ['Doro Wot', 'Firfir']
  })

  bisratAraya.save()
    .then((docs) => done(null, docs))
    .catch((err) => console.log(err))
  // if (error) return done(error)
  // done(null, data);
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, docs) {
    if (err) return console.log(err)
    done(null, docs);
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, docs) {
    if (err) return console.log(err)
    done(null, docs)
  })
};

const findOneByFood = (food, done) => {
  Person.find({favoriteFoods: food}, function(err, docs) {
    if (err) return console.log(err)
    done(null, docs)
  })
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
