const express = require("express");
const { getAllReviews, getReviewById, createReview, updateReview, deleteReview } = require("../handlers/reviewHandler");

const router = express.Router();



router.get("/reviews", getAllReviews);
router.get("/review/:id", getReviewById)
router.post("/review", createReview);
router.put("/review/:id", updateReview);
router.delete("/review/:id", deleteReview);

module.exports = router;