import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js"
dotenv.config()
import cors from "cors"

const app = express()



//middleware
app.use(express.json())
app.use(cors())
app.use(rateLimiter)
app.use("/api/notes",notesRoutes)

const PORT = process.env.PORT || 5001

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at http://localhost:${PORT}`);
    })
})