const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mogoose = require("mongoose");
const authRoute = require("./routes/auth");
const buyRoute = require("./routes/buy");
const usersRoute = require("./routes/users");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mogoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to mongodb"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ "storage": storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/buy", buyRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/users", usersRoute);

app.listen("5000", () => {
  console.log("Backend Is Running");
});
