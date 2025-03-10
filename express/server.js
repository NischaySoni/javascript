//npm start
//npm run devStart

const express = require("express");
const app = express();
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const PORT = 3000;

app.set("view engine", "ejs")
app.use(logger)

app.get("/", (req, res) => {
    console.log("HI")
    res.render("index", {text: ":)"})
    //res.send("Hello, Express!")
    //res.download("server.js")
});

const userRouter = require('./routes/users') 
app.use('/users', userRouter)

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
