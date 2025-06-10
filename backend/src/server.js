import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js"
dotenv.config()
import cors from "cors"
import path from "path"
const app = express()
const __dirname = path.resolve()


//middleware
app.use(express.json())
if(process.env.NODE_ENV!=="production"){
    app.use(cors())
}
app.use(rateLimiter)
app.use("/api/notes",notesRoutes)


if(process.env.NODE_ENV==="production"){
    app.use("/api/notes",express.static(path.join(__dirname,"../frontend/dist")))

app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
})
}

const PORT = process.env.PORT || 5001

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at http://localhost:${PORT}`);
    })
})