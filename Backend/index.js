const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes=require("./routes/user")
const cors = require('cors');
const cloudinary = require('cloudinary');

const app = express();
dotenv.config({ path: './config.env' });

app.use(cookieParser());
app.use(express.json());
app.use(cors());
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,    
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database');
}).catch((err) => {
  console.log(err);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/auth',userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
