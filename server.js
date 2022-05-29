// server.js
require('dotenv').config(); //added
const express = require("express");
const passport = require("passport");
const cors = require("cors"); // added
// const bodyParser = require('body-parser');

// Routes
const todo = require("./routes/todo");
const user = require("./routes/user");
const file_upload = require("./controllers/upload-images")


const connectDB = require("./config/db");

const app = express();

// The bakcend link to save file
app.use('/public', express.static('public'));

// connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true })); // added

// initialize middleware
app.use(express.json({ extended: false }));
app.use(passport.initialize());

// use routes
app.use("/api/todo", todo);
app.use("/api/users", user);
app.use("/api/upload-images",file_upload)

// Passport config
// require("./config/passport")(passport);
app.get("/", (req, res) => res.send("Server up and running"));


// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});