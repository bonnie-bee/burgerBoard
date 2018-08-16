const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

//setting the database files to a variable
const db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/author-api.js")(app);
require("./routes/burger-api.js")(app);
require("./routes/review-api.js")(app);


db.sequelize.sync({force: false}).then(function(){
    app.listen(PORT, function() {
        console.log(`Server listening on: http://localhost:${PORT}`)
    })
})

