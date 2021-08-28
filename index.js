const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//creating schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  age: Number,
  favoriteFoods: [String],
});
const Person = mongoose.model("Person", personSchema);
const Jhonny = new Person({
  name: "Jhonny Swagger",
  age: 44,
  favoriteFoods: ["Peach", "Strawberry", "Orange", "Banana", "Apple"],
});
// Jhonny.save((err) => {
//   if (err) {
//     throw err;
//   }
// });

const arrayOfPeople = [
  {
    name: "Raynard Delores",
    age: 67,
    favoriteFoods: ["Soup", "Spaghetti", "Fries"],
  },
  {
    name: "Fredric Justina",
    age: 35,
    favoriteFoods: ["Pasta", "Burger", "Hotdogs", "Pizza"],
  },
  {
    name: "Richelle Elliott",
    age: 24,
    favoriteFoods: ["Borrito", "Lamb", "Lettuce", "Orange"],
  },
  {
    name: "Kurtis Topher",
    age: 15,
    favoriteFoods: ["Fast food", "Smoothies", "Sweets"],
  },
  {
    name: "Chuck Norris",
    age: 81,
    favoriteFoods: ["Blood", "Mayhem", "Ruination", "Destruction"],
  },
  {
    name: "Evvie Breanne",
    age: 22,
    favoriteFoods: [
      "Fried Chicken",
      "Spaghetti",
      "Pizza",
      "Cheese Burger",
      "Banana",
    ],
  },
  {
    name: "Celine Dodie",
    age: 49,
    favoriteFoods: ["Barbaque", "Fish", "Corn dog", "Carrot"],
  },
];

// Person.create(arrayOfPeople, (err) => err && console.log(err));

// Person.find({ name: { $exists: true } }, (err, data) =>
//   err ? console.log(err) : console.log(data)
// );

// Person.findOne({ favoriteFoods: /spaghetti/i }, (err, data) => {
//   err ? console.log(err) : console.log(data);
// });
// or we can use { favoriteFoods: {$all : ["Spaghetti"] }} as Parameter

// Person.findById("6128f04add8786ca30269252", (err, data) =>
//   err ? console.log(err) : console.log(data)
// );

//Searching & replacing (search, push, save)
// Person.findById("6128f491344b94781344b436", (err, data) => {
//   data.favoriteFoods.push("Hamburger");
//   data.save((err) => err&&console.log(err));
// });

// Person.findOneAndUpdate(
//   { name: /fredric/i },
//   { age: 20 },
//   { new: true },
//   (err) => err && console.log(err)
// );

// Person.findByIdAndRemove(
//   "6128f491344b94781344b43a",
//   (err) => err && console.log(err)
// );

const someMaries = [
  {
    name: "Mary Ying",
    age: 21,
    favoriteFoods: ["Apple", "Tofu", "Sushi"],
  },
  {
    name: "Mary Jonson",
    age: 16,
    favoriteFoods: ["Hamburger", "Chips", "Candy", "Chocolate"],
  },
  {
    name: "Mary McPhilips",
    age: 36,
    favoriteFoods: ["Mac'n'Cheese", "Salad"],
  },
];

// Person.create(someMaries, (err) => err && console.log(err));

// Person.remove({ name: /mary/i }, (err) => err && console.log(err));

// Person.find({ favoriteFoods: /burrito/i })
//   .sort({ name: 1 })
//   .limit(2)
//   .select("-age")
//   .exec((err, data) => (err ? console.log(err) : console.log(data)));
