const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});
app.get("/meals", async (request, response) => {
  const allMealWithReview = meals.map((meal) => {
    const review = reviews.filter((reviews) => meal.id === reviews.mealId);
    return {
      ...meal,
      reviews: review,
    };
  });
  response.json(allMealWithReview);
});
app.get("/cheap-meals", async (request, response) => {
  const allCheapMealWithReview = meals
    .filter((cheapMeal) => cheapMeal.price < 70)
    .map((meal) => {
      const cheapMealReview = reviews.filter(
        (review) => meal.id === review.mealId
      );
      return {
        ...meal,
        review: cheapMealReview,
      };
    });
  response.json(allCheapMealWithReview);
});
app.get("/large-meals", async (request, response) => {
  const allLargeMealWithReview = meals
    .filter((largeMeal) => largeMeal.maxNumberOfGuests > 10)
    .map((meal) => {
      const largeMealReview = reviews.filter(
        (review) => meal.id === review.mealId
      );
      return {
        ...meal,
        review: largeMealReview,
      };
    });

  response.json(allLargeMealWithReview);
});
app.get("/meal", async (request, response) => {
  const randomFunction = Math.floor(Math.random() * meals.length);
  const randomMeal = meals[randomFunction];
  console.log(randomMeal);
  const randomMealReview = reviews.filter(
    (review) => randomMeal.id === review.mealId
  );
  const randomMealObj = {
    ...randomMeal,
    review: randomMealReview,
  };
  response.json(randomMealObj);
});
app.get("/reservations", async (request, response) => {
  response.send(reservations);
});
app.get("/reservation", async (request, response) => {
  const randomNumber = Math.floor(Math.random() * reservations.length);
  const randomReservation = reservations[randomNumber];
  response.json(randomReservation);
});

module.exports = app;
