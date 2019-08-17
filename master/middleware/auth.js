
module.exports.authenticate = (req, res, next) => {
    console.log(req.headers);
    const { token } = req.headers;
    jwt.verify(token, "XEDIKE", (err, decoded) => {
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
      console.log("author", req.user);
  
  if(userType.includes(req.user.userType)) return next();
  
  res.status(403).json({
      message: "Logged in, but do not have permission"
  })
    };
  };