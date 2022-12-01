const { computeHash } = require("../helpers/bcrypt-helper");
const { Account } = require("../models");

const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    "local_signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      function (req, email, password, callback) {
        // will be called by the sign up endpoint
        Account.findOne({ email }, (err, account) => {
          if (err) return callback(err); // error

          if (account) {
            return callback(null, false); // login failed
          } else {
            const newAccount = new Account();
            newAccount.email = email;
            newAccount.password = computeHash(password); // ???
            newAccount.lassLogin = new Date();
            newAccount.save((err) => {
              if (err) throw err;
              return call(null, newAccount); // Success
            });
          }
        });
      }
    )
  );
};
