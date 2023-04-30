const express = require("express");
const cors = require("cors");
const usersRouter = require("./app/routes/user.route");
const contactsRouter = require("./app/routes/contact.route");
const genresRouter = require("./app/routes/genre.route");
const comicsRouter = require("./app/routes/comic.route");

const ApiError = require("./app/api-error");

const app = express();
const PDF_PATH = './assets/pdf';

app.use(cors());
app.use(express.json());

app.use("/api/users",usersRouter);
app.use("/api/contacts",contactsRouter);
app.use("/api/comics",comicsRouter)
app.use("/api/genres",genresRouter);

app.use('/assets/pdf/',express.static(PDF_PATH));



app.get("/",(req,res)=>{
    res.json({ message: "Welcome to contact book application."});
})

// handle 404 response
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

module.exports = app;

