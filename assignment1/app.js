const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const routes = require("./routes");

const app = express();

/* middleware */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use("/", routes);
const PORT = 3000;

app.listen(PORT, () => {
    
    console.log("http://localhost:3000/");                                                                                                                                                                                  
});
