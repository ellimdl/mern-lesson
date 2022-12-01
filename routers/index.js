/*
    Routers are responsible to document APIs
*/

const express = require("express");
const app = express();
const { router: comedianRouter } = require("./comedian-router"); // add
const { router: showRouter } = require("./show-router"); // add
const { router: accountRouter } = require("./account-router");
const passport = require("passport"); // ADD
const session = require("express-session"); // ADD

require("../config/passport")(passport); // ADD

// Middleware
app.use(express.json());
app.use(session({ secret: "WDI-GENERAL-ASSEMBLY-EXPRESS" })); // ADD
app.use(passport.initialize()); // ADD
app.use(passport.session()); /// ADD
app.use("/auth", accountRouter);

// Endpoints
app.use("/comedians", comedianRouter); // add
app.use("/shows", showRouter); // add

app.use(express.static("public"));

// Start server
app.listen(3000, () => {
  console.log("Listening to port 3000...");
});
