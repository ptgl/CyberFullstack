const express = require("express");
const router = express.Router();
const driverController = require("../driver/controller");
const {uploadImage} = require("../../../middleware/uploadImage")
/**
 * GET /api/drivers
 * GET /api/drivers/:id
 * POST /api/drivers
 * PUT /api/drivers/:id {private}
 * DELETE /api/drivers/:id
 *
 */

router.get("/", driverController.getDrivers);
router.get("/:id", driverController.getDriverById);
router.post("/", driverController.createDrivers);
router.put(
  "/:id",
  //   authenticate,
  //   authorize(["driver"]),
  driverController.updateDriverById
);
router.delete(
  "/:id",
  // authorize(["admin"]),
  driverController.deleteDriverById
);

router.post(
  "/upload-car/:id",
  uploadImage("car"),
  driverController.uploadCar
);

module.exports = router;
