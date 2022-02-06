const express = require("express");
const dotenv = require("dotenv");
dotenv.config()

const connectDb = require("./configuration/config");
connectDb();
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors())

const authRouter = require("./routes/auth-data/auth");
const blogRouter = require("./routes/blog-folder/blogs");
const clapRouter = require("./routes/clapsAndLikes/claps")
app.use("/api/v1/blogs", blogRouter );
app.use("/api/v1/auth", authRouter );
app.use("/api/v1/claps", clapRouter);
app.get("/", (req, res) => {
    res.json({
        success : true,
        message : "its a node project for Blog Project",
    })
})

module.exports = app;