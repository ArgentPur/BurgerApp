const express = require("express");
const PORT = process.env.PORT || 3306;
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controllers.js");

app.use(routes);
app.get("/", function(req, res) {
    res.json(path.join(__dirname, "views/index.handlebars"))
})
app.listen(PORT, function() {
    console.log("server listening at: http://localhost" + PORT);
})

