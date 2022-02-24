const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Application Result");
});
app.get("/meals", async (request, response) => {
  // console.log(meals);
  const allMealWithReview = meals.map((meal) => {
    const mealReview = reviews.filter((review) => meal.id === review.mealId);
    return {
      ...meal,
      review: mealReview,
    };
  });
  // console.log(allMealWithReview);
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
  // console.log(randomFunction);
  const mappedMeal = meals.map((meal) => meal);
  // console.log(mappedMeal);
  const randomFunction = Math.floor(Math.random() * mappedMeal.length);
  const randomMeal = mappedMeal[randomFunction];
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
  const allReservations = reservations.map((reservation) => reservation);

  response.send(allReservations);
});
app.get("/reservation", async (request, response) => {
  const allRandomReservation = reservations.map((reservation) => reservation);

  const randomNumber = Math.floor(Math.random() * reservations.length);
  const randomReservation = allRandomReservation[randomNumber];
  response.json(randomReservation);
});

module.exports = app;
