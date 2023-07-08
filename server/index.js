import express from "express"; 
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js"
import transactionRoutes from "./routes/transaction.js"
import Transaction from "./models/Transaction.js";
import Product from "./models/Product.js"
import KPI from "./models/KPI.js";
import { kpis, products, transactions } from "./data/data.js";


/* Config */
dotenv.config();
const app=express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin"}));
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors()); 




/* Routes */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

/* Mongoose Setup */
const PORT= process.env.PORT || 9000;

mongoose   
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
}).then(async ()=> {
    app.listen(PORT, ()=> console.log(`Server Port : ${PORT}`))
    /* ADD DATA */
    // await mongoose.connection.db.dropDatabase();
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);

 
}).catch( (error) => console.log(`${error} did not connect` )) 