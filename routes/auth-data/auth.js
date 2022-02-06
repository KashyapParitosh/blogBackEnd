const express = require("express");

const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtSecretKey = require("../../secretKey");
const jwtConfig = { expiresIn: "300min" };
const UserModel = require("../../dataModels/userModel");
// const verifyToken = require('../middleware');

router.post("/login", (req, res) => {
  const emailFromBody = req.body.email;
  const passwordFromBody = req.body.password;
  console.log(emailFromBody, passwordFromBody);

  if (emailFromBody === undefined || passwordFromBody === undefined) {
    res
      .status(400)
      .json({ success: false, message: "Email or Password is Undefined" });
    return;
  }
  UserModel.findOne({ email: emailFromBody }, (err, user) => {
    if (err) throw err;
    if (user) {
      if (passwordFromBody === user.password) {
        const payload = { userId: user._id };
        try {
          const token = jwt.sign(payload, jwtSecretKey, jwtConfig);
          res
            .status(200)
            .json({
              success: true,
              message: "Login Successfully",
              data: { token },
            });
        } catch (error) {
          res
            .status(400)
            .json({ success: false, message: "Error while Creating Token" });
        }
      } else {
          res.json({ success : false, message : "Please Provide Correct Password"})
          return;
      }
    } else {
        res.json({ success : false , message : "user does not exist"})
        return
    } 
  });  
});

router.post("/signup", (req, res) => {
  console.log("its signup route");
  let userId;
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  console.log(name, password, email);
  if (name === undefined || password === undefined || email === undefined) {
    res
      .status(400)
      .json({ success: false, message: "Provide All the Details!" });
    return;
  }
  UserModel.findOne({ email: email }, (err, user) => {
    if (err) throw err;
    if (user) {
        console.log(user.email);
      res.json({ success: false, message: "User already Registered" });
    } else {
      const user1 = new UserModel({
        name,
        email,
        password,
      });

      user1
        .save()
        .then((res) => {
          console.log(`User Registered Successfully ${res}`);
          userId = res._id;
        })
        .catch((err) => {
          console.log(`${err}`);
        });

      const payload = { userId };
      try {
        const token = jwt.sign(payload, jwtSecretKey, jwtConfig);
        console.log(token);
        res
          .status(200)
          .json({
            success: true,
            message: "Login Successfully",
            data: { token },
          });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: "Error while Creating Token" });
      }
    }
  });
});

module.exports = router;
