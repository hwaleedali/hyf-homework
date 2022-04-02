const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/:id", async (request, response) => {
  try {
    const findId = meals.find((meal) => meal.id === Number(request.params.id));
    if (isNaN(request.params.id)) {
      response.status(404).end("Invalid ID");
    } else {
      response.json(findId);
    }
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  let filteredData = meals;
  {
    try {
      if ("date" in request.query)
        filteredData = filteredData.filter(
          (meal) =>
            new Date(meal.createdAt).getTime() >
            new Date(request.query.date).getTime()
        );
    } catch (error) {
      throw error;
    }
  }
  if ("maxprice" in request.query) {
    filteredData = meals.filter(
      (meal) => meal.price <= Number(request.query.maxprice)
    );
    if (isNaN(request.query.maxprice)) {
      return response.status(404).end("Please write Correct Price");
    } else {
      return response.json(filteredData);
    }
  }

  if ("title" in request.query) {
    filteredData = meals.filter((meal) =>
      meal.title.toLowerCase().includes(request.query.title.toLowerCase())
    );
    if (!isNaN(request.query.title)) {
      return response.status(404).end("Please write Correct title");
    } else {
      return response.json(filteredData);
    }
  }
  if ("limit" in request.query) {
    const mappedMeals = meals.map((meal) => meal);
    const limit = Number(request.query.limit);
    filteredData = mappedMeals.slice(0, limit);
    if (isNaN(limit)) {
      return response.status(404).end("Please write Correct limit");
    } else {
      return response.json(filteredData);
    }
  }

  response.json(filteredData);
});

module.exports = router;
