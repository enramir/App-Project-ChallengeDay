require('dotenv').config();

const express =  require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const deviceAPI = require("./device-API");

const app = express();

// settings
const port = process.env.PORT || 3000;
const BASE_PATH = "/api";

// middlewares
app.use(bodyParser.json());
app.use(cors());

// database
const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

var device;

client.connect(err => {
  
  device = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Connected");

  // Call to product-API
  deviceAPI(app, BASE_PATH, device);

  app.listen(port, () =>{
    console.log("Server ready on port: " + port);
  }).on("error", (e) => {
    console.log("Server not ready: " + e);
  });
  
});