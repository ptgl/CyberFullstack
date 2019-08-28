const express = require("express");
const router = express.Router();
const userController = require("./controller");
const { authenticate, authorize } = require("../../../middleware/auth");
const {uploadImage} = require("../../../middleware/uploadImage")

/**
 *
 * place to store data in a request: params, header
 * Get: params, header
 * Post: params, header, body
 *
 */

/**
 * GET /api/users
 * GET /api/users/:id
 * POST /api/users
 * POST /api/users/login
 * PUT /api/users/:id {private}
 * DELETE /api/users/:id
 *
 */

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUsers);
router.put(
  "/:id",
  authenticate,
  authorize(["driver", "passenger"]),
  userController.updateUserById
);
router.delete("/:id", authorize(["admin"]), userController.deleteUserById);
router.post("/login", userController.login);
router.post(
  "/upload-avatar/:id",
  uploadImage("avatar"),
  userController.uploadAvatar
);
// allow upload a single image

module.exports = router;
