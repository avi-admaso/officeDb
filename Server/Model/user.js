const mongoose = require('mongoose')
const User = new mongoose.Schema(
    {

        FirstName: String,
        LastName:String,
        Email:String,
        Password:String,
        // LastLogin: Date,
        // IsLogin: Boolean,
    },
    // { timestamps:true }
)
module.exports = mongoose.model('user' , User)
// 3.	סכמה מומלצת : שם פרטי, שם משפחה, אימייל, סיסמה, התחברות אחרונה, האם מחובר, תמונת פרופיל וחתימות זמן.