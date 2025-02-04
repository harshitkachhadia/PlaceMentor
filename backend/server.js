import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import {connect} from "./config/testDb.js"
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import placementInsightRoute from "./routes/placementInsightRoute.js";
import cookieParser from "cookie-parser"
import userProfile from "./routes/userProfile.js"

//app config
const app = express()
const port = 8000;

//middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors())

//DB connection
// connectDB();

//api endpoints
app.use("/api/user",userRouter)
app.use("/api/placementInsight",placementInsightRoute)
app.use("/api/Profile",userProfile)

app.get("/",(req,res) => {
    res.send("working")
})

connect()
.then(() => {
    app.listen(port,() => {
        console.log(`server started on http://localhost:${port}`);
    })
})
.catch((error) => {
    console.log("ERROR : ",error.message);
    
})

// app.listen(port,() => {
//     console.log(`server started on http://localhost:${port}`);
// })

export default app;