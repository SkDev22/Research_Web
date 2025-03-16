// const express = require("express");
// const multer = require("multer");
// const {
//   addListing,
//   getAllListings,
//   getSingleListing,
//   deleteListing,
// } = require("../controllers/listings_controller.js");
// const router = express.Router();

// // Image storage engine
// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     return cb(null, `${Date.now()}${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });

// // Add Listing
// router.post("/add", upload.array("images", 6), addListing);

// //Get all Listings
// router.get("/", getAllListings);

// //Get each listing by id
// router.get("/:id", getSingleListing);

// //Update post
// // router.put("/update/:id", updatePost);

// // Delete post
// router.delete("/:id", deleteListing);

// module.exports = router;

const express = require("express");
const multer = require("multer");
const {
  addListing,
  getAllListings,
  getSingleListing,
  deleteListing,
} = require("../controllers/listings_controller.js");
const router = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Add Listing
router.post("/add", upload.array("images", 6), addListing);

// Get all Listings
router.get("/", getAllListings);

// Get each listing by id
router.get("/:id", getSingleListing);

// Delete post
router.delete("/:id", deleteListing);

module.exports = router;
