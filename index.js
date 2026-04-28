const express=require("express");
const port = 9000;
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
require('dotenv').config();
const cors=require('cors');
const userRouters =require('./src/routes/user');


app.use(cors({
  origin: "http://localhost:4200"
}));

app.use('/api/auth',userRouters);

app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})