const jwt = require("jsonwebtoken");

module.exports.authenticate = (req, res, next) => {
    // console.log(req.headers);
    const { token } = req.headers;
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) return res.status(401).json({ message: "token is invalid" });
      if (decoded) {
        req.user = decoded;
        return next();
      }
    });
  };
  
  // flexible type array
  module.exports.authorize = userType => {
    return (req, res, next) => {
      console.log("req.user", req.user);
  
  if(userType.includes(req.user.userType)) return next();
  
  res.status(403).json({
      message: "Logged in, but do not have permission"
  })
    };
  };