const jwt = require("jsonwebtoken");

module.exports.createToken = (payload, key, option)=>{
    return new Promise((resolve, reject)=>{
        jwt.sign(payload, key, option, (err, token) => {
            if (err) reject(err);
            resolve( token );
          });
    })
}