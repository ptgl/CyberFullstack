const express = require("express");
const { Trip } = require("../../../model/Trip");
const { User } = require("../../../model/User");
const mongoose = require("mongoose");

module.exports.getTrips = (req, res, next) => {
  Trip.find()
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(err => res.json(err));
};

//driver create
module.exports.createTrip = (req, res, next) => {
  console.log("create Trip");
  const driverId = req.user.id;
  const { locationFrom, locationTo, startTime, fee, availableSeats } = req.body;
  const newTrip = new Trip({
    driverId,
    locationFrom,
    locationTo,
    startTime,
    availableSeats,
    fee
  });

  newTrip
    .save()
    .then(Trip => {
      res.status(200).json(Trip);
    })
    .catch(err => res.json(err));
};

module.exports.getTripById = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ message: "Id is invalid" });
  Trip.findById(id)
    .populate("driverId", "-password -_id")
    .then(Trip => {
      if (!Trip)
        return Promise.reject({ status: 404, message: "Trip not found" });

      res.status(200).json(Trip);
    })
    .catch(err => {
      res.status(err.status).json({ message: err.message });
    });
};

module.exports.updateTripById = (req, res, next) => {
  const { id } = req.params;

  Trip.findById(id)
    .then(trip => {
      if (!trip)
        return Promise.reject({ status: 404, message: "Trip not found" });
      //update Trip
      Object.keys(req.body).forEach(field => {
        trip[field] = req.body[field];
      });

      return trip.save();
    })
    .then(trip => res.status(200).json(trip))
    .catch(err => {
      if (err.status)
        return res.status(err.status).json({ message: err.message });
      return res.json(err);
    });
};

module.exports.deleteTripById = (req, res, next) => {
  const { id } = req.params;
  Trip.deleteOne({ _id: id })
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
};

module.exports.bookTrip = (req, res, next) => {
  const passengerId = req.user.id;
  const { numberOfBookingSeats } = req.body;
  const { tripId } = req.params;
  Trip.findById(tripId)
    .then(trip => {
      if (trip.availableSeats < numberOfBookingSeats)
        return Promise.reject({ status: 400, message: "Not enough seats" });
      const passenger = {
        passengerId,
        numberOfBookingSeats
      };
      trip.passengers.push(passenger);
      trip.availableSeats -= numberOfBookingSeats;
      return trip.save();
    })
    .then(trip => res.status(200).json(trip))
    .catch(err => {
      if (err.status)
        return res.status(err.status).json({ message: err.message });
      res.json(err);
    });
};

module.exports.finishTrip = (req, res, next) => {
  const { tripId } = req.params;
  Trip.findById(tripId).then(trip => {
    console.log("trip",trip)
      trip.isFinished = true;
      return trip.save();
    })
    .then(trip => res.status(200).json(trip))
    .catch(err => {
      if (err.status)
        return res.status(err.status).json({ message: err.message });
      res.json(err);
    });
};
