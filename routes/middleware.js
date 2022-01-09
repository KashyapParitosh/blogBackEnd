const jwt = require("jsonwebtoken");
const jwtSecretKey = require('../secretKey');

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers
    
    if(authorization === undefined) {
        res.status(400).json({
            success : false,
            message : "Error : Invalid Auth Header"
        })
        return;       
    }
     
    const [, token ] = authorization.split(" ");

    try {
        const payload = jwt.verify( token, jwtSecretKey );
        res.auth = payload;
        next();
        // res.status(200)
        //      .json({ success : true , message: "Login successfully", data : payload });
    } catch (error) {
        res.status(403).json({
            success : false,
            message : "Error while verifying token"
        })
    }
}

module.exports = verifyToken;