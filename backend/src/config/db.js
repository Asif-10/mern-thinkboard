import mongoose from "mongoose"

 const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB connected successfully");
        
    } catch (error) {
        console.log("Error connecting to MongoDB",error);
        process.exit(1) //Exit if it fails to connect to MongoDB
    }
}


export default connectDB