const express = require("express");
const { User } = require("../../../model/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


//req, res, next: middleware
module.exports.getUsers = (req, res, next) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.json(err));
};

//create new user
//acess: Public
module.exports.createUsers = (req, res, next) => {
  console.log("create user");
  //validation
  //hash password
  //data.req.body
  const { email, password, DOB, userType, phone } = req.body;

  const newUser = new User({ email, password, DOB, userType, phone });
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.json(err);
    bcrypt.hash(password, salt, (er, hash) => {
      if (err) return res.json(err);
      newUser.password = hash;
      newUser
        .save()
        .then(user => {
          res.status(200).json(user);
        })
        .catch(err => res.json(err));
    });
  });
};

module.exports.getUserById = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ message: "Id is invalid" });
  User.findById(id)
    .then(user => {
      if (!user)
        return Promise.reject({ status: 404, message: "User not found" });

      res.status(200).json(user);
    })
    .catch(err => {
      res.status(err.status).json({ message: err.message });
    });
};

module.exports.updateUserById = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ message: "Id is invalid" });
  User.findById(id)
    .then(user => {
      if (!user)
        return Promise.reject({ status: 404, message: "User not found" });

      const { email, password, DOB, userType, phone } = req.body;
      console.log(user._doc);
      Object.keys(req.body).forEach(field => {
        // console.log(field, user[field]);
        user[field] = req.body[field];
      });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.json(err);
        bcrypt.hash(user.password, salt, (er, hash) => {
          if (err) return res.json(err);
          user.password = hash;

          user
            .save()
            .then(user => {
              res.status(200).json(user);
            })
            .catch(err => res.json(err));
        });
      });

      // user.email = email;
      // user.password = password;
      // user.DOB = DOB;
      // user.userType = userType;
      // user.phone = phone;
      // return user.save();
    })
    // .then(user => res.status(200).json(user))
    .catch(err => {
      if (err.status)
        return res.status(err.status).json({ message: err.message });
      return res.json(err);
    });
};

module.exports.deleteUserById = (req, res, next) => {
  const { id } = req.params;
  User.deleteOne({ _id: id })
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user)
        return Promise.reject({ status: 404, message: "User not found" });
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (!isMatch) res.status(400).json({ message: "wrong password" });

        const payload = { email: user.email, userType: user.userType };

        jwt.sign(payload, "XEDIKE", { expiresIn: "1h" }, (err, token) => {
          if (err) res.json(res);
          res.status(200).json({ success: true, token });
        });
      });
    })
    .catch(err => {
      if (!err.status) return res.json(err);
      res.status(err.status).json({ message: err.message });
    });
};

module.exports.uploadAvatar = (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .then(user => {
      if (!user)
        return Promise.reject({ status: 404, message: "User not found" });
      user.avatar = req.file.path;
      return user.save();
    })
    .then(result => res.status(200).json(result))
    .catch(err => {
      if (!err.status) return res.json(err);
      res.status(err.status).json({ message: err.message });
    });
};
