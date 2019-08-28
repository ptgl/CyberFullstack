const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  locationFrom: { type: String, required: true },
  locationTo: { type: String },
  startTime: { type: Date },
  fee: { type: Number },
  availableSeats: { type: Number },
  isFinished: { type: Boolean, default: false },
  passengers: [
    {
      passengerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
      numberOfBookingSeats: Number
    }
  ]
});

const Trip = mongoose.model("Trip", TripSchema, "Trip");

module.exports = {
  TripSchema,
  Trip
};
