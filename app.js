const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const routes = require("./routes");

const app = express();

/* middleware */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

/* маршруты */
app.use("/", routes);

/* запуск сервера */
app.listen(3000, () => {
    console.log("Server running on port 3000");
    console.log("http://localhost:3000/");
});
