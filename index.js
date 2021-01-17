const express = require("express");
const mongoose = require("mongoose");
const register = require("./routes/register");
const category = require("./routes/categories");
const hostel = require("./routes/hostels");
const agent = require("./routes/agents");
const about = require("./routes/aboutUs");
const users = require("./routes/users");
const auth = require("./middleware/auth");
const cors = require("cors");
const app = express();

mongoose
  .connect("mongodb://localhost/hostelSpotter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("Could not connect"));
app.use(cors());
app.use(express.json());

app.use("/api/users", users);
app.use("/api/register", register);
// app.use(auth);
app.use("/api/category", category);
app.use("/api/hostel", hostel);
app.use("/api/agent", agent);
app.use("/api/about", about);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
