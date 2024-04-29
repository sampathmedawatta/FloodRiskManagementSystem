const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    //const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`);
    const connect = await mongoose.connect(
      `mongodb+srv://COS80001db:test123@cluster0.xjkc2gt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(
      "DB connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
