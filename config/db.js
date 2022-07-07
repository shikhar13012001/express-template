const mongoose = require("mongoose");
const connectToDb = async () => {
  const data = await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Database connected with ${data.connection.host}`);
};

module.exports = connectToDb;
