const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/:id", async (request, response) => {
  try {
    // console.log(meals);
    // console.log("in /api/meals");
    const findId = meals.find((meal) => meal.id === Number(request.params.id));
    if (findId) {
      response.json(findId);
    } else {
      response.status(404).end("Invalid ID");
    }
  } catch (error) {
    throw error;
  }
});

// router.get("/", async (request, response) => {
//   try {
//     console.log(meals);
//     console.log("in /api/meals");
//     response.json(meals);
//   } catch (error) {
//     throw error;
//   }
// });

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
  }

  if ("title" in request.query) {
    filteredData = meals.filter((meal) =>
      meal.title.includes(request.query.title)
    );
  }
  if ("limit" in request.query) {
    const mappedMeals = meals.map((meal) => meal);
    const limit = Number(request.query.limit);
    filteredData = mappedMeals.slice(0, limit);
  }

  response.json(filteredData);
});

module.exports = router;
