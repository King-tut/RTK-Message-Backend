import express from "express"
import bcrypt from "bcrypt"
import bodyParser from "body-parser"
import cors from "cors"
import multer from "multer"
import mongoose from "mongoose"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"


//In app imports

import {register, login} from "./controllers/register.js"
import {findUsersForMessages} from "./controllers/users.js"
import { gotEmAll, postMessage, updateSeenMessage, deleteMessage } from "./controllers/message.js"
import User from "./models/User.js"


const app = express()
//let PORT  = process.env.PORT
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
//configurations 
dotenv.config()
app.use(cors())
app.use(bodyParser.json({limit:"30mb", extended: true }));
app.use(bodyParser.urlencoded({extended: true, limit: "30mb"}));
app.use("/assets", express.static(path.join(__dirname, "public/assets")))

//File storage 

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "public/assets")
    },
    
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})


const upload = multer({storage})

//Routes with file upload 

app.post("/register", upload.single("profilePic"),register)

//All other routes 

app.post("/auth/login", login)

app.get("/users/:id",findUsersForMessages)
app.get("/show-messages/:id", gotEmAll)
app.patch("/read-messages", updateSeenMessage)
app.delete('/delete-message', deleteMessage)

//Post routes

app.post("/messages", postMessage)


mongoose.connect(process.env.MONGO_URL)
    

app.listen(process.env.PORT || 6000, ()=>{
    console.log(`The server is listening on port ${process.env.PORT}`)
})





