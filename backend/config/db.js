import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Shubham:987197187@cluster0.ubnbfle.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}