const express=require('express');
const mongoose =require('mongoose');
require('dotenv').config();
const cors=require('cors');
const Cookieparser = require("cookie-parser")
const adminRouter=require("./routes/admin");
const userRouter=require("./routes/user");
const app=express();
app.use(cors({
  origin: "https://blogging-silk.vercel.app",
  credentials: true
}));
app.use(Cookieparser());
app.use(express.json());
const rateLimit = require('express-rate-limit');
const loginLimiter = rateLimit({
    windowMs:15*60*1000,
    max:100,
    message:"Too many login attempts from this IP,try again later"
  })

app.use("/api/v1/admin",loginLimiter,adminRouter)
app.use("/api/v1/user",loginLimiter,userRouter)
app.get("/",(req,res)=> res.json({
    msg: "hello"
}))
const connectToMongoDB = async () => {
  try {
   
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
};

connectToMongoDB();
app.listen(3000,()=>console.log('Server running on port 3000'));