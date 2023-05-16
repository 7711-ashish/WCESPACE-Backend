import mongoose from "mongoose";
const url = "mongodb+srv://Ashish_7711:Ashish_7711@cluster0.vvvgd.mongodb.net/?retryWrites=true&w=majority"

const connectToMongoDb = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongodb connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
export default connectToMongoDb;
