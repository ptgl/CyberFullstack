const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  driverLicense: { type: String, required: true, unique: true },
  address: { type: String },
  carInfo: { type: String },
  carPhoto: {type: String}
});

const Driver = mongoose.model("Driver", DriverSchema, "Driver");

module.exports = {
  DriverSchema,
  Driver
};
