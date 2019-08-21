const express = require("express");
const { User } = require("../../../model/User");
const mongoose = require("mongoose");
const passwordService = require("../../../services/bcrypt");
const tokenService = require("../../../services/token");
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

  passwordService
    .hashPassword(password)
    .then(hash => {
      newUser.password = hash;
      return newUser.save();
    })
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err));
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

  const { email, password, DOB, userType, phone } = req.body;

  Promise.all([passwordService.hashPassword(password), User.findById(id)])
    .then(values => {
      // console.log(values);
      let user = values[1];
      let hashPassword = values[0];

      if (!user)
        return Promise.reject({ status: 404, message: "User not found" });
      //update user
      Object.keys(req.body).forEach(field => {
        user[field] = req.body[field];
      });
      user.password = hashPassword;

      return user.save();
    })
    .then(user => res.status(200).json(user))
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
  let currentUser;
  User.findOne({ email })
    .then(user => {
      if (!user)
        return Promise.reject({ status: 404, message: "User not found" });
        currentUser = user;
      return passwordService.compare(password, user.password);

    })
    .then(isMatch => {
      if (!isMatch) res.status(400).json({ message: "wrong password" });
      const payload = { id: currentUser.id, email: currentUser.email, userType: currentUser.userType };
      return tokenService.createToken(payload, "XEDIKE", { expiresIn: "1h" });
    })
    .then(token => {
      res.status(200).json({ success: true, token });
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
