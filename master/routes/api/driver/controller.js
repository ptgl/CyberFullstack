const express = require("express");
const { Driver } = require("../../../model/Driver");
const mongoose = require("mongoose");
const passwordService = require("../../../services/bcrypt");
const tokenService = require("../../../services/token");

module.exports.getDrivers = (req, res, next) => {
  Driver.find()
    .then(drivers => {
      res.status(200).json(drivers);
    })
    .catch(err => res.json(err));
};

module.exports.createDrivers = (req, res, next) => {
  console.log("create Driver");

  const { userId, driverLicense, address, carInfo } = req.body;
  const newDriver = new Driver({ userId, driverLicense, address, carInfo });

  newDriver
    .save()
    .then(Driver => res.status(200).json(Driver))
    .catch(err => res.json(err));
};

module.exports.getDriverById = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ message: "Id is invalid" });
  Driver.findById(id)
    .then(Driver => {
      if (!Driver)
        return Promise.reject({ status: 404, message: "Driver not found" });

      res.status(200).json(Driver);
    })
    .catch(err => {
      res.status(err.status).json({ message: err.message });
    });
};

module.exports.updateDriverById = (req, res, next) => {
  const { id } = req.params;

  Driver.findById(id)
    .then(driver => {
      if (!driver)
        return Promise.reject({ status: 404, message: "Driver not found" });
      //update Driver
      Object.keys(req.body).forEach(field => {
        driver[field] = req.body[field];
      });

      return driver.save();
    })
    .then(driver => res.status(200).json(driver))
    .catch(err => {
      if (err.status)
        return res.status(err.status).json({ message: err.message });
      return res.json(err);
    });
};

module.exports.deleteDriverById = (req, res, next) => {
  const { id } = req.params;
  Driver.deleteOne({ _id: id })
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
};

module.exports.uploadCar = (req, res, next) => {
  const { id } = req.params;
  Driver.findById(id)
    .then(driver => {
      if (!driver)
        return Promise.reject({ status: 404, message: "Driver not found" });
      driver.carPhoto = req.file.path;
      return driver.save();
    })
    .then(result => res.status(200).json(result))
    .catch(err => {
      if (!err.status) return res.json(err);
      res.status(err.status).json({ message: err.message });
    });
};
