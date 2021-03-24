const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

if (process.env.NODE_ENV !== 'production') {
  const colors = require('colors');
}

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...'.brightYellow.underline);
  } catch (error) {
    console.error(`${error.message}`.red.bold);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
