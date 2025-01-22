const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');
const cloudinary = require('cloudinary');
const getDataUrl = require('../utils/cloudinary.js');

const register = async (req, res) => {
    console.log('register',req.body);
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }


  try {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "Photo is required." });
     }
     const file = req.file;
     const fileUrl = await getDataUrl(file);

     const cloudUpload = await cloudinary.v2.uploader.upload(fileUrl.content);
     const photoUrl = cloudUpload.secure_url;


    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword ,photo:photoUrl});
    await newUser.save();
    console.log('newUser',newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
};


const login = async (req, res) => {
    console.log(req.body);
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('accessToken', token, {
        httpOnly: true,
        expires: token.expiresIn
     });
    console.log('token',token);
    res.status(200).json({ token,user});
  } catch (error) {
    res.status(500).json({ message: 'Error logging in user' });
  }
};

module.exports = { register, login };