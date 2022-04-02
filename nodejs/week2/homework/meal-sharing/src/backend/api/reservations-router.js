const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/:id", async (request, response) => {
  try {
    const findId = reservations.find(
      (meal) => meal.id === Number(request.params.id)
    );
    response.json(findId);
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  try {
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
