// const express = require("express");
import express from 'express';
import authRoutes from './routes/auth.route.js';
import {ENV_VARS} from "./config/envVars.js"
import {connectionDB} from './config/db.js';

const app= express();
app.use(express.json()); //Helps to parse req.body
const PORT= ENV_VARS.PORT;
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, ()=>{
    console.log("server running on port =",PORT);
    connectionDB();
});