

const bcrypt = require("bcryptjs");

function hashPassword(password) {
    return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) reject(err);
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) return reject(err);
        resolve(hash);
      });
    });
  });
}

function compare(pass1, pass2){
  return new Promise((resolve, reject) => {
    bcrypt.compare(pass1, pass2, (err, isMatch) => {
      if (err) reject(err)
      resolve(isMatch)
    })
  })
}

module.exports = {hashPassword, compare}