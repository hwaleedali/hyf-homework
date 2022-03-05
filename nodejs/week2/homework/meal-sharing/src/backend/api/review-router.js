const express = require("express");
const router = express.Router();

// const reviews = require("./../data/reviews.json");
const reviews = require("./../data/reviews.json");

router.get("/:id", async (request, response) => {
  try {
    // console.log(meals);
    // console.log("in /api/meals");
    const findId = reviews.find(
      (review) => review.id === Number(request.params.id)
    );
    response.json(findId);
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  try {
    console.log(reviews);
    console.log("in /api/reviews");
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
