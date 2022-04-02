const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/:id", async (request, response) => {
  try {
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
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
