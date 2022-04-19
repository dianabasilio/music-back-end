import express from "express";
import cors from "cors";
import { run } from "./modules/db";

import { getUserByID } from "./controllers/user";

import {json} from "body-parser"
//proyecto se corre con yarn start
const app =express();

const jsonParser = json();
app.use(cors({
    //para que solo acepte peticiones de aquí 
    origin:"http://localhost:3000/",
}));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


//gui interfaz visual mongocompas
app.get('/',(req,res)=> {
    res.send("Hola express");
});
app.post('/user', async(req,res)=> {
    console.log(req.body);
    const usuario = await getUserByID(req.body._id);
    res.send(usuario);
});

app.listen(8080,async()=>{
    await run();
    console.log(process.env.DB_NAME);
    console.log("server listening on port 8080");
});