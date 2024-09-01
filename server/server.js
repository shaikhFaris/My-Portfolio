import express from "express"
const app=express();
import fs from "fs"
import cors from "cors";
import { error } from "console";
const PORT = 3689;


app.use(cors())
app.use(express.json())

// This is setting for get request
app.post("/mail",(req,res)=>{
    // res.send("welcome")
    console.log(req.body);
    const now = new Date();
    fs.appendFileSync("mail_logs.txt",
        `name: ${req.body.username}\nemail address: ${req.body.email}\ntime: ${now}\nmessage: ${req.body.message}\n\n`,
        (err)=>{
        if (error) {
            res.send(JSON.stringify({
                status:"failure"
            }))
        }
    })
    res.send(JSON.stringify({
        status:"sucess"
    }))

    // console.log(req.body);
})
app.listen(PORT,()=>{
    console.log("Backend runing at port: "+ PORT);
})