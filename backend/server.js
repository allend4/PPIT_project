import express from 'express';
//import data from './data';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import bodyParser from 'body-parser';

dotenv.config();

const mongodb_url = config.MONGODB_URL;

mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason)); // mongodb error

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

//app.get("/api/products/:id", (req, res) => {
//    const productId = req.params.id;
//    const product = data.products.find(x => x._id === productId);
//    if (product)
//      res.send(product);
//    else
//      res.status(404).send({ msg: "Product Not Found." })
//  });

//app.get("/api/products", (req, res) => {
//    res.send(data.products);
//});

app.listen(4000, () => { console.log("Server started at http://localhost:4000") })