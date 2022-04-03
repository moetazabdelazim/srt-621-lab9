const port = 3000,
    express = require ("express"),
    app = express();
    imagecontroller = require("./controllers/imagescontroller.js");
    layouts = require("express-ejs-layouts");
app.set("view engine", "ejs")
app.use(layouts);
app.use(express.static("public"));
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use((req,res,next) => {
    console.log(`request made to ${req.url}`);
    next();
});

app
    .get("/home", (req, res) => {
        res.render("home");
    })
    .get("/images/:image", imagecontroller.sendReqParam)
    .listen(port, () => {
        console.log(`started listneing on ${port}`)
    });