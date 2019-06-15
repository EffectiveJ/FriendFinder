const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");


app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});
