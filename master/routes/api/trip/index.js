const express = require("express");
const router = express.Router();
const tripController = require("../trip/controller");
const { authenticate, authorize } = require("../../../middleware/auth");

/**
 * GET /api/trips
 * GET /api/trips/:id
 * POST /api/trips (PRIVATE-Driver)
 * PUT /api/trips/:id (private)
 * DELETE /api/trips/:id
 *
 */

router.get("/", tripController.getTrips);
router.get("/:id", tripController.getTripById);
router.post(
  "/",
  authenticate,
  authorize(["driver"]),
  tripController.createTrip
);
router.put(
  "/:id",
    authenticate,
    authorize(["driver"]),
  tripController.updateTripById
);
router.delete(
  "/:id",
  // authorize(["admin"]),
  tripController.deleteTripById
);

router.put(
  "/book-trip/:tripId",
    authenticate,
    // authorize(["passenger"]),
  tripController.bookTrip
);

router.put(
  "/finish-trip/:tripId",
    authenticate,
    // authorize(["diver"]),
  tripController.finishTrip
);

module.exports = router;
