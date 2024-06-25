const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://admin:zombie@cluster0.yzgofzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;