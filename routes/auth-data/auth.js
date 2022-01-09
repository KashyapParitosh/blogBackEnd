const express = require("express");
const userList = require("./userData");
const router = express.Router();
const jwt = require("jsonwebtoken");
const  jwtSecretKey  = require("../../secretKey");
const jwtConfig = {expiresIn: "300min" }
// const verifyToken = require('../middleware'); 

router.post("/login", (req, res) => {
    const emailFromBody = req.body.email;
    const passwordFromBody = req.body.password;
    console.log( emailFromBody,passwordFromBody)
    
    if( emailFromBody === undefined || passwordFromBody === undefined ) {
        res
        .status(400)
        .json({success : false , message : 'Email or Password is Undefined'})
        return;
    } 

    const isUser = userList.find((user)=> {
        return (
            user.email === emailFromBody && user.password === passwordFromBody
        )
    })

    console.log(isUser);

    if (isUser === undefined){
        res
           .status(401)
           .json({success:false, message:"Invalid user"})
           return;
    }
     
    const payload = { userId : isUser.id }
    try {
        const token = jwt.sign(payload, jwtSecretKey, jwtConfig);
        res
        .status(200)
        .json({ success : true , message : "Login Successfully", data : {token} })
    } catch (error) {
        res
        .status(400)
        .json({ success : false, message : "Error while Creating Token" })
    }
})

router.post("/signup",(req,res)=>{
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
    
    console.log(name,password,email);
    if(name === undefined|| password === undefined || email === undefined){
        res.status(400).json({success:false,message:"Provide All the Details!"})
        return;
    }

    let id = userList.length + 1 ;

    const user = {id,name,password,email};

    userList.push(user);

    /* it will send UserList to Server */
    // res.status(200).json({success:true,message:"Welcome SignUp Successfully",userList})    
    const payload = { userId : user.id }
    try {
        const token = jwt.sign(payload,jwtSecretKey, jwtConfig);
        res
        .status(200)
        .json({ success : true , message : "Login Successfully", data : {token} })
    } catch (error) {
        res
        .status(400)
        .json({ success : false, message : "Error while Creating Token" })
    }
})

module.exports = router;