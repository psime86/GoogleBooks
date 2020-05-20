const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();
const apiRoutes = require("./routs");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("googlebooks/build"));
}

// Routes
app.use("/api", apiRoutes);

app.use((req, res, next) => {
    res.send("Welcome to Express");
});

//Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});