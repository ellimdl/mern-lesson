const passport = require("passport");

const signUp = (req, res, next) => {
  const signupStrategy = passport.authenticate("local_signup", {
    successsRedirect: "/auth/success",
    failureRedirect: "/auth/failure",
  });

  return signupStrategy(req, res, next);
};

module.exports = {
  signUp,
};
