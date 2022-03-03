// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const users = require("../Model/user");
// const SECRET_KEY = process.env.SECRET_KEY;
// const options = {
//     secretOrKey: process.env.SECRET_KEY
// };
// options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// module.exports = (passport) => {
//   passport.use(
//     new JwtStrategy(options, (objFromPayLoad, done) => {
//       user
//         .findOne({ _id: objFromPayLoad._id })
//         .then((user) => {
//           if (user) done(null, user);
//           done(null, false);
//         })
//         .catch((err) => done(err, false));
//     })
//   );
// };
//  options = מחזיק את הטוקן מהבקשה
// passportfunctions = פונקציה שמקבלת פספורט כארגומנט
// passport = אובייקט שמקבל פונקציית יוז
// use = פונקציה שמקבלת קולבאק והקולבאק מקבל כפרמטר מופע של ניו ג'י דאבליו סטרטגי
//  newstrategy =  קלאס שבתוכו יש קונסטרקטור עם אופשינס וקולבאק שבתוכו יש פרמטר של פיילוד
// payload = מחזיק אובייקט של יוזר
// done = פונקציה שהגדרנו  שהיא קיימת
