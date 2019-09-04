const express = require("express");
const userRouter = require("./routes/api/user");
const driverRouter = require("./routes/api/driver");
const tripRouter = require("./routes/api/trip");
const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.NODE_ENV.trim() === "dev"  ? process.env.MONGO_URI_LOCAL : process.env.MONGO_URI_PPROD 
console.log( process.env.NODE_ENV, mongoUri)
mongoose
  .connect(
    mongoUri,
   // `mongodb+srv://admin:admin@cluster0-4ywex.mongodb.net/test?retryWrites=true&w=majority`,
    //"mongodb://localhost:27017/fs05-xedike",
     { useNewUrlParser: true, createIndexes: true})
  .then(() => console.log("Connected successfully"))
  .catch(console.log);

const port = process.env.PORT || 5000;
// cmd: $env:PORT = 1234

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, fingerprint'
  );
  res.header(
      'Access-Control-Allow-Methods',
      'PUT, POST, GET, DELETE, OPTIONS'
  );
  next();
});

app.use('/', express.static('public'));
//middleware parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//middleware static file
app.use("/upload/avatars", express.static('./upload/avatars'))

//middleware route handler
app.use("/api/users", userRouter);
app.use("/api/drivers", driverRouter);
app.use("/api/trips", tripRouter);


// app.use(
//   (req, res, next) => {
//     console.log("middle ware 1");
//     next();
//   },
//   (req, res, next) => {
//     console.log("middle ware 2");
//     // res.send("Fnish")
//     next();
//   },
//   (req, res, next) => {
//     console.log("middle ware 3");
//     next();
//   }
// );


app.listen(port, () => console.log(`App is running on port ${port}`));