require('dotenv').config();

const express = require("express");
const app = express();
const db = require("./db/connect")
const cors = require("cors")
const authRouter = require("./routes/authRoute");
const linksRouter = require("./routes/linkRoute");
const profileRouter = require("./routes/profileRoute");
const cookieParser = require("cookie-parser")

// middleware
const errorHandlerMiddleware = require("./middleware/errorHandler")
const notFoundMiddleware = require("./middleware/not-found");

const fileUpload = require('express-fileupload');

const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(cors({credentials: true, origin: ["http://localhost:5173", ""],}));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(fileUpload({ useTempFiles: true }));

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/links", linksRouter);
app.use("/api/v1/profile", profileRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await db(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server is running at port: ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start();
