const { verifyUserToken } = require("../utils/jwt");
const { StatusCodes } = require("http-status-codes");
const Token = require("../models/TokenScema");
const User = require("../models/User")
const {addCookieToResponse, createJWT} = require("../utils/jwt");
const jwt = require("jsonwebtoken");


const authorizeUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const accessToken = authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;
  
  if(!accessToken) return res.status(StatusCodes.BAD_REQUEST).json({msg: "access token not found"})
    
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if(err) {
      // access token expired -- try refresh
      
      const refreshToken = req.signedCookies.refreshToken
      if(!refreshToken) return res.status(StatusCodes.NOT_FOUND).json({msg: "refresh token not found"});
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decodedRefresh) => {
        if(err) {
          return res.status(StatusCodes.BAD_REQUEST).json({msg: "expired token"});
        }
        const userId = req.userId;
        const {firstName, email, lastName, _id} = await User.findOne({userId});
        const tokenUserObj = {firstName: firstName, lastName: lastName, email: email, id: _id.toString()}
        const newAccessToken = createJWT(tokenUserObj, process.env.ACCESS_TOKEN_SECRET, process.env.ACCESS_TOKEN_LIFETIME);
        res.setHeader("x-access-token", newAccessToken);
        req.user = {userId: tokenUserObj.id}
        next()
      })
    } else {
        req.user = decoded;
        const userId = decoded.userId
        const refreshTokenUser = await Token.findOne({ userId, isValid: true });
        addCookieToResponse({res:res, token: refreshTokenUser.token});
        req.userId = userId;
        next()
    }
  })
}

module.exports = authorizeUser