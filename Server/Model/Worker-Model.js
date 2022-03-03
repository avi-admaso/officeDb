const mongoose = require('mongoose');

const Worker = new mongoose.Schema(
  {
    Id : Number,
    FirstName: String,

    LastName: {
      type: String,
      required:true,
    },

    Email: String,

    Age: Number,
  },
  // { timestamps:true }
);


module.exports = mongoose.model('worker' , Worker)
// {
//   "FirstName": "avi",
// "LastName": "admaso",
// "Email": "String@gmail.com",
// "Age": 27
// }