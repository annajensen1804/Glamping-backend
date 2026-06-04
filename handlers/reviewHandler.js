const Review = require("../models/Review");

async function getAllReviews(req, res) {
    const reviews = await Review.find();
    res.json(reviews);
}

async function getReviewById(req, res) {
    const id = req.params.id;

    try {
        const review = await Review.findById(id);

        if (!review) {
          return res.status(404).json({ error: "Review blev ikke fundet" });
        }

        res.json(review);
    } catch (error) {
        res.status(400).json({error: "Ugyldigt id"});
    }
}

async function createReview(req, res) {
    const newReview = await Review.create({
      name: req.body.name,
      age: req.body.age,
      image: req.body.image,
      review: req.body.review,
      stay: req.body.stay
    });
    res.status(201).json(newReview);
}

async function updateReview(req, res) {
    const id = req.params.id;

    try {
        const updatedReview = await Review.findByIdAndUpdate(
          id,
          {
            name: req.body.name,
            age: req.body.age,
            image: req.body.image,
            review: req.body.review,
            stay: req.body.stay
          },
          { new: true },
        );

    if (!updatedReview) {
        return res.status(404).json({ error: "Review blev ikke fundet" });
    }
    res.json(updatedReview);
    } catch (error) {
        res.status(400).json({ error: "Ugyldigt id" });
    }
}

async function deleteReview(req, res) {
    const id = req.params.id;

    try {
        const deletedReview = await Review.findByIdAndDelete(id);

        if (!deletedReview) {
            return res.status(404).json({error: "Review blev ikke fundet" });
        } 
        res.json(deletedReview);

    } catch (error) {
        res.status(400).json({error: "Ugyldigt id" });
    }
}

module.exports = {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview,
};